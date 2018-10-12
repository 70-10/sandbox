import convertMidiNoteToFrequency from "./convertMidiNoteToFrequency";

window.onload = () => {
  const audioContext = new AudioContext();
  const destination = audioContext.destination;

  const midiNoteArray = [60, 64, 67, 71];

  const oscArray = midiNoteArray.map(frequency => {
    const osc = audioContext.createOscillator();
    osc.frequency.value = convertMidiNoteToFrequency(frequency);

    const gain = audioContext.createGain();
    gain.gain.value = 0.2;

    osc.connect(gain);
    gain.connect(destination);
    return osc;
  });

  const now = audioContext.currentTime;

  oscArray.forEach((osc, index) => osc.start(now + index));

  setInterval(() => {
    oscArray.forEach(osc => osc.stop());
    document.querySelector(".title").textContent = "Hello, Sound!";
  }, 5000);
};
