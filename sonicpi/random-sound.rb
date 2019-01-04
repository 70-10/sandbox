use_bpm 128

live_loop :drums do
  sample :drum_bass_hard
  sleep 1.0
end

live_loop :live do
  use_synth :tb303

  freq = choose([:C3, :Cs3]) + choose([0])
  cutoffFreq = rrand(40, 120)
  rel = rrand(0.01, 0.4)

  play freq, release: rel, cutoff: cutoffFreq, amp: 0.25
  play freq + 4, release: rel, cutoff: cutoffFreq, amp: 0.25
  play freq + 7, release: rel, cutoff: cutoffFreq, amp: 0.25
  sleep choose([0.25, 0.5])
end
