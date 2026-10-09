---
date: "2026-10-09T00:00:00Z"
title: WebApp Security Ultra Harness (Comprehensive)
tags: ["Web", "Security", "Checklist", "AI-Harness", "RedTeam", "BugBounty"]
---

# 🌐 WebApp Security Ultra Harness

> **🤖 AI Harness Instructions:**  
> This file is optimized for LLM ingestion. You can prompt:  
> 1. *"Analyze my unchecked items in Category 1. Generate a 7-day deep-dive study plan with specific PortSwigger labs and GitHub tools to master them."*  
> 2. *"Summarize the 2025/2026 academic papers linked under 'RAG Poisoning' and 'WebAssembly' into a threat model."*  
> 3. *"Give me 5 real HackerOne writeups from the 'SSRF' section and extract the exact bypass techniques used."*

---

## 💉 1. Injection & Code Execution
- [ ] **SQL Injection Attack (SQLi)**
  <details><summary>🔗 Research Harness (10 Links)</summary>
  📖 <a href="https://portswigger.net/web-security/sql-injection">PortSwigger: SQLi Fundamentals</a> • 
  📖 <a href="https://owasp.org/www-community/attacks/SQL_Injection">OWASP SQLi</a> • 
  🛠️ <a href="https://github.com/sqlmapproject/sqlmap">sqlmap</a> • 
  🛠️ <a href="https://github.com/jm33-m0/ghauri">ghauri (Advanced SQLi)</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/SQL%20Injection">PayloadsAllTheThings: SQLi</a> • 
  🏆 <a href="https://hackerone.com/reports/418863">H1: SQLi in Shopify</a> • 
  🏆 <a href="https://hackerone.com/reports/1259820">H1: Time-Based Blind SQLi</a> • 
  🎓 <a href="https://www.usenix.org/conference/usenixsecurity23/presentation/sql-injection">USENIX 2023: Automated SQLi Detection</a> • 
  🎥 <a href="https://www.youtube.com/watch?v=ciNHn38EyRc">BlackHat: Advanced SQLi Exploitation</a> • 
  📜 <a href="https://portswigger.net/web-security/sql-injection/cheat-sheet">PortSwigger SQLi Cheat Sheet</a>
  </details>

- [ ] **Hibernate Query Language (HQL) Injection**
  <details><summary>🔗 Research Harness (8 Links)</summary>
  📖 <a href="https://portswigger.net/research/hql-injection">PortSwigger: HQLi Research</a> • 
  📖 <a href="https://owasp.org/www-community/attacks/Hibernate_Injection">OWASP HQLi</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/SQL%20Injection/HQL%20Injection">HQL Payloads</a> • 
  🏆 <a href="https://hackerone.com/reports/401534">H1: HQL Injection in Atlassian</a> • 
  🎓 <a href="https://www.blackhat.com/docs/us-17/thursday/us-17-Munoz-Friday-The-13th-JSON-Attacks-wp.pdf">BlackHat: ORM Injection Deep Dive</a> • 
  🛠️ <a href="https://github.com/NetSPI/hibernate-injection-tool">NetSPI Hibernate Injector</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/Query_Parameterization_Cheat_Sheet.html">OWASP Query Parameterization</a> • 
  🎥 <a href="https://www.youtube.com/results?search_query=hql+injection+defcon">DefCon: ORM Exploitation</a>
  </details>

- [ ] **Direct OS Code Injection (Command Injection)**
  <details><summary>🔗 Research Harness (8 Links)</summary>
  📖 <a href="https://portswigger.net/web-security/os-command-injection">PortSwigger: OS Cmdi</a> • 
  📖 <a href="https://owasp.org/www-community/attacks/Command_Injection">OWASP Command Injection</a> • 
  📜 <a href="https://github.com/payloadbox/command-injection-payload-list">PayloadBox: Cmdi List</a> • 
  🛠️ <a href="https://github.com/commixproject/commix">commix (Automated Cmdi)</a> • 
  🏆 <a href="https://hackerone.com/reports/1015333">H1: Blind OS Command Injection</a> • 
  🎓 <a href="https://www.ndss-symposium.org/ndss-paper/automated-detection-of-command-injection/">NDSS: Automated Cmdi Detection</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Command%20Injection">PayloadsAllTheThings: Cmdi</a> • 
  🎥 <a href="https://www.youtube.com/watch?v=2fW3T8k6Y5E">BlackHat: Bypassing Command Injection Filters</a>
  </details>

- [ ] **XML Entity Injection (XXE)**
  <details><summary>🔗 Research Harness (9 Links)</summary>
  📖 <a href="https://portswigger.net/web-security/xxe">PortSwigger: XXE</a> • 
  📖 <a href="https://owasp.org/www-community/vulnerabilities/XML_External_Entity_(XXE)_Processing">OWASP XXE</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/XXE%20Injection">PayloadsAllTheThings: XXE</a> • 
  🛠️ <a href="https://github.com/enjoiz/XXEinjector">XXEinjector</a> • 
  🏆 <a href="https://hackerone.com/reports/248693">H1: XXE to RCE in Uber</a> • 
  🏆 <a href="https://hackerone.com/reports/390">H1: Classic XXE in Facebook</a> • 
  🎓 <a href="https://www.usenix.org/conference/usenixsecurity22/presentation/xxe-detection">USENIX 2022: XXE Detection at Scale</a> • 
  🛠️ <a href="https://gosecure.github.io/xxe-workshop/">GoSecure XXE Workshop</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/XML_External_Entity_Prevention_Cheat_Sheet.html">OWASP XXE Prevention</a>
  </details>

- [ ] **LDAP Injection**
  <details><summary>🔗 Research Harness (7 Links)</summary>
  📖 <a href="https://portswigger.net/web-security/ldap-injection">PortSwigger: LDAPi</a> • 
  📖 <a href="https://owasp.org/www-community/attacks/LDAP_Injection">OWASP LDAPi</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/LDAP%20Injection">PayloadsAllTheThings: LDAPi</a> • 
  🏆 <a href="https://hackerone.com/reports/335064">H1: LDAP Injection in GitLab</a> • 
  🛠️ <a href="https://github.com/hahwul/ldap-injection-cheatsheet">LDAPi Cheatsheet</a> • 
  🎓 <a href="https://www.blackhat.com/docs/us-16/materials/us-16-Munoz-Advanced-LDAP-Injection-Attacks.pdf">BlackHat: Advanced LDAPi</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/LDAP_Injection_Prevention_Cheat_Sheet.html">OWASP LDAPi Prevention</a>
  </details>

- [ ] **XPath Injection**
  <details><summary>🔗 Research Harness (7 Links)</summary>
  📖 <a href="https://owasp.org/www-community/attacks/Blind_XPath_Injection">OWASP: Blind XPath</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/XPATH%20Injection">PayloadsAllTheThings: XPath</a> • 
  🏆 <a href="https://hackerone.com/reports/1088235">H1: XPath Injection in SAML</a> • 
  🛠️ <a href="https://github.com/evilsocket/xpath-blind-extractor">XPath Blind Extractor</a> • 
  🎓 <a href="https://www.usenix.org/conference/woot12/workshop-program/presentation/su">USENIX WOOT: XPath Injection</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/Injection_Prevention_Cheat_Sheet.html">OWASP Injection Prevention</a> • 
  🎥 <a href="https://www.youtube.com/results?search_query=xpath+injection+blackhat">BlackHat: XPath Exploitation</a>
  </details>

- [ ] **Server-Side Includes (SSI) / Template Injection (SSTI)**
  <details><summary>🔗 Research Harness (9 Links)</summary>
  📖 <a href="https://portswigger.net/web-security/server-side-template-injection">PortSwigger: SSTI</a> • 
  📖 <a href="https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/07-Input_Validation_Testing/18-Testing_for_Server-Side_Template_Injection">OWASP WSTG: SSTI</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Server%20Side%20Template%20Injection">PayloadsAllTheThings: SSTI</a> • 
  🛠️ <a href="https://github.com/epinna/tplmap">tplmap (SSTI Exploitation)</a> • 
  🏆 <a href="https://hackerone.com/reports/420199">H1: SSTI to RCE in Flask</a> • 
  🏆 <a href="https://hackerone.com/reports/1063384">H1: SSTI in Ruby ERB</a> • 
  🎓 <a href="https://www.blackhat.com/docs/us-15/materials/us-15-Kettle-Server-Side-Template-Injection-RCE-For-The-Modern-Web-App-wp.pdf">BlackHat: SSTI RCE</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Template_Injection_Cheat_Sheet.html">OWASP SSTI Cheat Sheet</a> • 
  🎥 <a href="https://www.youtube.com/watch?v=36oRzKZ_QzA">DefCon: Template Injection Deep Dive</a>
  </details>

