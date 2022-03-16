import videojs from 'video.js';

const SettingMenuItem = videojs.getComponent('SettingMenuItem');

class SettingSubOptionTitle extends SettingMenuItem {
  constructor(player, options) {
    super(player, options);

    this.addClass('vjs-settings-sub-menu-item');
    this.addClass('vjs-settings-sub-menu-title');

    let div = videojs.dom.createEl('div');
    this.el().prepend(div);
  }

  handleClick() {
    this.options_.menu.restore();
  }
}

videojs.registerComponent('SettingSubOptionTitle', SettingSubOptionTitle);

export default SettingSubOptionTitle;
