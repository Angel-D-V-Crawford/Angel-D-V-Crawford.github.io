const navbar = document.querySelector('.navbar');
const toggle = document.querySelector('.toggle-button');
const menu = document.querySelector('.nav-menu');

const submit = document.getElementById('submit');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('active', window.scrollY > 150);
});

toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

submit.addEventListener('click', () => {

    let name = document.getElementById('name').value;
    let subject = document.getElementById('subject').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    let mailto = 'mailto:' + email + '?subject=' + subject + ' - ' + name + '&body=' + message;

    window.open(mailto, '_blank').focus();

});

function openImage(image) {
    window.open(image.src, '_blank').focus();
}