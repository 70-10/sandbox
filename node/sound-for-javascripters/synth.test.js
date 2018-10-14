import Synth from "./synth";
import createAudioContext from "./web-audio-api/create-audio-context";
import { JSDOM } from "jsdom";

global.window = new JSDOM().window;

const audioContext = createAudioContext();
const nextNode = audioContext.destination;
const synth = new Synth({ audioContext, nextNode });
const now = audioContext.currentTime;

// 再生時に期待する動き
describe("play", () => {
  const options = {
    midiNoteNumber: 70,
    startTime: now
  };

  it("state", () => {
    synth.play(options);

    const state = synth.oscillatorArray[options.midiNoteNumber].state;
    const expectedState = {
      play: true,
      midiNoteNumber: 70
    };

    expect(state).toEqual(expectedState);
  });

  it("osc", () => {
    const osc = synth.oscillatorArray[options.midiNoteNumber].osc;

    expect(!!osc).toBe(true);
  });
});

// 停止時に期待する動き
describe("stop", () => {
  const options = {
    midiNoteNumber: 70
  };

  it("state", async () => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        synth.stop(options);
        resolve();
      }, 500);
    });
    await promise;

    const state = synth.oscillatorArray[options.midiNoteNumber].state;
    const expectedState = {
      play: false,
      midiNoteNumber: null
    };

    expect(state).toEqual(expectedState);

    const osc = synth.oscillatorArray[options.midiNoteNumber].osc;

    expect(!!osc).toBe(false);
  });

  it("osc", () => {
    const osc = synth.oscillatorArray[options.midiNoteNumber].osc;
    expect(!!osc).toBe(false);
  });
});

// すでに停止している音を停止させる時の挙動
describe("double stop", () => {
  const options = {
    midiNoteNumber: 70
  };

  it("state", () => {
    const state = synth.oscillatorArray[options.midiNoteNumber].state;
    const expectedState = {
      play: false,
      midiNoteNumber: null
    };

    expect(state).toEqual(expectedState);
  });

  it("osc", () => {
    const osc = synth.oscillatorArray[options.midiNoteNumber].osc;
    expect(!!osc).toBe(false);
  });
});
