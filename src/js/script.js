

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

$(document).ready(function () {
 
  var show = true;
  var countbox = ".static_content";
  $(window).on("scroll load resize", function () {
      if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
      var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
      var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
      var w_height = $(window).height(); // Высота окна браузера
      var d_height = $(document).height(); // Высота всего документа
      var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
      if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
          $('.benefits__number').css('opacity', '1');
          $('.benefits__number').spincrement({
              thousandSeparator: "",
              duration: 3200
          });
           
          show = false;
      }
  });

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

