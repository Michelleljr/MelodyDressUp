const { invoke } = window.__TAURI__.core;
const buttonsOrOutfits =[
  'assets/dresses/christmas.png',
  'assets/dresses/purple.png',
  'assets/dresses/sprinkles.png',
  'assets/dresses/pink.png',
  'assets/dresses/yellow.png'
]


const dressedUP=[
  'assets/dressesWithmodel/ChristmasModel.png',
  'assets/dressesWithmodel/purpleModel.png',
  'assets/dressesWithmodel/sprinklesModel.png',
  'assets/dressesWithmodel/Pink model.png',
  'assets/dressesWithmodel/Yellow model.png'

]
function DressUp(index){
  document.getElementById('character').src = dressedUP[index];
}
window.DressUp = DressUp;

window.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.wardrobe-swiper', {
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });


});


