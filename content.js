const enableAutoplay = (player) => player.addEventListener('ended', () => {
  window.localStorage.setItem('autoPlayingBefore', location.href);
  document.getElementById('btnNext').click();
}, false);

const isContinuingPlaying = () => {
  const previous = window.localStorage.getItem('autoPlayingBefore');
  window.localStorage.removeItem('autoPlayingBefore');

  const [previousBtn] = document.getElementsByClassName('preev');

  return previousBtn.href === previous;
};

const enableFullscreen = (player) => {
  const offlight = document.getElementById('offlight');
  player.style.setProperty('position', 'fixed');
  offlight.click();

  let isExited = false;
  document.addEventListener('keyup', ({keyCode}) => {
    if (keyCode === 27 && !isExited) {
      player.style.setProperty('position', '');
      offlight.click();
      isExited = true;
    }
  });
};

setTimeout(() => {
  const player = document.getElementById('player_html5_html5_api');

  if (player) {
    enableAutoplay(player);
    if (isContinuingPlaying()) {
      enableFullscreen(player);
    }
  }
}, 3000);
