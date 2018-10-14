import Synth from "./synth";
import createAudioContext from "./web-audio-api/create-audio-context";

const audioContext = createAudioContext();
const destination = audioContext.destination;

const synth = new Synth({
  audioContext,
  nextNode: destination
});

const option1 = {
  midiNoteNumber: 75,
  wave: "sawtooth",
  velocity: 100
};

synth.play(option1);

const option2 = {
  midiNoteNumber: 75
};

setTimeout(() => synth.stop(option2), 2000);
