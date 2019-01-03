live_loop :live do
  use_synth :fm
  use_bpm 128
  
  play :C4
  sleep 1.0
  play :E4
  sleep 0.5
  play :G4
  sleep 0.5
  play :c5
  sleep 1.0
end