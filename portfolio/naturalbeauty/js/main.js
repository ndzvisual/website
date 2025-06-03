import { initMobileMenu } from './mobile-menu.js';
import { initTypedText } from './typed-text.js';
import { initFadeIn } from './fade-in.js';
import { initNavHighlight } from './active.js';
import { initContactForm } from './contact.js';

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initTypedText();
    initFadeIn();
    initNavHighlight();
    initContactForm();
});
