import videojs from 'video.js';
import ContextMenuItem from './ContextMenuItem.js';

class AboutThisPlayer extends ContextMenuItem {
  constructor(player) {
    super(player, {
      name: 'AboutThisPlayer',
      label: 'About This Player',
      icon: 'vjs-icon-github'
    });
  }

  handleClick() {
    super.handleClick();
    alert('MBA PLAYER!');
  }
}

videojs.registerComponent('AboutThisPlayer', AboutThisPlayer);

export default AboutThisPlayer;
