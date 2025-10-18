/* --- JavaScript for Continuous Scroll Animation --- */

document.addEventListener('DOMContentLoaded', () => {

    const introSection = document.getElementById('intro');

    if (!introSection) return; 

    // Function to handle the Intersection Observer
    const handleIntersection = (entries) => {
        entries.forEach(entry => {
            const target = entry.target;

            if (entry.isIntersecting) {
                // When section COMES INTO VIEW: Add class to run animation
                target.classList.add('animate-in');
            } else {
                // When section SCROLLS OUT OF VIEW: Remove class to reset for next time
                target.classList.remove('animate-in');
            }
            // IMPORTANT: We do NOT stop observing, so it runs repeatedly.
        });
    };

    // Create the Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, {
        root: null, // Use the viewport
        rootMargin: '0px',
        // Threshold: 0.1 means trigger when 10% of the section is visible/invisible
        threshold: 0.1 
    });

    // Start monitoring the #intro section
    observer.observe(introSection);
});