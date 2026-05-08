// Initialize Lucide Icons
if (window.lucide) {
  lucide.createIcons();
}

// Typing Effect
const words = ['Full Stack Developer', 'ML Enthusiast', 'Problem Solver'];
let i = 0;

function typeWriter() {
  const heading = document.getElementById("typing-text");
  if (!heading) return;

  const word = words[i];
  const currentText = heading.innerText;

  if (currentText.length < word.length) {
    heading.innerText = word.substring(0, currentText.length + 1);
    setTimeout(typeWriter, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  const heading = document.getElementById("typing-text");
  if (!heading) return;

  const currentText = heading.innerText;

  if (currentText.length > 0) {
    heading.innerText = currentText.substring(0, currentText.length - 1);
    setTimeout(erase, 50);
  } else {
    i = (i + 1) % words.length;
    setTimeout(typeWriter, 500);
  }
}

setTimeout(typeWriter, 1000);

// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  html.classList.add('dark');
} else {
  html.classList.remove('dark');
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    localStorage.theme = html.classList.contains('dark') ? 'dark' : 'light';
  });
}

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

// Navbar scroll effect
const navbar = document.getElementById('navbar');

if (navbar) {
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      navbar.classList.add('shadow-md');
    } else {
      navbar.classList.remove('shadow-md');
    }
  });
}

// Animate skill bars on scroll
const skillsSection = document.getElementById('skills');

if (skillsSection) {
  const observerOptions = {
    threshold: 0.5,
    rootMargin: "0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const skillBars = entry.target.querySelectorAll('.skill-bar');
        skillBars.forEach(bar => {
          bar.style.width = bar.getAttribute('data-width');
        });
      }
    });
  }, observerOptions);

  observer.observe(skillsSection);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');

    if (!href || href === '#') return;

    e.preventDefault();

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Form submission
const form = document.querySelector('form');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thanks for reaching out! This is a demo form - in a real implementation, this would send an email.');
  });
}
