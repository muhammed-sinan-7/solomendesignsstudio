// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

// Observe timeline items
document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
});

// Timeline dot pulse effect
const dots = document.querySelectorAll('.timeline-dot');
dots.forEach((dot, index) => {
    dot.addEventListener('mouseenter', function () {
        this.style.animation = 'pulse 0.6s ease-out';
    });

    dot.addEventListener('mouseleave', function () {
        this.style.animation = 'none';
    });
});

// Smooth scroll for learn more links
document.querySelectorAll('.learn-more').forEach(link => {
    link.addEventListener('click', function () {
        // Add your navigation logic here
        console.log('Learn more clicked');
    });
});

// Add pulse animation dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% {
            box-shadow: 0 0 0 0 rgba(167, 139, 250, 0.7);
        }
        50% {
            box-shadow: 0 0 0 15px rgba(167, 139, 250, 0);
        }
        100% {
            box-shadow: 0 0 0 0 rgba(167, 139, 250, 0);
        }
    }
`;
document.head.appendChild(style);

// Add hover effect to cards
document.querySelectorAll('.content-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transition = 'all 0.3s ease';
    });
});

// Track scroll position for visual feedback
window.addEventListener('scroll', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;

        if (isVisible) {
            item.style.opacity = '1';
        }
    });
});

// Initialize - add some initial styling
window.addEventListener('load', () => {
    console.log('Experience timeline loaded successfully');

    // Add data attributes for tracking
    document.querySelectorAll('.timeline-item').forEach((item, index) => {
        item.setAttribute('data-experience', index + 1);
    });
});