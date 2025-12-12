/* --- Artwork toggle JS (unchanged) --- */
const artworks = Array.from(document.getElementsByClassName('artwork'))

artworks.map((artwork, index) => {
  const artworkTitle = artwork.getElementsByClassName('title')[0]
  const artworkBodyContainer = artwork.getElementsByClassName('body-container')[0]
  
  return artworkTitle.addEventListener('click', () => {
    artworkBodyContainer.classList.toggle('visible')
  })
})

const imageGalleries = Array.from(document.getElementsByClassName('image-gallery'))

imageGalleries.map((gallery) => {
  const items = gallery.getElementsByTagName('li')
  const nextButton = gallery.getElementsByClassName('next-button')[0]
  const prevButton = gallery.getElementsByClassName('prev-button')[0]
  let currentIndex = 0

  items[currentIndex].classList.add('active')

  nextButton.addEventListener('click', () => {
    items[currentIndex].classList.remove('active')

    if (currentIndex === items.length - 1) {
      currentIndex = -1
    }
    
    currentIndex++
    items[currentIndex].classList.add('active')
  })

  prevButton.addEventListener('click', () => {
    items[currentIndex].classList.remove('active')

    if (currentIndex === 0) {
      currentIndex = items.length
    }
    
    currentIndex--
    items[currentIndex].classList.add('active')
  })
})

/* --- Rain effect JS --- */
var makeItRain = function() {
  $('.rain').empty();
function spawnRain() {
  const rainContainer = document.querySelector('.rain');
  rainContainer.innerHTML = '';

  const numDrops = 150; // more = heavier rain
  for (let i = 0; i < numDrops; i++) {
    const drop = document.createElement('div');
    drop.classList.add('drop');
    
    // random horizontal position
    drop.style.left = Math.random() * 100 + 'vw';
    
    // random animation delay and duration
    const duration = (Math.random() * 0.5 + 0.5) * 2; // 1s - 2s
    drop.style.animationDuration = duration + 's';
    drop.style.animationDelay = Math.random() * 2 + 's';
    
    rainContainer.appendChild(drop);
  }
}

spawnRain();

  var increment = 0;
  var drops = "";
  var backDrops = "";

  while (increment < 100) {
    var randoHundo = Math.floor(Math.random() * 98) + 1;
    var randoFiver = Math.floor(Math.random() * 4) + 2;

    increment += randoFiver;

    drops += '<div class="drop" style="left:' + increment +
      '%; bottom:' + (randoFiver * 2 - 1 + 100) +
      '%; animation-delay:0.' + randoHundo +
      's; animation-duration:0.5' + randoHundo +
      's;"><div class="stem" style="animation-delay:0.' + randoHundo +
      's; animation-duration:0.5' + randoHundo +
      's;"></div><div class="splat" style="animation-delay:0.' + randoHundo +
      's; animation-duration:0.5' + randoHundo +
      's;"></div></div>';

    backDrops += '<div class="drop" style="right:' + increment +
      '%; bottom:' + (randoFiver * 2 - 1 + 100) +
      '%; animation-delay:0.' + randoHundo +
      's; animation-duration:0.5' + randoHundo +
      's;"><div class="stem" style="animation-delay:0.' + randoHundo +
      's; animation-duration:0.5' + randoHundo +
      's;"></div><div class="splat" style="animation-delay:0.' + randoHundo +
      's; animation-duration:0.5' + randoHundo +
      's;"></div></div>';
  }

  $('.rain.front-row').append(drops);
  $('.rain.back-row').append(backDrops);
}

$('.splat-toggle.toggle').on('click', function() {
  $('body').toggleClass('splat-toggle');
  $(this).toggleClass('active');
  makeItRain();
});

$('.back-row-toggle.toggle').on('click', function() {
  $('body').toggleClass('back-row-toggle');
  $(this).toggleClass('active');
  makeItRain();
});

$('.single-toggle.toggle').on('click', function() {
  $('body').toggleClass('single-toggle');
  $(this).toggleClass('active');
  makeItRain();
});

makeItRain();

