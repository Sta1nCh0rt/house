document.getElementById('f').onclick = function () {
    document.getElementById('f').classList.add('change_color');
    document.getElementById('g').classList.remove('change_color');
    document.getElementById('e').classList.remove('change_color');
    
    document.getElementById('france').classList.add('show');
    document.getElementById('germany').classList.remove('show');
    document.getElementById('england').classList.remove('show');
}
document.getElementById('g').onclick = function () {
    document.getElementById('g').classList.add('change_color');
    document.getElementById('f').classList.remove('change_color');
    document.getElementById('e').classList.remove('change_color');
    
    document.getElementById('germany').classList.add('show');
    document.getElementById('france').classList.remove('show');
    document.getElementById('england').classList.remove('show');

}
document.getElementById('e').onclick = function () {
    document.getElementById('e').classList.add('change_color');
    document.getElementById('g').classList.remove('change_color');
    document.getElementById('f').classList.remove('change_color');

    document.getElementById('england').classList.add('show');
    document.getElementById('germany').classList.remove('show');
    document.getElementById('france').classList.remove('show');
}
document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger_menu');
    const navText = document.querySelector('.nav_text');

    burgerMenu.addEventListener('click', function () {
        navText.classList.toggle('show');
    });
});

