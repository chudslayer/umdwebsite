// script.js
// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {
console.log('Page loaded!');
// Initialize functions
initSmoothScroll();
initMobileMenu();
});
// Smooth scrolling for anchor links
function initSmoothScroll() {
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
e.preventDefault();
const target = document.querySelector(this.getAttribute('href'));
if (target) {
target.scrollIntoView({
behavior: 'smooth'
});
}
});
});
}
// Mobile menu toggle
function initMobileMenu() {
const menuBtn = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');
if (menuBtn) {
menuBtn.addEventListener('click', function() {
nav.classList.toggle('show');
});
}
}