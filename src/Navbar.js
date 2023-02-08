const hamburgerBtn = document.querySelector('#hamburger-btn');
const navLinks = document.querySelector('.nav-links');

console.log('Hello');

 hamburgerBtn.addEventListener('click',(e)=>
{
    navLinks.classList.toggle('active');
})