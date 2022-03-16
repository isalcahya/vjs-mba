import videojs from 'video.js';

const MenuButton = videojs.getComponent('MenuButton');

class NoteSettingMenuButton extends MenuButton {
  constructor(player, options) {
    super(player, options);
  }

  buildCSSClass() {
    return `vjs-note-setting-button ${super.buildCSSClass()}`;
  }

  buildWrapperCSSClass() {
    return `vjs-note-setting-button ${super.buildWrapperCSSClass()}`;
  }
}

Array.prototype.move = function (from, to) {
  this.splice(to, 0, this.splice(from, 1)[0]);
};

NoteSettingMenuButton.prototype.controlText_ = 'Add Note';

videojs.registerComponent('NoteSettingMenuButton', NoteSettingMenuButton);

videojs.getComponent( 'ControlBar' ).prototype.options_.children.unshift('NoteSettingMenuButton');

videojs.getComponent( 'ControlBar' ).prototype.options_.children.move( 0, 6 );

export default NoteSettingMenuButton;