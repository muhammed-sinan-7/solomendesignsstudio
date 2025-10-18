/* --- JavaScript to Trigger Animation on Page Load --- */

document.addEventListener('DOMContentLoaded', () => {
    const postDiv = document.getElementById('postdiv');
    if (postDiv) {
        // Add the class immediately after content loads to start the animation
        postDiv.classList.add('animate-load');
    }
});