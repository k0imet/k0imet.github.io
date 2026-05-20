const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

let width, height, columns, drops;
const fontSize = 14;
// Mix of alphanumeric characters and symbols for the classic feel
const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+~`|}{[]:;?><,./-='.split('');

function init() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    columns = Math.floor(width / fontSize) + 1;
    drops = [];
    for (let x = 0; x < columns; x++) {
        drops[x] = Math.random() * height; // Start at random heights for an organic look
    }
}

function draw() {
    // Fill with a semi-transparent black to create the fading trail effect
    ctx.fillStyle = 'rgba(13, 17, 23, 0.08)'; 
    ctx.fillRect(0, 0, width, height);

    // Set text color to bright Matrix green
    ctx.fillStyle = '#00ff41'; 
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Randomly reset the drop to the top
        if (drops[i] * fontSize > height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

init();
setInterval(draw, 33); // Run at ~30 FPS

// Handle window resizing seamlessly
window.addEventListener('resize', init);