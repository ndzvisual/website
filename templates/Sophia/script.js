document.addEventListener('DOMContentLoaded', function() {

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            // Optional: Change hamburger to X icon
            const icon = menuToggle.querySelector('i');
            if (mainNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Smooth scroll for nav links
    document.querySelectorAll('header a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open after click
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    menuToggle.querySelector('i').classList.remove('fa-times');
                    menuToggle.querySelector('i').classList.add('fa-bars');
                }
            }
        });
    });


    // Product Slider
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.slider-nav.prev');
    const nextButton = document.querySelector('.slider-nav.next');

    if (sliderWrapper && slides.length > 0 && prevButton && nextButton) {
        let currentIndex = 0;
        const slideWidth = slides[0].offsetWidth + parseInt(getComputedStyle(slides[0]).marginRight); // Slide width + margin

        function updateSliderPosition() {
            sliderWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        }

        function showNextSlide() {
            // Calculate how many slides are visible
            const visibleSlides = Math.floor(sliderWrapper.parentElement.offsetWidth / slideWidth);
            if (currentIndex < slides.length - visibleSlides) {
                currentIndex++;
            } else {
                currentIndex = 0; // Loop back to start
            }
            updateSliderPosition();
        }

        function showPrevSlide() {
            const visibleSlides = Math.floor(sliderWrapper.parentElement.offsetWidth / slideWidth);
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = slides.length - visibleSlides; // Loop to end
                 if (currentIndex < 0) currentIndex = 0; // handle case where total slides < visible slides
            }
            updateSliderPosition();
        }

        nextButton.addEventListener('click', showNextSlide);
        prevButton.addEventListener('click', showPrevSlide);

        // Optional: Auto-slide
        // setInterval(showNextSlide, 5000);

        // Recalculate on resize (important for responsiveness)
        window.addEventListener('resize', () => {
            // Re-calculate slideWidth if it changes due to responsiveness
            // This simple slider might need a more robust width calculation
            // or reset currentIndex if a full recalculation is needed.
            // For now, let's just ensure it doesn't break badly.
            const newSlideWidth = slides[0].offsetWidth + parseInt(getComputedStyle(slides[0]).marginRight);
            if (newSlideWidth !== slideWidth) {
                // Basic reset if width changes, could be improved
                currentIndex = 0;
                updateSliderPosition();
            }
        });
    }


    // Contact Form (Basic Frontend Handling)
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent actual submission

            // Basic validation (can be more robust)
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !message) {
                formStatus.textContent = 'Please fill in all fields.';
                formStatus.className = 'form-status error';
                return;
            }
            if (!validateEmail(email)) {
                formStatus.textContent = 'Please enter a valid email address.';
                formStatus.className = 'form-status error';
                return;
            }

            // Simulate submission
            formStatus.textContent = 'Sending your message...';
            formStatus.className = 'form-status'; // Neutral style

            setTimeout(() => {
                // This is where you'd integrate with a backend or email service
                console.log('Form submitted (simulated):', { name, email, message });
                formStatus.textContent = 'Thank you! Your message has been sent.';
                formStatus.className = 'form-status success';
                contactForm.reset(); // Clear the form
            }, 1500);
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

});