document.addEventListener("DOMContentLoaded", () => {
    // Find all <pre> blocks on the page
    document.querySelectorAll('pre').forEach((block) => {
        // Create the wrapper
        const wrapper = document.createElement('div');
        wrapper.className = 'code-wrapper';
        
        // Insert wrapper before the pre block, then move the pre block inside it
        block.parentNode.insertBefore(wrapper, block);
        wrapper.appendChild(block);

        // Create the copy button
        const button = document.createElement('button');
        button.className = 'copy-button';
        button.innerText = '[ Copy ]';
        
        // Append button to wrapper
        wrapper.appendChild(button);

        // Handle the click event
        button.addEventListener('click', async () => {
            const code = block.querySelector('code');
            const text = code ? code.innerText : block.innerText;

            try {
                await navigator.clipboard.writeText(text);
                button.innerText = '[ Copied! ]';
                button.style.color = '#00ff41'; // Flash matrix green
                button.style.borderColor = '#00ff41';

                // Reset button after 2 seconds
                setTimeout(() => {
                    button.innerText = '[ Copy ]';
                    button.style.color = ''; 
                    button.style.borderColor = '';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy text: ', err);
                button.innerText = '[ Error ]';
            }
        });
    });
});