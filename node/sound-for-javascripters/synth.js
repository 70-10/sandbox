export default class Synth {
  constructor(settings) {
    this.settings = settings;
    this.destination = "destination";
    this.oscillatorArray = Array.from({ length: 128 });
    console.log(this.oscillatorArray.map((o, index) => index));
  }

  createOscillator({ midiNoteNumber, wave }) {
    return `oscillator with ${midiNoteNumber}, ${wave}`;
  }

  play({ midiNoteNumber }) {
    const wave = "sine";
    const oscillator = this.createOscillator({ midiNoteNumber, wave });

    this.oscillatorArray[midiNoteNumber] = oscillator;

    console.log(this.oscillatorArray);
    return `play ${midiNoteNumber}`;
  }

  stop({ midiNoteNumber }) {
    const targetOscillator = this.oscillatorArray[midiNoteNumber];
    if (!targetOscillator) {
      return `not ${midiNoteNumber} playing`;
    }

    this.oscillatorArray[midiNoteNumber] = `stop ${midiNoteNumber}`;

    console.log(this.oscillatorArray);
    return `stop ${midiNoteNumber}`;
  }
}
