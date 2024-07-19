function toggleMenu(menuId) {
    var menuContent = document.getElementById(menuId);
    if (menuContent.classList.contains('show')) {
        menuContent.classList.remove('show');
    } else {
        menuContent.classList.add('show');
    }
}
