
// Set up Tone.js:
document.querySelector('button').addEventListener('click', () => {
  Tone.start()
  main()
})

function main() {
  // Create a synth and connect it to the master output (laptop speakers):
  const synth = new Tone.Synth()
    .toMaster()

  // Play a middle 'C' for the duration of an 8th note:
  synth.triggerAttackRelease('C4', '8n')
}
