---
title: "Prototype Pollution: Poisoning the JavaScript Well"
date: 2022-12-06T00:00:00Z
draft: false
tags: ["web", "javascript", "vulnerability", "prototype-pollution"]
---

Prototype Pollution is one of the most elegant, yet devastating, vulnerabilities in the JavaScript ecosystem. It occurs when a flaw in an application allows an attacker to inject properties directly into JavaScript's base `Object.prototype`. 

Because nearly all objects in JavaScript inherit from this base prototype, polluting it effectively poisons the entire application runtime. 

Let's break down exactly how this works, why it happens, and how to defend against it.

## 1. The Anatomy of a Prototype

To understand the attack, you have to understand the language architecture. 

JavaScript is a **prototype-based language**. This means objects don't inherit from classes; they inherit directly from other objects via a hidden linkage.

When you try to access a property on an object, JavaScript checks that object first. If it doesn't find the property, it travels up the "prototype chain" to the object's parent, looking for it there.

```javascript
let user = { name: "k0imet" };

// 'name' exists directly on the object.
console.log(user.name); // Returns "k0imet"

// 'toString' does NOT exist on the user object.
// But JS climbs the chain to Object.prototype, finds it there, and executes it.
console.log(user.toString()); // Returns "[object Object]"
```

Almost every object you create in JavaScript ultimately inherits from a master object called `Object.prototype`. 

## 2. The Attack Vector: `__proto__`

Every object has a magical property called `__proto__` (or `constructor.prototype`), which points directly to its parent prototype. 

**Here is the critical flaw:** If an application blindly merges user input into an object without sanitizing it, an attacker can pass a JSON payload containing the `__proto__` key. 

Instead of treating `__proto__` as just another string, the JavaScript engine interprets it as a command to modify the object's actual parent prototype.

### The Vulnerability in Action

The most common culprit is insecure recursive merge functions (like deep cloning or merging configurations).

Let's look at a vulnerable merge function:

```javascript
// A poorly written, vulnerable merge function
function merge(target, source) {
    for (let key in source) {
        if (typeof target[key] === 'object' && typeof source[key] === 'object') {
            merge(target[key], source[key]);
        } else {
            target[key] = source[key];
        }
    }
    return target;
}
```

Now, imagine an attacker sends the following JSON payload to your server to update their profile:

```json
{
    "name": "hacker",
    "__proto__": {
        "isAdmin": true
    }
}
```

When the vulnerable `merge()` function processes this payload, it doesn't just add `isAdmin` to the attacker's user object. It evaluates the `__proto__` key, reaches up to the global `Object.prototype`, and injects `isAdmin: true` there.

### The Impact (Total System Compromise)

Once the global prototype is polluted, *every single object* in the application instantly inherits that property.

```javascript
let newAdminUser = {};
let emptyConfig = {};

// We never set isAdmin on these objects!
console.log(newAdminUser.isAdmin); // Returns true
console.log(emptyConfig.isAdmin);  // Returns true
```

If the application later checks `if (user.isAdmin) { grantAccess(); }`, the attacker has successfully bypassed authorization across the entire system. Depending on the application's logic, this can lead to Remote Code Execution (RCE), Cross-Site Scripting (XSS), or total privilege escalation.

## 3. How to Prevent Prototype Pollution

Defending against prototype pollution requires strict boundary enforcement when handling user-supplied JSON or objects.

### Strategy 1: Use Safe Object Creation
If you don't need an object to inherit standard JavaScript methods, create it with a `null` prototype. This breaks the prototype chain entirely, making it immune to pollution.

```javascript
// This object has no __proto__. It is a dead end.
let safeObject = Object.create(null);
```

### Strategy 2: Freeze the Prototype
You can lock down the global `Object.prototype` so that no application code (or attacker) can ever modify it at runtime.

```javascript
// Put this at the very top of your application entry point
Object.freeze(Object.prototype);
```

### Strategy 3: Sanitize Keys During Merges
If you must write or use merge functions, explicitly block the keys that manipulate the prototype chain.

```javascript
function safeMerge(target, source) {
    for (let key in source) {
        // Drop malicious keys immediately
        if (key === '__proto__' || key === 'constructor') {
            continue; 
        }
        
        if (typeof target[key] === 'object' && typeof source[key] === 'object') {
            safeMerge(target[key], source[key]);
        } else {
            target[key] = source[key];
        }
    }
    return target;
}
```

### Strategy 4: Use Map instead of Object
If you are storing key-value pairs (like a cache or user dictionary), use JavaScript's native `Map` object instead of a standard `{}` object. `Map` instances are not vulnerable to prototype pollution via user input because they store keys distinctly from the object prototype.

## 4. Conclusion

Prototype pollution exploits the very foundation of JavaScript's object-oriented design. Because it operates at the language level rather than the application level, a single polluted endpoint can compromise entirely unrelated systems within the same runtime.

Always validate your inputs, freeze your prototypes where possible, and never trust a recursive merge function you didn't audit yourself.
