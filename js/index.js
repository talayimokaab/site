
let listPic = document.querySelector(".baner__slider-items-thumbnail");
let sliderItems = document.querySelector(".baner__slider-items");
let btnNext = document.getElementById("baner__btnNext");
let btnPrev = document.getElementById("baner__btnPrev");
let all = Array.from(document.querySelectorAll(".baner__slider-item"));
let items = Array.from(document.querySelectorAll(".baner__slider-item-thumbnail"));
let n = all.length;

let h = [0, 1, 2, 3, 4];

btnNext.addEventListener("click", () => {

all.forEach((item , index) => {
  item.classList.remove("activNext", "activPrev");
  item.style.zIndex = 0;
});

  sliderItems.children[0].classList.add("activNext");
  sliderItems.appendChild(sliderItems.firstElementChild);



  items.forEach((item, index) => {
    item.classList.remove("moveLeft", "moveRight");
});



  listPic.children[0].classList.add("moveRight");
  listPic.classList.add("moveWidth");

  listPic.appendChild(listPic.firstElementChild);
  btnNext.disabled = true;
  setTimeout(() => {
    listPic.classList.remove("moveWidth" , "moveWidthBack");
    btnNext.disabled = false;
  }, 1000)

});

// /////////////////////prev

btnPrev.addEventListener("click", () => {

  all.forEach((item , index) => {
    item.classList.remove("activNext", "activPrev");
    item.style.zIndex = 0;
  });

    sliderItems.insertBefore(sliderItems.lastElementChild, sliderItems.firstElementChild);
    sliderItems.children[0].classList.add("activPrev");
    sliderItems.children[0].style.zIndex = 5;

  items.forEach((item , index) => {
    item.classList.remove("moveLeft" , "moveRight");
  });

  
  listPic.classList.add("moveWidthBack");

  listPic.insertBefore(listPic.lastElementChild, listPic.firstElementChild);
  listPic.children[0].classList.add("moveLeft");

  btnPrev.disabled = true;
  setTimeout(() => {
    listPic.classList.remove("moveWidth" , "moveWidthBack");
    btnPrev.disabled = false;
    list.children[0].style.zIndex = -1;
  }, 1000)
  setTimeout(() => {
    list.children[0].style.zIndex = -1;
  }, 500)

});


///cube

const productsBoxBody = document.querySelectorAll('.products__box-body');


productsBoxBody.forEach((productsBoxBody) => {
  const cube = productsBoxBody.querySelector('.cube');
  const shadow = productsBoxBody.querySelector('.shadowCube');
  let isDragging = false;
  let startX, startY;
  let rotationX = 0, rotationY = 0;

  cube.classList.add('add-rotateY')
  productsBoxBody.addEventListener('mousedown', (e) => {

    isDragging = !isDragging;

    if (isDragging) {
      startX = e.clientX;
      startY = e.clientY;
    }


    if (isDragging) {
      cube.classList.remove('add-rotateY')

    } else {
      cube.classList.add('add-rotateY')

    }

  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    let deltaX = e.clientX - startX;
    let deltaY = e.clientY - startY;

    rotationY += deltaX * 0.5;
    rotationX -= deltaY * 0.5;

    cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;

    let shadowOffsetX = rotationY * 0.1;
    let shadowOffsetY = rotationX * 0.1;

    const shadowX = Math.max(Math.min(shadowOffsetX, 10), -10);
    const shadowY = Math.max(Math.min(shadowOffsetY, 10), -10);

    shadow.style.transform = `translate(${shadowX}px, ${Math.abs(shadowY)}px)`;


    startX = e.clientX;
    startY = e.clientY;
  });
  document.addEventListener('mouseup', (e) => {
    isDragging = false;
    cube.classList.add('add-rotateY')

  });

});

//////////////////////scrol
///////////
function revealOnScroll() {
  const box = document.querySelector('.samples_boxs');
  const boxBodies = document.querySelectorAll('.samples_box-body');
  const windowHeight = window.innerHeight;
  const boxTop = box.getBoundingClientRect().top;
  const revealPoint = 300;

  if (boxTop < windowHeight - revealPoint) {
    boxBodies.forEach((body, index) => {
      setTimeout(() => {
        body.classList.add('scrollActive');
      }, index * 100);
    });
  }
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);



////////////////////////
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