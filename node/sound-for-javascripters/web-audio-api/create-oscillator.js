import convertMidiNoteToFrequency from "../util/convert-midi-note-to-frequency";

const createOscillator = ({ audioContext }) => {
  return ({ midiNoteNumber, wave = "sine" }) => {
    const osc = audioContext.createOscillator();
    osc.type = wave;
    osc.frequency.value = convertMidiNoteToFrequency(midiNoteNumber);
    return osc;
  };
};

export default createOscillator;
