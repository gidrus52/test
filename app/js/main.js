'use strict'
//accordotio
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

//popup
const body = document.querySelector('body');
let popupBg = document.querySelector('.popup__bg'); 
let popup = document.querySelector('.popup'); 
let closeBtn = popup.querySelector('.close-btn');
let buyBtn = popup.querySelector('.buy-btn');



// body.addEventListener('mouseleave', () => {
//   popupBg.classList.add('active'); 
//   popup.classList.add('active');
// })
function closePopup() {
  popupBg.classList.remove('active'); 
  popup.classList.remove('active');
}
closeBtn.addEventListener('click',closePopup);
popupBg.addEventListener('click', closePopup);
buyBtn.addEventListener('click', ()=> {
  closePopup();
  content.forEach(el => {
    el.classList.remove('hide');
  })
})

//timer 
const video = document.getElementById('video');
const play = document.querySelector('.video__play');
const content = document.querySelectorAll('.hide');

play.addEventListener('click', () => {
  video.play();
  play.classList.add('hide');
  var checkVideoReady = setInterval(function() {
    if(video.readyState > 0) {
      var distance = video.duration;
      var x = setInterval(function() {
  
        var minutes = Math.floor(distance / 60);
        var seconds = Math.floor(distance);
  
        seconds = seconds > 9 ? seconds : '0' + seconds;
        document.getElementById("timer").innerHTML = minutes + ":" + seconds;
        if ((video.duration - distance) > 10) {
          content.forEach(el => {
            el.classList.remove('hide');
          })
        }
        distance -= 1;
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("timer").innerHTML = "WAIT";
        }
      }, 1000);
  
      clearInterval(checkVideoReady);
    }
  }, 200);
})



//timer2  
let limitedOffer = 120 * 60; //seconds
var timer2 = setInterval(function() {
  
  let hours = Math.floor(limitedOffer / (60 * 60));
  let minutes = Math.floor((limitedOffer % (60 * 60)) / 60 );
  let seconds = Math.floor(limitedOffer % 60);

  minutes = minutes > 9 ? minutes : '0' + minutes;
  seconds = seconds > 9 ? seconds : '0' + seconds;

  document.querySelectorAll('.timer2').forEach(el => {
    el.querySelector('.hours').innerHTML =  hours;
    el.querySelector('.minutes').innerHTML =  minutes;
    el.querySelector('.seconds').innerHTML =  seconds;
  })
  
  limitedOffer -= 1;
  if (limitedOffer < 0) {
    clearInterval(timer2);
  }
}, 1000);

