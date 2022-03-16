import videojs from 'video.js';

const SettingMenuItem = videojs.getComponent('SettingMenuItem');

class SettingSubOptionItem extends SettingMenuItem {
  constructor(player, options) {
    super(player, options);

    this.selectable = true;

    // FIXME: should be remove
    Object.assign(this, options);

    this.addClass('vjs-settings-sub-menu-item');
    this.addClass('vjs-settings-sub-menu-option');

    let div = videojs.dom.createEl('div');

    this.el().prepend(div);

    this.update();
  }

  update() {
    this.selected(this.value === this.parent.selected.value);
  }

  handleClick() {
    this.parent.onChange({ index: this.options_.index });
    this.menu.restore();
  }
}

videojs.registerComponent('SettingSubOptionItem', SettingSubOptionItem);

export default SettingSubOptionItem;