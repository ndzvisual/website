export function initFadeIn () {
        const fadeInElements = document.querySelectorAll('.fade-in');
    
        const observerOptions = {
            root: null, // viewport
            rootMargin: '0px',
            threshold: 0.1 // 10% visible
        };
    
        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Para que la animación solo ocurra una vez
                }
            });
        };
    
        const intersectionObserver = new IntersectionObserver(observerCallback, observerOptions);
    
        fadeInElements.forEach(el => {
            intersectionObserver.observe(el);
        });
 }