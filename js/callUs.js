const widthDisplay = document.getElementById('widthDisplay');

function updateWidth() {
  widthDisplay.textContent = `عرض صفحه: ${window.innerWidth}px`;
}

window.addEventListener('resize', updateWidth);
updateWidth();




const list = document.querySelector(".baner__slider-items");
const btnNext = document.getElementById("baner__btnNext");
const btnPrev = document.getElementById("baner__btnPrev");
const items = Array.from(document.querySelectorAll(".baner__slider-item"));

let positions = [0, 1, 2, 3, 4];

updateClasses();

function updateClasses() {
  items.forEach((item, index) => {

    item.className = "baner__slider-item";
    item.classList.add(`position-${positions[index]}`);

  });
}

btnNext.addEventListener("click", () => {
  positions.unshift(positions.pop());
  updateClasses();

});

btnPrev.addEventListener("click", () => {
  positions.push(positions.shift());
  updateClasses();
});

///////////////////////////
let headerIcon = document.querySelector('.header__menu-icon-toggle');
let headernav1 = document.querySelector('.header__nav--mobile');

headerIcon.addEventListener("click", () => {
  headernav1.classList.toggle('active');
});


let activeSubmenu = document.querySelector('.active-submenu');
let headermenuslide1 = document.querySelector('.header__menu-submenu--mobile');


activeSubmenu.addEventListener("click", () => {
  headermenuslide1.classList.toggle('active');
});