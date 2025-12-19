document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav');
  const navPill = document.getElementById('nav-pill'); // Select the new pill
  const mobileMenuBtn = document.querySelector('button[aria-label="Toggle menu"]');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIconLines = mobileMenuBtn.querySelectorAll('span');
  const mobileMenuLinks = mobileMenu.querySelectorAll('a');
  const mobileMenuSubscribeBtn = mobileMenu.querySelector('button');

  // Scroll effect
  const handleScroll = () => {
    if (window.scrollY > 20) {
      // nav.classList.remove('py-6');
      // nav.classList.add('py-4'); 
      // Optional: shrink vertical spacing slightly, but user wants just the pill change.
      
      if (navPill) {
        navPill.classList.remove('bg-white/20', 'border-white/20');
        navPill.classList.add('bg-white/80', 'border-white/40', 'shadow-md');
      }
    } else {
      // nav.classList.add('py-6');
      // nav.classList.remove('py-4');
      
      if (navPill) {
        navPill.classList.add('bg-white/20', 'border-white/20');
        navPill.classList.remove('bg-white/80', 'border-white/40', 'shadow-md');
      }
    }
  };

  window.addEventListener('scroll', handleScroll);
  // Initial check
  handleScroll();

  // Mobile menu toggle
  let isMenuOpen = false;
  
  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
    
    // Toggle menu visibility
    if (isMenuOpen) {
      mobileMenu.classList.remove('opacity-0', '-translate-y-full', 'pointer-events-none');
      mobileMenu.classList.add('opacity-100', 'translate-y-0');
    } else {
      mobileMenu.classList.add('opacity-0', '-translate-y-full', 'pointer-events-none');
      mobileMenu.classList.remove('opacity-100', 'translate-y-0');
    }

    // Animate hamburger icon
    if (isMenuOpen) {
      // Line 1
      menuIconLines[0].classList.remove('w-5');
      menuIconLines[0].classList.add('w-5', 'rotate-45', 'translate-y-2');
      // Line 2
      menuIconLines[1].classList.remove('w-3');
      menuIconLines[1].classList.add('opacity-0');
      // Line 3
      menuIconLines[2].classList.remove('w-4');
      menuIconLines[2].classList.add('w-5', '-rotate-45', '-translate-y-2.5');
    } else {
      // Line 1
      menuIconLines[0].classList.add('w-5');
      menuIconLines[0].classList.remove('rotate-45', 'translate-y-2');
      // Line 2
      menuIconLines[1].classList.add('w-3');
      menuIconLines[1].classList.remove('opacity-0');
      // Line 3
      menuIconLines[2].classList.add('w-4');
      menuIconLines[2].classList.remove('w-5', '-rotate-45', '-translate-y-2.5');
    }
  };

  mobileMenuBtn.addEventListener('click', toggleMenu);

  // Close mobile menu when clicking a link
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (isMenuOpen) toggleMenu();
    });
  });

  // Close mobile menu when clicking the subscribe button inside it
  if (mobileMenuSubscribeBtn) {
    mobileMenuSubscribeBtn.addEventListener('click', () => {
      if (isMenuOpen) toggleMenu();
    });
  }
});