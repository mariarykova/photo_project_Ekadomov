// Script для переклбчения изображений при клике на стрелочки вправо/влево

let count = document.getElementById("buttonCountNumber");
const buttonPlus = document.getElementById('buttonCountPlus');
const buttonMinus = document.getElementById('buttonCountMinus');


buttonPlus.addEventListener('click', showNextPic);
buttonMinus.addEventListener('click', showPrevPic)

function showNextPic() {
  let countPlus = count.innerHTML;
  let id = document.querySelector(`.photo__wrap[data-id='${countPlus}']`)
  console.log(id);
  if(+countPlus <= 14){
    id.style.display = 'none';
    count.innerHTML++;
    id.nextElementSibling.style.display = "block";
  } else {
    id.style.display = 'none';
    const firstSlide = menuGallery.firstElementChild;
    firstSlide.style.display = 'block';
    count.innerHTML = 1;
  }
}

function showPrevPic() {
  let countMinus = count.innerHTML;
  let id = document.querySelector(`.photo__wrap[data-id='${countMinus}']`)
  if(+countMinus >= 2){
    id.style.display = 'none';
    count.innerHTML--;
    id.previousElementSibling.style.display = "block";
  } else {
    id.style.display = 'none';
    const lastSlide = menuGallery.lastElementChild;
    lastSlide.style.display = 'block';
    count.innerHTML = 15;
  }
}


// Script при клике на превью изображения попадаем на её большое изображение в галерее

const menuUnsortedElement = document.querySelector(`.menu-unsorted`);

const onThumbClick = (evt) => {
  evt.preventDefault();

  const target = evt.target;
  if (target.classList.contains(`preview`)){
    const {id} = target.dataset;
    document.querySelectorAll(`.photo__wrap`).forEach( callbackfn = (photo) => photo.style.display = 'none');
    document.querySelector(`.photo__wrap[data-id='${id}']`).style.display = 'block';
    document.getElementById('unsorted').style.display = 'none';
    document.getElementById('gallery').style.display = 'block';
    let number = id;
    document.getElementById('buttonCountNumber').innerHTML = number;
  }
};

menuUnsortedElement.addEventListener(`click`, onThumbClick);

// Script при клике на большое изображение оно меняется на следующее в галерее

let menuGallery = document.querySelector(`.photo`);

const onPictureClick = (evt) => {
  const target = evt.target;
  const currentSlide = target.parentElement;
  const nextSlide = currentSlide.nextElementSibling;
  let count = document.getElementById('buttonCountNumber').innerHTML;
  if (currentSlide != menuGallery.lastElementChild){
    nextSlide.style.display = 'block';
    currentSlide.style.display = 'none';
    count++;
    document.getElementById('buttonCountNumber').innerHTML = count;
  } else {
    currentSlide.style.display = 'none';
    const firstSlide = menuGallery.firstElementChild;
    firstSlide.style.display = 'block';
    document.getElementById('buttonCountNumber').innerHTML = 1;
  }
}

menuGallery.addEventListener('click', onPictureClick);


// Script для верхнего меню в мобильной версии

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.nav-btn')) {

    let dropdowns = document.getElementsByClassName("nav-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
    let openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
    openDropdown.classList.remove('show');
    }
   }
  }
 }
