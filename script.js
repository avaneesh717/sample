document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Reveal on Scroll Animation ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        revealElements.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // --- 2. Typewriter Effect for the Quote ---
    const textElement = document.querySelector('.quote');
    const textContent = "“A Journey of Gratitude and Mindfulness”.";
    
    // Ensure element exists before running
    if(textElement) {
        textElement.textContent = ""; 
        let charIndex = 0;
        function typeWriter() {
            if (charIndex < textContent.length) {
                textElement.textContent += textContent.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, 50); // Speed of typing
            } else {
                textElement.style.borderRight = "none"; // Stop blinking cursor
            }
        }
        setTimeout(typeWriter, 1000); // Start after 1 second
    }

    // --- 3. Page Button Selection ---
    const pageBtns = document.querySelectorAll('.page-btn');
    pageBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            pageBtns.forEach(b => b.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    // --- 4. Image Gallery Interaction ---
    const images = document.querySelectorAll('.img-box');
    images.forEach(img => {
        img.addEventListener('click', function() {
            images.forEach(i => i.classList.remove('active-img'));
            this.classList.add('active-img');
        });
    });

    // --- 5. 3D Tilt Effect for Recommendation Cards ---
    const cards = document.querySelectorAll('.rec-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            // Rotate based on mouse position
            card.style.transform = `rotateY(${x / 10}deg) rotateX(${-y / 10}deg) scale(1.05)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`;
        });
    });

    // --- 6. Magnetic Buttons Effect ---
    const btns = document.querySelectorAll('.btn-primary, .btn-secondary');
    btns.forEach(btn => {
        btn.addEventListener('mousemove', function(e) {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            // Move button slightly
            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.5}px)`;
        });

        btn.addEventListener('mouseleave', function() {
            btn.style.transform = 'translate(0px, 0px)';
        });
    });
});
