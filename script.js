// script.js

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Set current date dynamically (optional, you can hardcode the actual date in HTML)
    const dateElement = document.getElementById('current-date');
    if(dateElement) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        // dateElement.textContent = new Date().toLocaleDateString('en-US', options);
        // Leaving it as a static string in HTML is usually better for a "journal" feel, 
        // but this is here if you want it to be today's date always.
    }

    // 2. Intersection Observer for fade-in animations on scroll
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.15, // trigger when 15% of the element is visible
        rootMargin: "0px 0px -50px 0px" 
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // 3. Optional: Randomize tape rotations slightly for organic feel
    const tapes = document.querySelectorAll('.tape');
    tapes.forEach(tape => {
        // Only randomize the ones that are top-center to keep corners looking okay
        if(tape.classList.contains('tape-top-center')) {
            const randomRotation = (Math.random() * 6) - 3; // -3deg to +3deg
            tape.style.transform = `translateX(-50%) rotate(${randomRotation}deg)`;
        }
    });

});

