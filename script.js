// Lightbox Functionality
function openLightbox(imageSrc, caption) {
  const modal = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  const captionEl = document.getElementById('lightbox-caption');

  img.src = imageSrc;
  captionEl.textContent = caption || '';
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox(event) {
  // If clicked on image itself, don't close, unless close button was clicked
  if (event && event.target.tagName === 'IMG') {
    return;
  }
  const modal = document.getElementById('lightbox');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeLightbox();
  }
});

// Smooth reveal animation on scroll
document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.activity-card, .pillar-card, .resource-card, .stat-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
  });
});
