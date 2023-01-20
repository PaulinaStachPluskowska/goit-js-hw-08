import Player from '@vimeo/player';
let throttle = require('lodash.throttle');

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

// let currentTime = 0;
// console.log(currentTime);

player.on(
  'timeupdate',
  throttle(function() {
    player.getCurrentTime().then(function (seconds) {
      localStorage.setItem('videoplayer-current-time', seconds);
    });
  }, 1000)
);

let currentTime = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(currentTime || 0);

// console.log(currentTime);