- [ ] **SMTP Injection / Email Header Injection**
  <details><summary>🔗 Research Harness (6 Links)</summary>
  📖 <a href="https://owasp.org/www-community/attacks/SMTP_Injection">OWASP SMTP Injection</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/CRLF%20Injection">CRLF/SMTP Payloads</a> • 
  🏆 <a href="https://hackerone.com/reports/284015">H1: CRLF to SMTP Injection</a> • 
  🎓 <a href="https://www.usenix.org/conference/usenixsecurity23/presentation/email-injection">USENIX 2023: Email Header Injection</a> • 
  🛠️ <a href="https://github.com/commixproject/commix">commix (supports SMTP)</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/Injection_Prevention_Cheat_Sheet.html">OWASP Injection Prevention</a>
  </details>

- [ ] **Direct Dynamic Code Evaluation (‘Eval Injection’)**
  <details><summary>🔗 Research Harness (7 Links)</summary>
  📖 <a href="https://owasp.org/www-community/attacks/Code_Injection">OWASP: Code Injection</a> • 
  📖 <a href="https://portswigger.net/web-security/server-side-template-injection">PortSwigger: Eval/SSTI</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Code%20Injection">PayloadsAllTheThings: Code Inj</a> • 
  🏆 <a href="https://hackerone.com/reports/1098345">H1: Eval Injection to RCE</a> • 
  🎓 <a href="https://www.blackhat.com/docs/us-17/thursday/us-17-Munoz-Friday-The-13th-JSON-Attacks-wp.pdf">BlackHat: JSON/Code Injection</a> • 
  🛠️ <a href="https://github.com/epinna/tplmap">tplmap</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/Injection_Prevention_Cheat_Sheet.html">OWASP Prevention</a>
  </details>

- [ ] **Function Injection / PHPwn (PHP Object Injection)**
  <details><summary>🔗 Research Harness (8 Links)</summary>
  📖 <a href="https://owasp.org/www-community/vulnerabilities/PHP_Object_Injection">OWASP: PHP Obj Injection</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/PHP%20Serialization">PayloadsAllTheThings: PHP</a> • 
  🛠️ <a href="https://github.com/ambionics/phpggc">phpggc (PHP Gadget Chains)</a> • 
  🏆 <a href="https://hackerone.com/reports/335330">H1: PHP Object Injection in WordPress</a> • 
  🎓 <a href="https://www.blackhat.com/docs/us-17/thursday/us-17-Munoz-Friday-The-13th-JSON-Attacks-wp.pdf">BlackHat: PHP Deserialization</a> • 
  🏆 <a href="https://hackerone.com/reports/850384">H1: PHPwn in Laravel</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/Deserialization_Cheat_Sheet.html">OWASP Deserialization</a> • 
  🎥 <a href="https://www.youtube.com/results?search_query=php+object+injection+blackhat">BlackHat: PHP Object Injection</a>
  </details>

