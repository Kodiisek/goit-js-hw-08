import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const vimeoPlayer = new Vimeo(iframe);
const storageKey = 'videoplayer-current-time';

const saveCurrentTime = (currentTime) => {
  localStorage.setItem(storageKey, currentTime);
};

const loadCurrentTime = () => {
  return localStorage.getItem(storageKey);
};

let isPlayerReady = false;
let initialTime = 0;

vimeoPlayer.on('loaded', async () => {
  isPlayerReady = true;

  const storedTime = loadCurrentTime();

  if (storedTime) {
    initialTime = parseFloat(storedTime);

    try {
      const duration = await vimeoPlayer.getDuration();

      if (initialTime > 0 && initialTime < duration) {
        vimeoPlayer.setCurrentTime(initialTime);
      }
    } catch (error) {
      console.error('Error retrieving video duration', error);
    }
  }

  vimeoPlayer.on('timeupdate', throttle(async () => {
    if (isPlayerReady) {
      const currentTime = await vimeoPlayer.getCurrentTime();
      saveCurrentTime(currentTime);
    }
  }, 1000));
});

