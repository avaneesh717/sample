document.addEventListener('DOMContentLoaded', () => {
    
    // --- Reveal on Scroll Animation ---
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
    // Trigger once on load
    revealOnScroll();


    // --- Page Button Selection Logic ---
    const pageBtns = document.querySelectorAll('.page-btn');
    
    pageBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove selected class from all
            pageBtns.forEach(b => b.classList.remove('selected'));
            // Add to clicked
            this.classList.add('selected');
        });
    });

    // --- Image Gallery Interaction (Click to Activate) ---
    const images = document.querySelectorAll('.img-box');
    
    images.forEach(img => {
        img.addEventListener('click', function() {
            // Remove active border from others
            images.forEach(i => i.classList.remove('active-img'));
            // Add blue border to clicked
            this.classList.add('active-img');
        });
    });
});