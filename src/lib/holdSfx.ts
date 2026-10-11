/**
 * Synthesised sound effects for the hero HoldButton (Web Audio, no asset files):
 * a rising "charge" while held and a short "pop" when the hold completes.
 * Everything starts from a pointer/key handler, so browsers allow the AudioContext to run.
 */

type Charge = { gain: GainNode; stop: (at: number) => void }

let ctx: AudioContext | null = null
let charge: Charge | null = null

function audio() {
  if (!ctx) {
    const Ctor = window.AudioContext ?? (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
    if (!Ctor) return null
    ctx = new Ctor()
  }
  if (ctx.state === 'suspended') void ctx.resume()
  return ctx
}

/** Start the rising charge tone; it reaches its peak after `durationMs`. */
export function startCharge(durationMs: number) {
  const ac = audio()
  if (!ac) return
  stopCharge()
  const now = ac.currentTime
  const end = now + durationMs / 1000

  const gain = ac.createGain()
  gain.gain.setValueAtTime(0.0001, now)
  gain.gain.exponentialRampToValueAtTime(0.09, now + 0.08)
  gain.gain.linearRampToValueAtTime(0.14, end)

  const filter = ac.createBiquadFilter()
  filter.type = 'lowpass'
  filter.Q.value = 6
  filter.frequency.setValueAtTime(500, now)
  filter.frequency.exponentialRampToValueAtTime(3200, end)
  filter.connect(gain).connect(ac.destination)

  // Two detuned voices sweeping up an octave and a half read as an engine spooling up.
  const voices = (['sawtooth', 'triangle'] as const).map((type, index) => {
    const osc = ac.createOscillator()
    osc.type = type
    osc.detune.value = index ? 7 : -7
    osc.frequency.setValueAtTime(150, now)
    osc.frequency.exponentialRampToValueAtTime(540, end)
    osc.connect(filter)
    osc.start(now)
    return osc
  })

  // Gentle tremolo that speeds up with the charge.
  const lfo = ac.createOscillator()
  const depth = ac.createGain()
  lfo.frequency.setValueAtTime(6, now)
  lfo.frequency.linearRampToValueAtTime(18, end)
  depth.gain.value = 0.025
  lfo.connect(depth).connect(gain.gain)
  lfo.start(now)

  charge = {
    gain,
    stop: (at) => [...voices, lfo].forEach((node) => node.stop(at)),
  }
}

/** Fade the charge tone out (early release or completion). */
export function stopCharge(fadeMs = 120) {
  if (!ctx || !charge) return
  const now = ctx.currentTime
  const { gain, stop } = charge
  gain.gain.cancelScheduledValues(now)
  gain.gain.setValueAtTime(Math.max(gain.gain.value, 0.0001), now)
  gain.gain.exponentialRampToValueAtTime(0.0001, now + fadeMs / 1000)
  stop(now + fadeMs / 1000 + 0.02)
  charge = null
}

/** A short, bright pop: a pitch-dropping sine body plus a tiny noise click. */
export function playPop() {
  const ac = audio()
  if (!ac) return
  const now = ac.currentTime

  const body = ac.createOscillator()
  const bodyGain = ac.createGain()
  body.type = 'sine'
  body.frequency.setValueAtTime(880, now)
  body.frequency.exponentialRampToValueAtTime(160, now + 0.14)
  bodyGain.gain.setValueAtTime(0.0001, now)
  bodyGain.gain.exponentialRampToValueAtTime(0.35, now + 0.006)
  bodyGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18)
  body.connect(bodyGain).connect(ac.destination)
  body.start(now)
  body.stop(now + 0.2)

  const length = Math.floor(ac.sampleRate * 0.03)
  const buffer = ac.createBuffer(1, length, ac.sampleRate)
  const data = buffer.getChannelData(0)
  for (let i = 0; i < length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / length)
  const click = ac.createBufferSource()
  const clickFilter = ac.createBiquadFilter()
  const clickGain = ac.createGain()
  click.buffer = buffer
  clickFilter.type = 'highpass'
  clickFilter.frequency.value = 2500
  clickGain.gain.value = 0.18
  click.connect(clickFilter).connect(clickGain).connect(ac.destination)
  click.start(now)
}
