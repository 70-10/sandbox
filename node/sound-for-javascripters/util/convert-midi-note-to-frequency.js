const convertMidiNoteToFrequency = midiNoteNumber =>
  2 ** ((midiNoteNumber - 69) / 12) * 440;

export default convertMidiNoteToFrequency;
