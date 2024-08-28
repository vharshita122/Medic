
document.getElementById('recommendation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted. Our team will get back to you soon.');
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent. We will get back to you shortly.');
});

document.getElementById('menu-icon').addEventListener('click', function() {
    var navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
});
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    menuIcon.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });
});
document.getElementById('menu-icon').addEventListener('click', function() {
    var navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
});
function openPage(pageName) {
    window.location.href = pageName;
}

