// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    themeToggle.textContent = body.classList.contains('light-mode') ? '🌙' : '☀';
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Chat Bubble
const chatBubble = document.getElementById('chatBubble');
chatBubble.addEventListener('click', () => {
    alert('Chat feature coming soon!');
});
