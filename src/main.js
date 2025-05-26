const { invoke } = window.__TAURI__.core;
const buttonsOrOutfits =[
  'assets/dresses/christmas.png',
  'assets/dresses/purple.png',
  'assets/dresses/sprinkles.png',
  'assets/dresses/pink.png',
  'assets/dresses/yellow.png'
]


const dressedUP=[
  'assets/dressesWithModel/ChristmasModel.png',
  'assets/dressesWithModel/PinkModel.png',
  'assets/dressesWithModel/purpleModel.png',
  'assets/dressesWithModel/sprinklesModel.png',
  'assets/dressesWithModel/YellowModel.png'

]
function DressUp(index){
  document.getElementById('character').src = dressedUP[index];
}


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
    },
    observer: true,
    observeParents: true,
  });

  document.querySelector('.wardrobe-swiper').addEventListener('click', function(e) {
    const btn = e.target.closest('.dress-btn');
    if (btn) {
      const index = parseInt(btn.getAttribute('data-index'), 10);
      DressUp(index);
    }
  });


});


