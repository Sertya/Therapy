document.querySelector('.menu').addEventListener('click', changeClassName)


function changeClassName() {
    let menuHide = document.getElementById('navigation');
    menuHide.classList.toggle('responsive');
}
