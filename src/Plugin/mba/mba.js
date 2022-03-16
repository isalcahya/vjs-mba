import videojs from 'video.js';

const Plugin = videojs.getPlugin('plugin');
// https://d2v9dumx2qgiuf.cloudfront.net/de1fd958-682c-407c-9e35-e26e00ffff98/dash/NDARBOY GENK - BALUNGAN KERE (Official Music Video) Eps 1.mpd
// Default options for the plugin.
const defaults = {
	sourceUrl: '',
	disableFastForward: '',
	handleNoteClick: () => {}
};

class MbaCustomPlugin extends Plugin {

	constructor(player, options) {

		// the parent class will add player under this.player
		super(player);

		this.player.options_ = videojs.mergeOptions(this.player.options_, options);

		this.player.ready(() => this.setupReady());

		this.player.getBlob = this.getBlob.bind(this);

		this.player.ContextMenu.AboutThisPlayer.el().remove();

		this.player.src({
			src: this.player.options_.sourceUrl,
			type: 'application/dash+xml'
		});
	}

	setupReady () {

		let isInitialized = false;
		let previousTime = 0;

		if ( this.player.options_.disableFastForward ) {

			this.player.on('timeupdate', () => {
				if ( isInitialized && !this.player.seeking() ) {
					previousTime = this.player.currentTime();
				}
			});

			this.player.on('seeking', () => {
				if ( isInitialized && ( this.player.currentTime() > previousTime ) ) {
					// let currentTime = this.player.currentTime(previousTime);
				}
			});
		}

		this.player.on('canplaythrough', () => {
			if (isInitialized) {
				return;
			}
			isInitialized = true;
		});

		let MouseLevelContainer = this.player.findChild('MouseVolumeLevelDisplay');
		let NoteSettingsContainer = this.player.findChild('NoteSettingMenuButton');

		if ( MouseLevelContainer ) {
			MouseLevelContainer[0].component.hide()
		}

		if ( NoteSettingsContainer ) {
			let noteClass = NoteSettingsContainer[1].component;
			noteClass.handleClick = this.player.options_.handleNoteClick.bind(noteClass);
		}
	}

	getBlob () {
		return this.player.options_.blob || this.options.blob;
	}
}

MbaCustomPlugin.defaultState = {};

// Register the plugin with video.js.
videojs.registerPlugin('mba', MbaCustomPlugin);

