const sectionBtn = document.getElementById('section-btn');

sectionBtn.addEventListener('click', function (e) {
    e.preventDefault();
    this.classList.toggle('menu-btn')
});
