menu.onclick = function menuClassName() {
    let menuHide = document.getElementById('navigation');
    menuHide.className === 'topnav' ? menuHide.className = 'topnav responsive' : menuHide.className = 'topnav';
}
