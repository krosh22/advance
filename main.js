const sectionBtn = document.getElementById('section-btn');
const menu_2 = document.getElementById("menu_2")

sectionBtn.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('click',menu_2)
    menu_2.classList.remove('menu_2')
});

const closed = document.getElementById("closed")
closed.addEventListener("click", function (e) {
    e.preventDefault();
    menu_2.classList.add('menu_2')
});

