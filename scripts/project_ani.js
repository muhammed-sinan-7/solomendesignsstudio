
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        entry.target.classList.remove('hide');
      } else {
        entry.target.classList.remove('visible');
        entry.target.classList.add('hide');
      }
    });
  }, { threshold: 0.2 }); // trigger when 20% visible

  document.querySelectorAll('.work-item').forEach(item => observer.observe(item));
});

