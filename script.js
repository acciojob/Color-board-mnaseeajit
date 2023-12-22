//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container');

    // Generate 800 boxes dynamically
    for (let i = 0; i < 800; i++) {
        const box = document.createElement('div');
        box.className = 'square';
        container.appendChild(box);

        // Add event listener for hovering
        box.addEventListener('mouseover', function () {
            // Change background color on hover
            this.style.backgroundColor = '#e74c3c';
        });

        // Add event listener for mouseout (1-second delay)
        box.addEventListener('mouseout', function () {
            // Smoothly transition back to the default color
            setTimeout(() => {
                this.style.backgroundColor = '#1d1d1d';
            }, 1000);
        });
    }
});
