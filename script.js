// ===== MOBILE NAVIGATION =====
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Close nav on link click (mobile)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // ===== COUNTER ANIMATION =====
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;

    const animateCounters = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                const increment = Math.ceil(target / speed);
                let current = 0;

                const updateCounter = () => {
                    current += increment;
                    if (current >= target) {
                        entry.target.textContent = target + '+';
                        return;
                    }
                    entry.target.textContent = current;
                    requestAnimationFrame(updateCounter);
                };

                updateCounter();
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(animateCounters, {
        threshold: 0.5
    });

    counters.forEach(counter => {
        observer.observe(counter);
    });

    // ===== CONTACT FORM =====
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simple validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }

            if (!email.includes('@') || !email.includes('.')) {
                alert('Please enter a valid email address.');
                return;
            }

            alert('Thank you for your message! Our team will get back to you soon.');
            contactForm.reset();
        });
    }

    // ===== SMOOTH SCROLL =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});