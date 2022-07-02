


const formBtnMobil = document.querySelector('.formBtnMobil')

formBtnMobil.addEventListener('click', (e)=> submit(e))

const inputName = document.querySelector('.inputName')
const inputPhone = document.querySelector('.inputPhone')
const inputTg = document.querySelector('.inputTg')
const inputMail = document.querySelector('.inputMail')


let nameField 
inputName.addEventListener('input', function(e){
    console.log("inputName", inputName);
    console.log(e.target.value);
     nameField = e.target.value
})


function submit(e) {
    e.preventDefault()
  }


var swiper1 = new Swiper('.sw1', {
    grabCursor: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
    activeIndex: 4,
    pagination: {
        el: '.swiper-pagination',

    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

