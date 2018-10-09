window.onload = () => {
  console.log("Hello, Sound");

  const audioContext = new AudioContext();
  const osc = audioContext.createOscillator();
  osc.type = "sine";
  osc.frequency.value = 440;

  const destination = audioContext.destination;
  osc.connect(destination);
  osc.start();

  setInterval(() => {
    osc.stop();
    document.querySelector(".title").textContent = "Hello, Sound!";
  }, 2000);
};
