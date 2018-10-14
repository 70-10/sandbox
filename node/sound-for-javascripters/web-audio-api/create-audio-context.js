const createAudioContext = () =>
  new (window.AudioContext || window.webkitAudioContext)();

export default createAudioContext;
