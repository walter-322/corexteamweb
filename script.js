// ===== mobile device=====
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 102, 204, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 102, 204, 0.1)';
    }
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.about-card, .feature-item, .community-item, .tool-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.style.color = 'var(--primary-blue)';
            } else {
                navLink.style.color = 'var(--text-dark)';
            }
        }
    });
});

const rocket = document.querySelector('.rocket-animation');

if (rocket) {
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const heroSection = document.querySelector('.hero');
        
        if (heroSection && scrollY < heroSection.offsetHeight) {
            const rotation = scrollY * 0.05;
            rocket.style.transform = `rotate(${rotation}deg)`;
        }
    });
}

console.log('%c🚀 Welcome to Corex Corp!', 'color: #0066cc; font-size: 20px; font-weight: bold;');
console.log('%cInnovate. Build. Shape the Future.', 'color: #4a5568; font-size: 14px;');
console.log('%cJoin us: https://github.com/The-Corex-Project/Corex-Linux/', 'color: #4a5568; font-size: 12px;');
