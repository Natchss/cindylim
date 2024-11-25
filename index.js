window.addEventListener('scroll', () => {
    let navbar = document.querySelector('.navbar');
    navbar.classList.toggle('sticky', window.scrollY > 80)
})


console.log("hi")

