// ===== Welcome Message =====
console.log('⚙️ Welcome to Wisdom\'s Mechatronics Journey!');

// ===== Toggle for project details =====
document.addEventListener('DOMContentLoaded', function() {
    // Add any interactive features here
    // Example: Toggle visibility of extra lab details
    const detailButtons = document.querySelectorAll('.toggle-details');
    detailButtons.forEach(button => {
        button.addEventListener('click', function() {
            const target = document.querySelector(this.dataset.target);
            if (target) {
                target.style.display = target.style.display === 'none' ? 'block' : 'none';
            }
        });
    });
});

// ===== Example: Show current date =====
function showCurrentDate() {
    const now = new Date();
    return now.toLocaleDateString('en-NG', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}