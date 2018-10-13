import Synth from "./synth";

const settings = "someSettings";
const synth = new Synth(settings);

const options1 = {
  midiNoteNumber: 70
};

const result1 = synth.play(options1);
console.log(result1);

const options2 = {
  midiNoteNumber: 70
};

const result2 = synth.stop(options2);

console.log(result2);

const options3 = {
  midiNoteNumber: 100
};

const result3 = synth.stop(options3);
console.log(result3);
