// Mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navMobile = document.querySelector(".nav-mobile");
  if (mobileMenuBtn && navMobile) {
    mobileMenuBtn.addEventListener("click", () => {
      navMobile.classList.toggle("active");
      // Animate hamburger icon
      const spans = mobileMenuBtn.querySelectorAll("span");
      if (navMobile.classList.contains("active")) {
        spans[0].style.transform = "rotate(45deg) translateY(7px)";
        spans[1].style.opacity = "0";
        spans[2].style.transform = "rotate(-45deg) translateY(-7px)";
      } else {
        spans[0].style.transform = "none";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "none";
      }
    });
  }

  // Scroll Reveal Animation for luxury feel
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  // Targets: product cards, collection cards, maker profiles
  const animatedElements = document.querySelectorAll(
    '.product-card, .collection-card, .maker-profile'
  );

  animatedElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
});