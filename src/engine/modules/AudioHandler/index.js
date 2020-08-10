import Component from "./Component";

import OnGameStart from "../assets/sounds/retro_43.mp3";
import OnGameEnd from "../assets/sounds/retro_11.mp3";
import OnGameBg from "../assets/sounds/retro_47.mp3";
import OnPoints from "../assets/sounds/sfx_wpn_cannon4.wav";
import OnWallBounce from "../assets/sounds/sfx_wpn_laser7.wav";
import OnBreakerBounce from "../assets/sounds/sfx_wpn_laser5.wav";

// Bounce
// retro_jump_24, retro_jump_26

// Laser
// sfx_wpn_laser7, sfx_wpn_laser6, sfx_wpn_laser5

// Canon
// sfx_wpn_cannon1, sfx_wpn_cannon4, sfx_weapon_singleshot13

class AudioHandler extends Component {
  constructor(props) {
    super(props);

    const audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    this.state = {
      audioContext,
    };

    this.preload(
      [
        { key: "OnGameBg", src: OnGameBg, type: "audio" },
        { key: "OnGameStart", src: OnGameStart, type: "audio" },
        { key: "OnPoints", src: OnPoints, type: "audio" },
        { key: "OnWallBounce", src: OnWallBounce, type: "audio" },
        { key: "OnBreakerBounce", src: OnBreakerBounce, type: "audio" },
        { key: "OnGameEnd", src: OnGameEnd, type: "audio" },
      ],
      this.bindToContext
    );
  }

  bindToContext = (key, asset) => {
    const { audioContext } = this.state;
    const track = audioContext.createMediaElementSource(asset);
    var gain = audioContext.createGain();

    gain.gain.value = 0.5;

    track.connect(gain);
    gain.connect(audioContext.destination);
  };

  play(assetKey, { loop = false, volume = 1 } = {}) {
    return;
    if (!this.assets[assetKey]) {
      return;
    }
    const { audioContext } = this.state;
    if (audioContext.state === "suspended") {
      audioContext.resume();
    }

    this.assets[assetKey].currentTime = 0;
    this.assets[assetKey].play();

    if (loop) {
      this.assets[assetKey].loop = true;
    }
    if (volume) {
      this.assets[assetKey].volume = volume;
    }
  }

  stop(assetKey) {
    this.assets[assetKey].currentTime = 0;
    this.assets[assetKey].pause();
  }

  mute() {
    console.log("Muting");
  }
}

export default AudioHandler;