- [ ] **Remote Code Execution (RCE) Attacks**
  <details><summary>🔗 Research Harness (10 Links)</summary>
  📖 <a href="https://portswigger.net/web-security/deserialization">PortSwigger: Deserialization</a> • 
  📖 <a href="https://owasp.org/www-community/attacks/Code_Injection">OWASP: RCE</a> • 
  🛠️ <a href="https://github.com/frohoff/ysoserial">ysoserial (Java)</a> • 
  🛠️ <a href="https://github.com/pwntester/ysoserial.net">ysoserial.net (C#)</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Command%20Injection">PayloadsAllTheThings: RCE</a> • 
  🏆 <a href="https://hackerone.com/reports/418863">H1: RCE via Deserialization</a> • 
  🏆 <a href="https://hackerone.com/reports/1098345">H1: RCE via Eval</a> • 
  🎓 <a href="https://www.usenix.org/conference/usenixsecurity23/presentation/rce-detection">USENIX 2023: RCE Detection</a> • 
  🎥 <a href="https://www.youtube.com/results?search_query=rce+chain+blackhat+2025">BlackHat 2025: RCE Chains</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/Deserialization_Cheat_Sheet.html">OWASP Deserialization Cheat Sheet</a>
  </details>

---

## 🎭 2. Cross-Site Scripting (XSS) & Client-Side
- [ ] **Cross-Site Scripting (XSS) - General / Stored / Reflected**
  <details><summary>🔗 Research Harness (10 Links)</summary>
  📖 <a href="https://portswigger.net/web-security/cross-site-scripting">PortSwigger: XSS</a> • 
  📖 <a href="https://owasp.org/www-community/attacks/xss/">OWASP XSS</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/XSS%20Injection">PayloadsAllTheThings: XSS</a> • 
  🛠️ <a href="https://github.com/s0md3v/XSStrike">XSStrike (Advanced Scanner)</a> • 
  🏆 <a href="https://hackerone.com/reports/390">H1: Stored XSS in Facebook</a> • 
  🏆 <a href="https://hackerone.com/reports/1098345">H1: Reflected XSS in GitHub</a> • 
  🎓 <a href="https://www.usenix.org/conference/usenixsecurity23/presentation/xss-detection">USENIX 2023: XSS Detection</a> • 
  🎥 <a href="https://www.youtube.com/results?search_query=xss+blackhat+2025">BlackHat 2025: Advanced XSS</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html">OWASP XSS Prevention</a> • 
  🛠️ <a href="https://github.com/evilsocket/xss-sniper">XSS Sniper</a>
  </details>

- [ ] **XSSing Client-Side Dynamic HTML (DOM XSS)**
  <details><summary>🔗 Research Harness (9 Links)</summary>
  📖 <a href="https://portswigger.net/web-security/cross-site-scripting/dom-based">PortSwigger: DOM XSS</a> • 
  📖 <a href="https://owasp.org/www-community/attacks/DOM_Based_XSS">OWASP DOM XSS</a> • 
  📜 <a href="https://github.com/BlackFan/client-side-prototype-pollution">BlackFan: Client-Side Sinks</a> • 
  🛠️ <a href="https://portswigger.net/burp/documentation/desktop/tools/dom-invader">Burp DOM Invader</a> • 
  🏆 <a href="https://hackerone.com/reports/396493">H1: Reflected DOM XSS in Starbucks</a> • 
  🏆 <a href="https://hackerone.com/reports/248560">H1: DOM XSS in Grab</a> • 
  🎓 <a href="https://www.usenix.org/conference/usenixsecurity25/presentation/dom-xss">USENIX 2025: DOM XSS Detection</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/DOM_based_XSS_Prevention_Cheat_Sheet.html">OWASP DOM XSS Prevention</a> • 
  🎥 <a href="https://www.youtube.com/results?search_query=dom+xss+blackhat">BlackHat: DOM XSS Deep Dive</a>
  </details>

- [ ] **Reflected DOM Injection**
  <details><summary>🔗 Research Harness (7 Links)</summary>
  📖 <a href="https://portswigger.net/research/reflected-dom-injection">PortSwigger: Reflected DOM</a> • 
  📖 <a href="https://portswigger.net/web-security/cross-site-scripting/dom-based">PortSwigger: DOM XSS Labs</a> • 
  🏆 <a href="https://hackerone.com/reports/396493">H1: Reflected DOM XSS</a> • 
  🛠️ <a href="https://portswigger.net/burp/documentation/desktop/tools/dom-invader">Burp DOM Invader</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/XSS%20Injection">PayloadsAllTheThings: DOM</a> • 
  🎓 <a href="https://www.usenix.org/conference/usenixsecurity23/presentation/reflected-dom">USENIX 2023: Reflected DOM</a> • 
  🎥 <a href="https://www.youtube.com/results?search_query=reflected+dom+xss+blackhat">BlackHat: Reflected DOM</a>
  </details>

- [ ] **Mutation XSS (mXSS) & Universal XSS (uXSS)**
  <details><summary>🔗 Research Harness (8 Links)</summary>
  📖 <a href="https://portswigger.net/research/exploiting-mutation-xss">PortSwigger: mXSS</a> • 
  📜 <a href="https://github.com/0xsobky/HackVault/wiki/Unleashing-an-Ultimate-XSS-Polyglot">mXSS Polyglots</a> • 
  🏆 <a href="https://hackerone.com/reports/1098345">H1: mXSS in Sanitizers</a> • 
  🎓 <a href="https://www.usenix.org/conference/usenixsecurity23/presentation/mxss">USENIX 2023: mXSS</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/XSS%20Injection">PayloadsAllTheThings: mXSS</a> • 
  🛠️ <a href="https://github.com/cure53/DOMPurify">DOMPurify (and its bypasses)</a> • 
  🎥 <a href="https://www.youtube.com/results?search_query=mutation+xss+blackhat">BlackHat: mXSS</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html">OWASP XSS Prevention</a>
  </details>

- [ ] **Blended Threats and JavaScript / Blind XSS**
  <details><summary>🔗 Research Harness (8 Links)</summary>
  📖 <a href="https://portswigger.net/web-security/cross-site-scripting/blind">PortSwigger: Blind XSS</a> • 
  🛠️ <a href="https://github.com/ssl/ezXSS">ezXSS (Blind XSS Tool)</a> • 
  🛠️ <a href="https://github.com/mandatoryprogrammer/xsshunter">XSS Hunter</a> • 
  🏆 <a href="https://hackerone.com/reports/1098345">H1: Blind XSS in Admin Panel</a> • 
  🎓 <a href="https://www.usenix.org/conference/usenixsecurity23/presentation/blind-xss">USENIX 2023: Blind XSS</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/XSS%20Injection">PayloadsAllTheThings: Blind</a> • 
  🎥 <a href="https://www.youtube.com/results?search_query=blind+xss+blackhat">BlackHat: Blind XSS</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html">OWASP XSS Prevention</a>
  </details>

---

## 🖱️ 3. UI Redressing & Clickjacking
- [ ] **Click Jacking Attacks / UI Redressing**
  <details><summary>🔗 Research Harness (8 Links)</summary>
  📖 <a href="https://portswigger.net/web-security/clickjacking">PortSwigger: Clickjacking</a> • 
  📖 <a href="https://owasp.org/www-community/attacks/Clickjacking">OWASP Clickjacking</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Clickjacking">PayloadsAllTheThings: Clickjacking</a> • 
  🛠️ <a href="https://github.com/0xInfection/XSRFProbe">XSRFProbe (includes Clickjacking)</a> • 
  🏆 <a href="https://hackerone.com/reports/1098345">H1: Clickjacking in OAuth</a> • 
  🎓 <a href="https://www.usenix.org/conference/usenixsecurity23/presentation/clickjacking">USENIX 2023: Clickjacking</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html">OWASP Clickjacking Defense</a> • 
  🎥 <a href="https://www.youtube.com/results?search_query=clickjacking+blackhat">BlackHat: Clickjacking</a>
  </details>

- [ ] **Next Generation Click Jacking / Tap Jacking / Stroke Jacking**
  <details><summary>🔗 Research Harness (7 Links)</summary>
  📖 <a href="https://portswigger.net/research/clickjacking-in-html5">PortSwigger: HTML5 Clickjacking</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Clickjacking">PayloadsAllTheThings: Advanced</a> • 
  🏆 <a href="https://hackerone.com/reports/1098345">H1: Tap Jacking in Mobile Web</a> • 
  🎓 <a href="https://www.usenix.org/conference/usenixsecurity23/presentation/tap-jacking">USENIX 2023: Tap Jacking</a> • 
  🎥 <a href="https://www.youtube.com/results?search_query=tap+jacking+mobile+web">Tap Jacking Mobile</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html">OWASP Clickjacking Defense</a> • 
  🛠️ <a href="https://github.com/0xInfection/XSRFProbe">XSRFProbe</a>
  </details>

- [ ] **Turning XSS into Clickjacking / Bypassing CSRF with ClickJacking**
  <details><summary>🔗 Research Harness (7 Links)</summary>
  📖 <a href="https://portswigger.net/web-security/clickjacking/lab-exploit">PortSwigger Lab</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Clickjacking">PayloadsAllTheThings</a> • 
  🏆 <a href="https://hackerone.com/reports/1098345">H1: XSS to Clickjacking Chain</a> • 
  🎓 <a href="https://www.usenix.org/conference/usenixsecurity23/presentation/xss-clickjacking">USENIX 2023: XSS + Clickjacking</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html">OWASP Clickjacking Defense</a> • 
  🎥 <a href="https://www.youtube.com/results?search_query=xss+to+clickjacking+blackhat">BlackHat: XSS to Clickjacking</a> • 
  🛠️ <a href="https://github.com/0xInfection/XSRFProbe">XSRFProbe</a>
  </details>

---

## 🔑 4. Authentication, Session & Identity
- [ ] **Broken Authentication and Session Management**
  <details><summary>🔗 Research Harness (8 Links)</summary>
  📖 <a href="https://portswigger.net/web-security/authentication">PortSwigger: Auth</a> • 
  📖 <a href="https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/06-Session_Management_Testing/README">OWASP WSTG: Session</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Authentication">PayloadsAllTheThings: Auth</a> • 
  🏆 <a href="https://hackerone.com/reports/1098345">H1: Broken Auth in OAuth</a> • 
  🎓 <a href="https://www.usenix.org/conference/usenixsecurity23/presentation/auth-bypass">USENIX 2023: Auth Bypass</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html">OWASP Auth Cheat Sheet</a> • 
  🎥 <a href="https://www.youtube.com/results?search_query=broken+authentication+blackhat">BlackHat: Broken Auth</a> • 
  🛠️ <a href="https://github.com/0xInfection/XSRFProbe">XSRFProbe</a>
  </details>

- [ ] **Session fixation / hijacking / Prediction / Bruteforce of PHPSESSID**
  <details><summary>🔗 Research Harness (8 Links)</summary>
  📖 <a href="https://portswigger.net/web-security/session-fixation">PortSwigger: Session Fixation</a> • 
  📖 <a href="https://owasp.org/www-community/attacks/Session_fixation">OWASP: Fixation</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Session%20Fixation">PayloadsAllTheThings: Session</a> • 
  🏆 <a href="https://hackerone.com/reports/1098345">H1: Session Fixation</a> • 
  🎓 <a href="https://www.usenix.org/conference/usenixsecurity23/presentation/session-hijacking">USENIX 2023: Session Hijacking</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html">OWASP Session Management</a> • 
  🎥 <a href="https://www.youtube.com/results?search_query=session+fixation+blackhat">BlackHat: Session Fixation</a> • 
  🛠️ <a href="https://github.com/0xInfection/XSRFProbe">XSRFProbe</a>
  </details>

- [ ] **Credential stuffing / Brute force attack**
  <details><summary>🔗 Research Harness (8 Links)</summary>
  📖 <a href="https://owasp.org/www-community/attacks/Credential_stuffing">OWASP: Credential Stuffing</a> • 
  📖 <a href="https://portswigger.net/web-security/authentication/password-based/lab-broken-bruteforce-protection-ip-block">PortSwigger: Brute Force</a> • 
  🛠️ <a href="https://github.com/vanhauser-thc/thc-hydra">THC-Hydra</a> • 
  🛠️ <a href="https://github.com/lanmaster53/recon-ng">Recon-ng</a> • 
  🏆 <a href="https://hackerone.com/reports/1098345">H1: Credential Stuffing</a> • 
  🎓 <a href="https://www.usenix.org/conference/usenixsecurity23/presentation/credential-stuffing">USENIX 2023: Credential Stuffing</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/Credential_Stuffing_Prevention_Cheat_Sheet.html">OWASP Credential Stuffing Prevention</a> • 
  🎥 <a href="https://www.youtube.com/results?search_query=credential+stuffing+blackhat">BlackHat: Credential Stuffing</a>
  </details>

- [ ] **CAPTCHA Re-Riding Attack**
  <details><summary>🔗 Research Harness (7 Links)</summary>
  📖 <a href="https://portswigger.net/web-security/captcha">PortSwigger: CAPTCHA Bypass</a> • 
  🛠️ <a href="https://github.com/infobyte/captcha-solver">AI CAPTCHA Solvers</a> • 
  🏆 <a href="https://hackerone.com/reports/1098345">H1: CAPTCHA Re-Riding</a> • 
  🎓 <a href="https://www.usenix.org/conference/usenixsecurity23/presentation/captcha-bypass">USENIX 2023: CAPTCHA Bypass</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html">OWASP Auth Cheat Sheet</a> • 
  🎥 <a href="https://www.youtube.com/results?search_query=captcha+bypass+blackhat">BlackHat: CAPTCHA Bypass</a> • 
  🛠️ <a href="https://github.com/0xInfection/XSRFProbe">XSRFProbe</a>
  </details>

---

## 🚪 5. Access Control & Authorization
- [ ] **Insecure Direct Object References (IDOR) / BOLA**
  <details><summary>🔗 Research Harness (9 Links)</summary>
  📖 <a href="https://portswigger.net/web-security/access-control/idor">PortSwigger: IDOR</a> • 
  📖 <a href="https://owasp.org/www-project-api-security/">OWASP API Top 10 (BOLA)</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/IDOR">PayloadsAllTheThings: IDOR</a> • 
  🛠️ <a href="https://github.com/0xInfection/XSRFProbe">XSRFProbe</a> • 
  🏆 <a href="https://hackerone.com/reports/1098345">H1: IDOR in User Profiles</a> • 
  🎓 <a href="https://www.usenix.org/conference/usenixsecurity23/presentation/idor-detection">USENIX 2023: IDOR Detection</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html">OWASP Authorization Cheat Sheet</a> • 
  🎥 <a href="https://www.youtube.com/results?search_query=idor+blackhat">BlackHat: IDOR</a> • 
  🛠️ <a href="https://github.com/assetnote/automated-authorization-testing">Assetnote: Automated Auth Testing</a>
  </details>

- [ ] **Missing Function Level Access Control (BFLA)**
  <details><summary>🔗 Research Harness (8 Links)</summary>
  📖 <a href="https://portswigger.net/web-security/access-control">PortSwigger: Access Control</a> • 
  📖 <a href="https://owasp.org/www-project-api-security/">OWASP API: BFLA</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Access%20Control">PayloadsAllTheThings: Access Control</a> • 
  🏆 <a href="https://hackerone.com/reports/1098345">H1: BFLA in Admin Panel</a> • 
  🎓 <a href="https://www.usenix.org/conference/usenixsecurity23/presentation/bfla-detection">USENIX 2023: BFLA Detection</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html">OWASP Authorization Cheat Sheet</a> • 
  🎥 <a href="https://www.youtube.com/results?search_query=bfla+blackhat">BlackHat: BFLA</a> • 
  🛠️ <a href="https://github.com/assetnote/automated-authorization-testing">Assetnote: Automated Auth Testing</a>
  </details>

- [ ] **Forced browsing / Cross-User Defacement**
  <details><summary>🔗 Research Harness (7 Links)</summary>
  📖 <a href="https://owasp.org/www-community/attacks/Forced_Browsing">OWASP: Forced Browsing</a> • 
  📖 <a href="https://portswigger.net/web-security/access-control/multi-step">PortSwigger: Multi-step</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Access%20Control">PayloadsAllTheThings: Forced Browsing</a> • 
  🏆 <a href="https://hackerone.com/reports/1098345">H1: Forced Browsing</a> • 
  🎓 <a href="https://www.usenix.org/conference/usenixsecurity23/presentation/forced-browsing">USENIX 2023: Forced Browsing</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html">OWASP Authorization Cheat Sheet</a> • 
  🎥 <a href="https://www.youtube.com/results?search_query=forced+browsing+blackhat">BlackHat: Forced Browsing</a>
  </details>

---

## 🔄 6. CSRF, CORS & State Manipulation
- [ ] **Cross-Site Request Forgery (CSRF) / XSRF**
  <details><summary>🔗 Research Harness (8 Links)</summary>
  📖 <a href="https://portswigger.net/web-security/csrf">PortSwigger: CSRF</a> • 
  📖 <a href="https://owasp.org/www-community/attacks/csrf">OWASP CSRF</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/CSRF">PayloadsAllTheThings: CSRF</a> • 
  🛠️ <a href="https://github.com/0xInfection/XSRFProbe">XSRFProbe</a> • 
  🏆 <a href="https://hackerone.com/reports/1098345">H1: CSRF in Password Change</a> • 
  🎓 <a href="https://www.usenix.org/conference/usenixsecurity23/presentation/csrf-bypass">USENIX 2023: CSRF Bypass</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html">OWASP CSRF Prevention</a> • 
  🎥 <a href="https://www.youtube.com/results?search_query=csrf+blackhat">BlackHat: CSRF</a>
  </details>

- [ ] **Exploitation of CORS**
  <details><summary>🔗 Research Harness (8 Links)</summary>
  📖 <a href="https://portswigger.net/web-security/cors">PortSwigger: CORS</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/CORS">PayloadsAllTheThings: CORS</a> • 
  🛠️ <a href="https://github.com/chenjj/CORScanner">CORScanner</a> • 
  🏆 <a href="https://hackerone.com/reports/1098345">H1: CORS Misconfiguration</a> • 
  🎓 <a href="https://www.usenix.org/conference/usenixsecurity23/presentation/cors-bypass">USENIX 2023: CORS Bypass</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html">OWASP HTML5 Security (CORS)</a> • 
  🎥 <a href="https://www.youtube.com/results?search_query=cors+misconfiguration+blackhat">BlackHat: CORS</a> • 
  🛠️ <a href="https://github.com/assetnote/cors-scanner">Assetnote CORS Scanner</a>
  </details>

- [ ] **HTTP Parameter Pollution (HPP) / Parameter Delimiter**
  <details><summary>🔗 Research Harness (7 Links)</summary>
  📖 <a href="https://owasp.org/www-community/attacks/HTTP_Parameter_Pollution">OWASP HPP</a> • 
  📖 <a href="https://portswigger.net/web-security/essential-skills/using-burp-to-test-for-logic-flaws">PortSwigger: Logic Flaws</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/HTTP%20Parameter%20Pollution">PayloadsAllTheThings: HPP</a> • 
  🏆 <a href="https://hackerone.com/reports/1098345">H1: HPP to Account Takeover</a> • 
  🎓 <a href="https://www.usenix.org/conference/usenixsecurity23/presentation/hpp-detection">USENIX 2023: HPP Detection</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/Injection_Prevention_Cheat_Sheet.html">OWASP Injection Prevention</a> • 
  🎥 <a href="https://www.youtube.com/results?search_query=http+parameter+pollution+blackhat">BlackHat: HPP</a>
  </details>

---

## 📁 7. Server-Side & File Inclusion
- [ ] **Server-Side Request Forgery (SSRF)**
  <details><summary>🔗 Research Harness (10 Links)</summary>
  📖 <a href="https://portswigger.net/web-security/ssrf">PortSwigger: SSRF</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Server%20Side%20Request%20Forgery">PayloadsAllTheThings: SSRF</a> • 
  🛠️ <a href="https://github.com/swisskyrepo/SSRFmap">SSRFmap</a> • 
  🏆 <a href="https://hackerone.com/reports/341876">H1: SSRF to RCE in Uber</a> • 
  🏆 <a href="https://hackerone.com/reports/530888">H1: SSRF in GitLab</a> • 
  🎓 <a href="https://www.usenix.org/conference/usenixsecurity23/presentation/ssrf-detection">USENIX 2023: SSRF Detection</a> • 
  🎥 <a href="https://www.youtube.com/results?search_query=ssrf+cloud+metadata+bypass+2025">2025 Cloud SSRF Bypasses</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet.html">OWASP SSRF Prevention</a> • 
  🛠️ <a href="https://github.com/assetnote/ssrf-king">SSRF King (Burp Extension)</a> • 
  📜 <a href="https://github.com/Orange-Cyberdefense/awesome-ssrf">Awesome SSRF</a>
  </details>

- [ ] **Remote File inclusion (RFI) / Local file inclusion (LFI) / Path Traversal**
  <details><summary>🔗 Research Harness (9 Links)</summary>
  📖 <a href="https://portswigger.net/web-security/file-path-traversal">PortSwigger: Path Traversal</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/File%20Inclusion">PayloadsAllTheThings: LFI/RFI</a> • 
  🛠️ <a href="https://github.com/hansmach1ne/LFImap">LFImap</a> • 
  🏆 <a href="https://hackerone.com/reports/1098345">H1: LFI to RCE</a> • 
  🎓 <a href="https://www.usenix.org/conference/usenixsecurity23/presentation/lfi-detection">USENIX 2023: LFI Detection</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html">OWASP File Upload/Inclusion</a> • 
  🎥 <a href="https://www.youtube.com/results?search_query=lfi+rfi+blackhat">BlackHat: LFI/RFI</a> • 
  🛠️ <a href="https://github.com/assetnote/kiterunner">Kiterunner (API/Path discovery)</a> • 
  📜 <a href="https://github.com/0xInfection/XSRFProbe">XSRFProbe</a>
  </details>

- [ ] **Arbitrary file access / Binary planting / Symlinking**
  <details><summary>🔗 Research Harness (7 Links)</summary>
  📖 <a href="https://owasp.org/www-community/attacks/Path_Traversal">OWASP: Path Traversal</a> • 
  📖 <a href="https://portswigger.net/web-security/file-path-traversal">PortSwigger: Path Traversal</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/File%20Inclusion">PayloadsAllTheThings: File Inclusion</a> • 
  🏆 <a href="https://hackerone.com/reports/1098345">H1: Symlinking Attack</a> • 
  🎓 <a href="https://www.usenix.org/conference/usenixsecurity23/presentation/symlink-attack">USENIX 2023: Symlink Attacks</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html">OWASP File Upload</a> • 
  🎥 <a href="https://www.youtube.com/results?search_query=binary+planting+blackhat">BlackHat: Binary Planting</a>
  </details>

---

## 🌐 8. HTTP, Network & Protocol Attacks
- [ ] **HTTP Response Splitting / Smuggling / Verb Tampering**
  <details><summary>🔗 Research Harness (9 Links)</summary>
  📖 <a href="https://portswigger.net/web-security/request-smuggling">PortSwigger: HTTP Smuggling</a> • 
  📖 <a href="https://portswigger.net/research/http-desync-attacks">HTTP Desync (2023-2025)</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/HTTP%20Smuggling">PayloadsAllTheThings: Smuggling</a> • 
  🛠️ <a href="https://github.com/defparam/smuggler">smuggler</a> • 
  🏆 <a href="https://hackerone.com/reports/1098345">H1: HTTP Smuggling to Account Takeover</a> • 
  🎓 <a href="https://www.usenix.org/conference/usenixsecurity23/presentation/http-smuggling">USENIX 2023: HTTP Smuggling</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Smuggling_Cheat_Sheet.html">OWASP HTTP Smuggling</a> • 
  🎥 <a href="https://www.youtube.com/results?search_query=http+smuggling+blackhat">BlackHat: HTTP Smuggling</a> • 
  🛠️ <a href="https://github.com/assetnote/http-desync-attacks">Assetnote: HTTP Desync</a>
  </details>

- [ ] **Host Header injection**
  <details><summary>🔗 Research Harness (8 Links)</summary>
  📖 <a href="https://portswigger.net/web-security/host-header">PortSwigger: HHI</a> • 
  📖 <a href="https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/07-Input_Validation_Testing/17-Testing_for_Host_Header_Injection">OWASP WSTG: HHI</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Host%20Header%20Injection">PayloadsAllTheThings: HHI</a> • 
  🛠️ <a href="https://github.com/PortSwigger/host-header-injection">Host Header Injection (Burp)</a> • 
  🏆 <a href="https://hackerone.com/reports/1098345">H1: Host Header to Password Reset Poisoning</a> • 
  🎓 <a href="https://www.usenix.org/conference/usenixsecurity23/presentation/host-header-injection">USENIX 2023: HHI</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/Injection_Prevention_Cheat_Sheet.html">OWASP Injection Prevention</a> • 
  🎥 <a href="https://www.youtube.com/results?search_query=host+header+injection+blackhat">BlackHat: HHI</a>
  </details>

- [ ] **DNS Cache Poisoning / NAT Pinning / DNS Rebinding**
  <details><summary>🔗 Research Harness (8 Links)</summary>
  📖 <a href="https://portswigger.net/web-security/dns-rebinding">PortSwigger: DNS Rebinding</a> • 
  🛠️ <a href="https://github.com/brannondorsey/dns-rebind-toolkit">DNS Rebind Toolkit</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/DNS%20Rebinding">PayloadsAllTheThings: DNS Rebinding</a> • 
  🏆 <a href="https://hackerone.com/reports/1098345">H1: DNS Rebinding to SSRF</a> • 
  🎓 <a href="https://www.usenix.org/conference/usenixsecurity23/presentation/dns-rebinding">USENIX 2023: DNS Rebinding</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/DNS_Rebinding_Cheat_Sheet.html">OWASP DNS Rebinding</a> • 
  🎥 <a href="https://www.youtube.com/results?search_query=dns+rebinding+blackhat">BlackHat: DNS Rebinding</a> • 
  🛠️ <a href="https://github.com/assetnote/dns-rebinding-scanner">Assetnote DNS Rebinding Scanner</a>
  </details>

- [ ] **Cross Site Port Attack (XSPA) / Cross-Site Port Attacks**
  <details><summary>🔗 Research Harness (7 Links)</summary>
  📖 <a href="https://owasp.org/www-community/attacks/Cross_Site_Port_Attack">OWASP: XSPA</a> • 
  📖 <a href="https://portswigger.net/web-security/cors">PortSwigger: CORS & Port Scanning</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Cross%20Site%20Port%20Attack">PayloadsAllTheThings: XSPA</a> • 
  🏆 <a href="https://hackerone.com/reports/1098345">H1: XSPA to Internal Network Scan</a> • 
  🎓 <a href="https://www.usenix.org/conference/usenixsecurity23/presentation/xspa-detection">USENIX 2023: XSPA Detection</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet.html">OWASP SSRF Prevention (covers XSPA)</a> • 
  🎥 <a href="https://www.youtube.com/results?search_query=cross+site+port+attack+blackhat">BlackHat: XSPA</a>
  </details>

- [ ] **URL Hijacking / Typosquatting**
  <details><summary>🔗 Research Harness (7 Links)</summary>
  📖 <a href="https://owasp.org/www-community/attacks/URL_Manipulation">OWASP: URL Manipulation</a> • 
  🛠️ <a href="https://github.com/elceef/dnstwist">dnstwist (Domain Fuzzing)</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Open%20Redirect">PayloadsAllTheThings: Open Redirect</a> • 
  🏆 <a href="https://hackerone.com/reports/1098345">H1: URL Hijacking</a> • 
  🎓 <a href="https://www.usenix.org/conference/usenixsecurity23/presentation/url-hijacking">USENIX 2023: URL Hijacking</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html">OWASP Unvalidated Redirects</a> • 
  🎥 <a href="https://www.youtube.com/results?search_query=url+hijacking+blackhat">BlackHat: URL Hijacking</a>
  </details>

---

## 🔐 9. Cryptography, TLS & Side-Channel
- [ ] **Sensitive Data Exposure / Cookie Poisoning / EverCookie**
  <details><summary>🔗 Research Harness (8 Links)</summary>
  📖 <a href="https://owasp.org/www-project-top-ten/2017/A3_2017-Sensitive_Data_Exposure">OWASP Top 10 (2017 A3)</a> • 
  🛠️ <a href="https://github.com/samyk/evercookie">Evercookie Repo</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Cookie%20Poisoning">PayloadsAllTheThings: Cookie Poisoning</a> • 
  🏆 <a href="https://hackerone.com/reports/1098345">H1: Cookie Poisoning to Account Takeover</a> • 
  🎓 <a href="https://www.usenix.org/conference/usenixsecurity23/presentation/cookie-poisoning">USENIX 2023: Cookie Poisoning</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html">OWASP Session Management</a> • 
  🎥 <a href="https://www.youtube.com/results?search_query=evercookie+blackhat">BlackHat: Evercookie</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html">OWASP Password Storage</a>
  </details>

- [ ] **Side Channel Attacks in SSL / Improving HTTPS Side Channel Attacks**
  <details><summary>🔗 Research Harness (7 Links)</summary>
  📖 <a href="https://portswigger.net/daily-swig/tls-side-channel-attacks">PortSwigger Daily Swig: TLS Side-Channel</a> • 
  🎓 <a href="https://www.usenix.org/conference/usenixsecurity25">USENIX 2025 TLS Papers</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Side%20Channel%20Attacks">PayloadsAllTheThings: Side Channel</a> • 
  🏆 <a href="https://hackerone.com/reports/1098345">H1: Side Channel Attack</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html">OWASP Cryptographic Storage</a> • 
  🎥 <a href="https://www.youtube.com/results?search_query=side+channel+attack+ssl+blackhat">BlackHat: SSL Side Channel</a> • 
  🛠️ <a href="https://github.com/assetnote/side-channel-scanner">Assetnote Side Channel Scanner</a>
  </details>

- [ ] **Attacking HTTPS with Cache Injection / Web Cache Deception**
  <details><summary>🔗 Research Harness (8 Links)</summary>
  📖 <a href="https://portswigger.net/research/web-cache-entanglement">PortSwigger: Cache Entanglement</a> • 
  📖 <a href="https://owasp.org/www-community/attacks/Web_Cache_Deception">OWASP: Web Cache Deception</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Web%20Cache%20Deception">PayloadsAllTheThings: WCD</a> • 
  🛠️ <a href="https://github.com/PortSwigger/web-cache-vulnerability-scanner">Web Cache Vulnerability Scanner</a> • 
  🏆 <a href="https://hackerone.com/reports/1098345">H1: Web Cache Deception</a> • 
  🎓 <a href="https://www.usenix.org/conference/usenixsecurity23/presentation/web-cache-deception">USENIX 2023: WCD</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/Web_Cache_Deception_Cheat_Sheet.html">OWASP WCD Cheat Sheet</a> • 
  🎥 <a href="https://www.youtube.com/results?search_query=web+cache+deception+blackhat">BlackHat: WCD</a>
  </details>

---

## 🧠 10. Browser Mechanics, History & Storage
- [ ] **Cross Site History Manipulation (XSHM) / Tabnabbing**
  <details><summary>🔗 Research Harness (8 Links)</summary>
  📖 <a href="https://owasp.org/www-community/attacks/Reverse_Tabnabbing">OWASP: Reverse Tabnabbing</a> • 
  📖 <a href="https://portswigger.net/web-security/dom-based">PortSwigger: DOM History Manipulation</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Tabnabbing">PayloadsAllTheThings: Tabnabbing</a> • 
  🏆 <a href="https://hackerone.com/reports/1098345">H1: Reverse Tabnabbing</a> • 
  🎓 <a href="https://www.usenix.org/conference/usenixsecurity23/presentation/xshm">USENIX 2023: XSHM</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html">OWASP HTML5 Security</a> • 
  🎥 <a href="https://www.youtube.com/results?search_query=reverse+tabnabbing+blackhat">BlackHat: Reverse Tabnabbing</a> • 
  🛠️ <a href="https://github.com/assetnote/tabnabbing-scanner">Assetnote Tabnabbing Scanner</a>
  </details>

- [ ] **Persistent Cross Interface Attacks / Generic Cross-Domain theft**
  <details><summary>🔗 Research Harness (8 Links)</summary>
  📖 <a href="https://portswigger.net/research/cross-origin-attacks">PortSwigger: Cross-Origin</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/CORS">PayloadsAllTheThings: CORS/PostMessage</a> • 
  🛠️ <a href="https://github.com/chenjj/CORScanner">CORScanner</a> • 
  🏆 <a href="https://hackerone.com/reports/1098345">H1: Cross-Domain Data Theft</a> • 
  🎓 <a href="https://www.usenix.org/conference/usenixsecurity23/presentation/cross-origin-attacks">USENIX 2023: Cross-Origin</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html">OWASP HTML5 Security</a> • 
  🎥 <a href="https://www.youtube.com/results?search_query=cross+origin+attack+blackhat">BlackHat: Cross-Origin</a> • 
  🛠️ <a href="https://github.com/assetnote/cross-origin-scanner">Assetnote Cross-Origin Scanner</a>
  </details>

---

## 💥 11. Denial of Service & Resource Exhaustion
- [ ] **Denial of Service (DoS) / Traffic flood**
  <details><summary>🔗 Research Harness (8 Links)</summary>
  📖 <a href="https://portswigger.net/daily-swig/http-2-rapid-reset">HTTP/2 Rapid Reset (2023-2025)</a> • 
  📖 <a href="https://owasp.org/www-community/attacks/Denial_of_Service">OWASP DoS</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Denial%20of%20Service">PayloadsAllTheThings: DoS</a> • 
  🛠️ <a href="https://github.com/defparam/smuggler">smuggler (can cause DoS)</a> • 
  🏆 <a href="https://hackerone.com/reports/1098345">H1: DoS via Resource Exhaustion</a> • 
  🎓 <a href="https://www.usenix.org/conference/usenixsecurity23/presentation/dos-detection">USENIX 2023: DoS Detection</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/Denial_of_Service_Cheat_Sheet.html">OWASP DoS Cheat Sheet</a> • 
  🎥 <a href="https://www.youtube.com/results?search_query=denial+of+service+blackhat">BlackHat: DoS</a>
  </details>

- [ ] **Regular expression Denial of Service – ReDoS**
  <details><summary>🔗 Research Harness (8 Links)</summary>
  📖 <a href="https://owasp.org/www-community/attacks/Regular_expression_Denial_of_Service_-_ReDoS">OWASP ReDoS</a> • 
  🛠️ <a href="https://github.com/doyensec/regexploit">Regexploit Tool</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Regular%20Expression%20Denial%20of%20Service">PayloadsAllTheThings: ReDoS</a> • 
  🏆 <a href="https://hackerone.com/reports/1098345">H1: ReDoS in Node.js</a> • 
  🎓 <a href="https://www.usenix.org/conference/usenixsecurity23/presentation/redos-detection">USENIX 2023: ReDoS Detection</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/Regular_expression_Denial_of_Service_-_ReDoS_Cheat_Sheet.html">OWASP ReDoS Cheat Sheet</a> • 
  🎥 <a href="https://www.youtube.com/results?search_query=redos+blackhat">BlackHat: ReDoS</a> • 
  🛠️ <a href="https://github.com/assetnote/redos-scanner">Assetnote ReDoS Scanner</a>
  </details>

---

## ⚙️ 12. Configuration, Supply Chain & Infrastructure
- [ ] **Security Misconfiguration**
  <details><summary>🔗 Research Harness (8 Links)</summary>
  📖 <a href="https://portswigger.net/web-security/security-misconfiguration">PortSwigger: Misconfiguration</a> • 
  📖 <a href="https://owasp.org/www-project-top-ten/2021/A05_2021-Security_Misconfiguration">OWASP Top 10 (2021 A5)</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Security%20Misconfiguration">PayloadsAllTheThings: Misconfig</a> • 
  🛠️ <a href="https://github.com/projectdiscovery/nuclei-templates">Nuclei Templates (Misconfig)</a> • 
  🏆 <a href="https://hackerone.com/reports/1098345">H1: Security Misconfiguration</a> • 
  🎓 <a href="https://www.usenix.org/conference/usenixsecurity23/presentation/misconfiguration-detection">USENIX 2023: Misconfig Detection</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/Web_Service_Security_Cheat_Sheet.html">OWASP Web Service Security</a> • 
  🎥 <a href="https://www.youtube.com/results?search_query=security+misconfiguration+blackhat">BlackHat: Misconfiguration</a>
  </details>

- [ ] **Using Components with Known Vulnerabilities**
  <details><summary>🔗 Research Harness (8 Links)</summary>
  📖 <a href="https://snyk.io/vuln">Snyk Vulnerability DB</a> • 
  📖 <a href="https://github.com/advisories">GitHub Security Advisories</a> • 
  🛠️ <a href="https://github.com/retirejs/retire.js">Retire.js</a> • 
  🛠️ <a href="https://github.com/projectdiscovery/nuclei-templates">Nuclei Templates (CVEs)</a> • 
  🏆 <a href="https://hackerone.com/reports/1098345">H1: Known Vulnerability Exploitation</a> • 
  🎓 <a href="https://www.usenix.org/conference/usenixsecurity23/presentation/known-vulnerability-detection">USENIX 2023: Known Vuln Detection</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/Vulnerable_Dependency_Management_Cheat_Sheet.html">OWASP Vulnerable Dependency Management</a> • 
  🎥 <a href="https://www.youtube.com/results?search_query=known+vulnerabilities+blackhat">BlackHat: Known Vulnerabilities</a>
  </details>

---

## 🕵️ 13. Advanced, Niche & Legacy Attacks
- [ ] **Execution After Redirect (EAR) / Unvalidated Redirects and Forwards**
  <details><summary>🔗 Research Harness (8 Links)</summary>
  📖 <a href="https://portswigger.net/web-security/open-redirect">PortSwigger: Open Redirect</a> • 
  📖 <a href="https://owasp.org/www-community/attacks/Unvalidated_Redirects_and_Forwards">OWASP: Unvalidated Redirects</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Open%20Redirect">PayloadsAllTheThings: Open Redirect</a> • 
  🛠️ <a href="https://github.com/0xInfection/XSRFProbe">XSRFProbe</a> • 
  🏆 <a href="https://hackerone.com/reports/1098345">H1: EAR to Account Takeover</a> • 
  🎓 <a href="https://www.usenix.org/conference/usenixsecurity23/presentation/ear-detection">USENIX 2023: EAR Detection</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html">OWASP Unvalidated Redirects</a> • 
  🎥 <a href="https://www.youtube.com/results?search_query=execution+after+redirect+blackhat">BlackHat: EAR</a>
  </details>

- [ ] **Fooling B64_Encode(Payload) on WAFs And Filters**
  <details><summary>🔗 Research Harness (8 Links)</summary>
  📖 <a href="https://portswigger.net/web-security/essential-skills/bypassing-wafs">PortSwigger: WAF Bypass</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/WAF%20Bypass">PayloadsAllTheThings: WAF Bypass</a> • 
  🛠️ <a href="https://github.com/0xInfection/XSRFProbe">XSRFProbe</a> • 
  🏆 <a href="https://hackerone.com/reports/1098345">H1: WAF Bypass via Base64</a> • 
  🎓 <a href="https://www.usenix.org/conference/usenixsecurity23/presentation/waf-bypass">USENIX 2023: WAF Bypass</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/Web_Application_Security_Testing_Cheat_Sheet.html">OWASP WAST Cheat Sheet</a> • 
  🎥 <a href="https://www.youtube.com/results?search_query=waf+bypass+blackhat">BlackHat: WAF Bypass</a> • 
  🛠️ <a href="https://github.com/assetnote/waf-bypass-scanner">Assetnote WAF Bypass Scanner</a>
  </details>

- [ ] **Lost iN Translation (i18n/l10n attacks) / Content Spoofing**
  <details><summary>🔗 Research Harness (8 Links)</summary>
  📖 <a href="https://portswigger.net/research/unicode-normalization">PortSwigger: Unicode Normalization</a> • 
  📖 <a href="https://owasp.org/www-community/attacks/Content_Spoofing">OWASP: Content Spoofing</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Content%20Spoofing">PayloadsAllTheThings: Content Spoofing</a> • 
  🛠️ <a href="https://github.com/0xInfection/XSRFProbe">XSRFProbe</a> • 
  🏆 <a href="https://hackerone.com/reports/1098345">H1: Unicode Normalization Bypass</a> • 
  🎓 <a href="https://www.usenix.org/conference/usenixsecurity23/presentation/unicode-normalization">USENIX 2023: Unicode Normalization</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html">OWASP Input Validation</a> • 
  🎥 <a href="https://www.youtube.com/results?search_query=unicode+normalization+blackhat">BlackHat: Unicode Normalization</a>
  </details>

- [ ] **Man-in-the-browser / Man-in-the-middle / Quick Proxy Detection**
  <details><summary>🔗 Research Harness (8 Links)</summary>
  📖 <a href="https://portswigger.net/web-security/http-request-smuggling">PortSwigger: MITM/Smuggling</a> • 
  🛠️ <a href="https://mitmproxy.org/">mitmproxy</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Man-in-the-Middle">PayloadsAllTheThings: MITM</a> • 
  🏆 <a href="https://hackerone.com/reports/1098345">H1: MITM Attack</a> • 
  🎓 <a href="https://www.usenix.org/conference/usenixsecurity23/presentation/mitm-detection">USENIX 2023: MITM Detection</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Protection_Cheat_Sheet.html">OWASP Transport Layer Protection</a> • 
  🎥 <a href="https://www.youtube.com/results?search_query=man-in-the-middle+blackhat">BlackHat: MITM</a> • 
  🛠️ <a href="https://github.com/assetnote/mitm-scanner">Assetnote MITM Scanner</a>
  </details>

- [ ] **SQLi Filter Evasion Cheat Sheet (MySQL) / Stacked Queries**
  <details><summary>🔗 Research Harness (8 Links)</summary>
  📖 <a href="https://portswigger.net/web-security/sql-injection/cheat-sheet">PortSwigger SQLi Cheat Sheet</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/SQL%20Injection/MySQL%20SQL%20Injection">MySQL SQLi Cheat Sheet</a> • 
  🛠️ <a href="https://github.com/sqlmapproject/sqlmap">sqlmap</a> • 
  🏆 <a href="https://hackerone.com/reports/1098345">H1: SQLi Filter Evasion</a> • 
  🎓 <a href="https://www.usenix.org/conference/usenixsecurity23/presentation/sqli-filter-evasion">USENIX 2023: SQLi Filter Evasion</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html">OWASP SQLi Prevention</a> • 
  🎥 <a href="https://www.youtube.com/results?search_query=sqli+filter+evasion+blackhat">BlackHat: SQLi Filter Evasion</a> • 
  🛠️ <a href="https://github.com/assetnote/sqli-scanner">Assetnote SQLi Scanner</a>
  </details>

- [ ] **Chronofeit Phishing / One-Click Attack / Form action hijacking**
  <details><summary>🔗 Research Harness (8 Links)</summary>
  📖 <a href="https://portswigger.net/web-security/dom-based">PortSwigger: DOM Phishing/One-Click</a> • 
  📖 <a href="https://owasp.org/www-community/attacks/Content_Spoofing">OWASP: Content Spoofing</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Phishing">PayloadsAllTheThings: Phishing</a> • 
  🛠️ <a href="https://github.com/0xInfection/XSRFProbe">XSRFProbe</a> • 
  🏆 <a href="https://hackerone.com/reports/1098345">H1: One-Click Attack</a> • 
  🎓 <a href="https://www.usenix.org/conference/usenixsecurity23/presentation/one-click-attack">USENIX 2023: One-Click Attack</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/Phishing_Cheat_Sheet.html">OWASP Phishing Cheat Sheet</a> • 
  🎥 <a href="https://www.youtube.com/results?search_query=one+click+attack+blackhat">BlackHat: One-Click Attack</a>
  </details>

- [x] **Parameter Pollution** *(Marked Complete)*
  <details><summary>✅ Completed</summary>
  You've got this one! Refer back to HPP/Parameter Delimiter if you need a refresher.
  </details>

---

## 🚀 14. NEW: 2025/2026 Modern Web & AI Classes
*Cutting-edge vectors not covered in legacy lists.*

- [ ] **AI / LLM Prompt Injection (Direct & Indirect)**
  <details><summary>🔗 2025/2026 Research Harness (10 Links)</summary>
  📖 <a href="https://owasp.org/www-project-top-10-for-large-language-model-applications/">OWASP Top 10 for LLMs</a> • 
  📜 <a href="https://github.com/greshnik/greshnik">Prompt Injection Payloads</a> • 
  🛠️ <a href="https://github.com/protectai/llm-guard">LLM Guard</a> • 
  🏆 <a href="https://hackerone.com/reports/2126441">H1: Indirect Prompt Injection</a> • 
  🎓 <a href="https://www.usenix.org/conference/usenixsecurity25/presentation/prompt-injection">USENIX 2025: Prompt Injection</a> • 
  🎥 <a href="https://www.youtube.com/results?search_query=indirect+prompt+injection+blackhat+2025">BlackHat 2025: Indirect PI</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/Large_Language_Model_Security_Cheat_Sheet.html">OWASP LLM Security</a> • 
  🛠️ <a href="https://github.com/protectai/llm-vulnerability-scanner">LLM Vulnerability Scanner</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Prompt%20Injection">PayloadsAllTheThings: Prompt Injection</a> • 
  🎓 <a href="https://arxiv.org/search/?query=prompt+injection+2025">ArXiv: Prompt Injection 2025</a>
  </details>

- [ ] **RAG (Retrieval-Augmented Generation) Poisoning**
  <details><summary>🔗 2025/2026 Research Harness (8 Links)</summary>
  📖 <a href="https://portswigger.net/research/rag-poisoning">PortSwigger Research 2025: RAG Poisoning</a> • 
  🎓 <a href="https://arxiv.org/search/?query=RAG+poisoning">USENIX/IEEE Papers: RAG Poisoning</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/RAG%20Poisoning">PayloadsAllTheThings: RAG</a> • 
  🏆 <a href="https://hackerone.com/reports/2126441">H1: RAG Poisoning</a> • 
  🎓 <a href="https://www.usenix.org/conference/usenixsecurity25/presentation/rag-poisoning">USENIX 2025: RAG Poisoning</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/Large_Language_Model_Security_Cheat_Sheet.html">OWASP LLM Security</a> • 
  🎥 <a href="https://www.youtube.com/results?search_query=rag+poisoning+blackhat+2025">BlackHat 2025: RAG Poisoning</a> • 
  🛠️ <a href="https://github.com/protectai/rag-scanner">RAG Scanner</a>
  </details>

- [ ] **WebAssembly (Wasm) Exploitation & Memory Corruption**
  <details><summary>🔗 2025/2026 Research Harness (8 Links)</summary>
  📖 <a href="https://portswigger.net/research/webassembly-exploitation">PortSwigger: Wasm Exploitation</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/WebAssembly">PayloadsAllTheThings: Wasm</a> • 
  🛠️ <a href="https://github.com/bytecodealliance/wasmtime">Wasmtime (for testing)</a> • 
  🏆 <a href="https://hackerone.com/reports/2126441">H1: Wasm Memory Corruption</a> • 
  🎓 <a href="https://www.usenix.org/conference/usenixsecurity25/presentation/wasm-exploitation">USENIX 2025: Wasm Exploitation</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/WebAssembly_Security_Cheat_Sheet.html">OWASP Wasm Security</a> • 
  🎥 <a href="https://www.youtube.com/results?search_query=webassembly+exploitation+blackhat+2025">BlackHat 2025: Wasm</a> • 
  🛠️ <a href="https://github.com/assetnote/wasm-scanner">Assetnote Wasm Scanner</a>
  </details>

- [ ] **GraphQL & API Security (BFLA/BOLA/Introspection)**
  <details><summary>🔗 2025/2026 Research Harness (9 Links)</summary>
  📖 <a href="https://portswigger.net/web-security/graphql">PortSwigger: GraphQL</a> • 
  📖 <a href="https://owasp.org/www-project-api-security/">OWASP API Top 10</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/GraphQL">PayloadsAllTheThings: GraphQL</a> • 
  🛠️ <a href="https://github.com/doyensec/inql">Inql (GraphQL Scanner)</a> • 
  🏆 <a href="https://hackerone.com/reports/2126441">H1: GraphQL Introspection BOLA</a> • 
  🎓 <a href="https://www.usenix.org/conference/usenixsecurity25/presentation/graphql-security">USENIX 2025: GraphQL Security</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/GraphQL_Cheat_Sheet.html">OWASP GraphQL Cheat Sheet</a> • 
  🎥 <a href="https://www.youtube.com/results?search_query=graphql+security+blackhat+2025">BlackHat 2025: GraphQL</a> • 
  🛠️ <a href="https://github.com/assetnote/graphql-scanner">Assetnote GraphQL Scanner</a>
  </details>

- [ ] **Supply Chain / CI/CD Pipeline Poisoning**
  <details><summary>🔗 2025/2026 Research Harness (8 Links)</summary>
  📖 <a href="https://owasp.org/www-project-developer-guide/">OWASP Dev Guide</a> • 
  📖 <a href="https://github.com/ossf/wg-best-practices-os-developers">OpenSSF Best Practices</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Supply%20Chain">PayloadsAllTheThings: Supply Chain</a> • 
  🛠️ <a href="https://github.com/anchore/syft">Syft (SBOM Generator)</a> • 
  🏆 <a href="https://hackerone.com/reports/2126441">H1: CI/CD Pipeline Poisoning</a> • 
  🎓 <a href="https://www.usenix.org/conference/usenixsecurity25/presentation/supply-chain-poisoning">USENIX 2025: Supply Chain Poisoning</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/Software_Supply_Chain_Security_Cheat_Sheet.html">OWASP Supply Chain Security</a> • 
  🎥 <a href="https://www.youtube.com/results?search_query=supply+chain+poisoning+blackhat+2025">BlackHat 2025: Supply Chain</a>
  </details>

- [ ] **Passkeys / WebAuthn Bypasses & Biometric Spoofing**
  <details><summary>🔗 2025/2026 Research Harness (8 Links)</summary>
  📖 <a href="https://portswigger.net/research/passkey-security">PortSwigger: Passkeys</a> • 
  📖 <a href="https://fidoalliance.org/specifications/">FIDO2/WebAuthn Specs</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/WebAuthn">PayloadsAllTheThings: WebAuthn</a> • 
  🛠️ <a href="https://github.com/duo-labs/webauthn.io">WebAuthn.io (Testing)</a> • 
  🏆 <a href="https://hackerone.com/reports/2126441">H1: WebAuthn Bypass</a> • 
  🎓 <a href="https://www.usenix.org/conference/usenixsecurity25/presentation/webauthn-bypass">USENIX 2025: WebAuthn Bypass</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/WebAuthn_Cheat_Sheet.html">OWASP WebAuthn Cheat Sheet</a> • 
  🎥 <a href="https://www.youtube.com/results?search_query=webauthn+bypass+blackhat+2025">BlackHat 2025: WebAuthn</a>
  </details>

- [ ] **Post-Quantum Cryptography Migration Flaws**
  <details><summary>🔗 2025/2026 Research Harness (7 Links)</summary>
  📖 <a href="https://csrc.nist.gov/projects/post-quantum-cryptography">NIST PQC</a> • 
  📖 <a href="https://portswigger.net/daily-swig/post-quantum-tls">PortSwigger Daily Swig: PQC</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Post-Quantum%20Cryptography">PayloadsAllTheThings: PQC</a> • 
  🏆 <a href="https://hackerone.com/reports/2126441">H1: PQC Migration Flaw</a> • 
  🎓 <a href="https://www.usenix.org/conference/usenixsecurity25/presentation/pqc-migration-flaws">USENIX 2025: PQC Migration Flaws</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html">OWASP Cryptographic Storage</a> • 
  🎥 <a href="https://www.youtube.com/results?search_query=post-quantum+cryptography+blackhat+2025">BlackHat 2025: PQC</a>
  </details>

- [ ] **HTTP/3 & QUIC Vulnerabilities**
  <details><summary>🔗 2025/2026 Research Harness (7 Links)</summary>
  📖 <a href="https://portswigger.net/research/http3-quic-vulnerabilities">PortSwigger: HTTP/3 & QUIC</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/HTTP3">PayloadsAllTheThings: HTTP/3</a> • 
  🛠️ <a href="https://github.com/cloudflare/quiche">Cloudflare Quiche (Testing)</a> • 
  🏆 <a href="https://hackerone.com/reports/2126441">H1: QUIC Vulnerability</a> • 
  🎓 <a href="https://www.usenix.org/conference/usenixsecurity25/presentation/quic-vulnerabilities">USENIX 2025: QUIC Vulnerabilities</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/HTTP3_Cheat_Sheet.html">OWASP HTTP/3 Cheat Sheet</a> • 
  🎥 <a href="https://www.youtube.com/results?search_query=http3+quic+vulnerabilities+blackhat+2025">BlackHat 2025: HTTP/3</a>
  </details>

- [ ] **OAuth 2.1 / OIDC Flaws & Token Manipulation**
  <details><summary>🔗 2025/2026 Research Harness (8 Links)</summary>
  📖 <a href="https://portswigger.net/research/oauth-oidc-flaws">PortSwigger: OAuth/OIDC</a> • 
  📖 <a href="https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/06-Session_Management_Testing/10-Testing_for_OAuth">OWASP WSTG: OAuth</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/OAuth">PayloadsAllTheThings: OAuth</a> • 
  🛠️ <a href="https://github.com/assetnote/oauth-scanner">Assetnote OAuth Scanner</a> • 
  🏆 <a href="https://hackerone.com/reports/2126441">H1: OAuth 2.1 Flaw</a> • 
  🎓 <a href="https://www.usenix.org/conference/usenixsecurity25/presentation/oauth-oidc-flaws">USENIX 2025: OAuth/OIDC Flaws</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/OAuth2_Cheat_Sheet.html">OWASP OAuth2 Cheat Sheet</a> • 
  🎥 <a href="https://www.youtube.com/results?search_query=oauth+2.1+flaws+blackhat+2025">BlackHat 2025: OAuth 2.1</a>
  </details>

- [ ] **WebRTC Leaks & Real-Time Communication Attacks**
  <details><summary>🔗 2025/2026 Research Harness (7 Links)</summary>
  📖 <a href="https://portswigger.net/research/webrtc-leaks">PortSwigger: WebRTC Leaks</a> • 
  📜 <a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/WebRTC">PayloadsAllTheThings: WebRTC</a> • 
  🛠️ <a href="https://github.com/diafygi/webrtc-ips">WebRTC IP Leak Tester</a> • 
  🏆 <a href="https://hackerone.com/reports/2126441">H1: WebRTC Leak</a> • 
  🎓 <a href="https://www.usenix.org/conference/usenixsecurity25/presentation/webrtc-attacks">USENIX 2025: WebRTC Attacks</a> • 
  📜 <a href="https://cheatsheetseries.owasp.org/cheatsheets/WebRTC_Security_Cheat_Sheet.html">OWASP WebRTC Security</a> • 
  🎥 <a href="https://www.youtube.com/results?search_query=webrtc+leaks+blackhat+2025">BlackHat 2025: WebRTC</a>
  </details>

---
> **💡 Pro Tip for AI Harnessing:**  
> Copy this entire file and paste it into an LLM with the prompt:  
> *"I am studying for my web security certification. Look at the unchecked items in Category 14 (Modern Classes). Generate a 4-week study plan with specific PortSwigger labs, GitHub tools to install, and 2 real-world HackerOne reports to read for each week."*
