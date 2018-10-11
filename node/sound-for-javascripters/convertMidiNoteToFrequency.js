export default midiNoteNumber => 2 ** ((midiNoteNumber - 69) / 12) * 440;
