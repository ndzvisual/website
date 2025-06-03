export function initTypedText() {
    const typedTextElement = document.getElementById('typed-text');
    if (!typedTextElement || typeof Typed === 'undefined') return;

    new Typed('#typed-text', {
        strings: ['Resultados Increíbles.', 'Experiencia Única.', 'Profesionales Expertos.', 'Cuidado Personalizado.'],
        typeSpeed: 70,
        backSpeed: 100,
        loop: true,
        showCursor: true,
        cursorChar: '. . .',
    });
}
