

const priceResult = document.querySelector('.price-result');
const priceForm = document.querySelector('.price_content');

priceForm.addEventListener('change', function() {
    let sitePrice = +priceForm.elements.list1.value;
    let designPrice = +priceForm.elements.list2.value;
    let adaptivePrice = +priceForm.elements.list3.value;
    priceResult.innerHTML = sitePrice + designPrice + adaptivePrice;
})

// Удалить CSS-класс square-transition
const square = document.querySelector('.square');
square.classList.remove('square-transition');

// Добавить наблюдение за появлением элемента
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      square.classList.add('square-transition');
      return;
      
    }
    square.classList.remove('square-transition');
  });
});
observer.observe(document.querySelector('.square-wrapper'));

$('.rev_slider').slick({
  dots: true,
  infinite: false,
  speed: 700,
  slidesToShow: 1,
  adaptiveHeight: true,
  arrows: false
});

// var modal = document.getElementById('myModal');
// var img = document.getElementById('myImg')
// var modalImg = document.getElementById('img01')
// var captionText = document.getElementById('caption')

// img.onclick = function() {
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }

// var span = document.getElementsByClassName("close")[0];
// span.onclick = function () {
//   modal.style.display = "none";
// }

