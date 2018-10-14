import createOscillator from "./web-audio-api/create-oscillator";

export default class Synth {
  constructor({ audioContext, nextNode }) {
    this.audioContext = audioContext;
    this.output = nextNode;
    this.oscillatorArray = this.createOscillatorArray();
    this.createOscillator = createOscillator({ audioContext });
  }

  createOscillatorArray() {
    const vacantArray = Array.from({ length: 128 });
    return vacantArray.map(o => ({
      state: { midiNoteNumber: null, play: false },
      osc: null
    }));
  }

  createGain(volume = 0.2) {
    const gainNode = this.audioContext.createGain();
    gainNode.gain.value = volume;
    return gainNode;
  }

  play({ midiNoteNumber, startTime = 0 }) {
    const osc = this.createOscillator({ midiNoteNumber });
    const gain = this.createGain();
    osc.connect(gain);
    gain.connect(this.output);
    osc.start(startTime);

    const state = {
      play: true,
      midiNoteNumber
    };

    const item = { osc, state };

    this.oscillatorArray[midiNoteNumber] = item;
    return `play ${midiNoteNumber}`;
  }

  stop({ midiNoteNumber, endTime = 0 }) {
    const targetOscillator = this.oscillatorArray[midiNoteNumber].osc;
    if (!targetOscillator) {
      return `not ${midiNoteNumber} playing`;
    }

    targetOscillator.stop(endTime);

    const state = { play: false, midiNoteNumber: null };
    this.oscillatorArray[midiNoteNumber].state = state;
    this.oscillatorArray[midiNoteNumber].osc = null;

    return `stop ${midiNoteNumber}`;
  }
}
