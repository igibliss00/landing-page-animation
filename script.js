const el = document.querySelectorAll('.top-nav, .bottom-nav, .slogan');
const el2 = document.querySelectorAll('.top-nav, .bottom-nav, .landing');
const main = document.querySelector('.main');
const info = document.querySelectorAll('.info');

function fade() {
  var i = 0;
  main.style.opacity = 0;
  var k = window.setInterval(function() {
    if (i >= 80) {
      clearInterval(k);
    } else {
      main.style.opacity = i / 80;
      i++;
    }
  }, 10);
};

for (let i = 0; i < el.length; i++){ 
  el[i].addEventListener('click', nextPage);
}

function nextPage() {
    let tl = anime.timeline({
      easing: 'easeInOutSine'
    });

    tl
    .add({
      targets: '.sky',
      translateY: '-110%',
      duration: 2500  
    })
    .add({
      targets: '.mountain',
      translateY: '-110%',
      duration: 1900  
    }, '-=2000')
    .add({
      targets: el,
      translateY: '-700px',
      duration: 1500,
    }, '-=2500')
    .add({
      targets: el2,
      update: () => {
        for( i = 0; i < el2.length; i++) {
          el2[i].classList.add('displayNone');
        }
      }
    })
    .add({
      targets: '.main',
      duration: 100,
      update: () => {
        fade();
      }
    }, '-=2700')
    .add({
      targets: info,
      opacity: .3,
      update: () => {
        main.classList.add('displayFlex');
      }
    })
    .add({
      targets: info,
      translateY: {
        value: -700,
        duration: 1000
      },
      delay: function(el, i, l) {
        return i * 100;
      },
    })

};


