import { useScramble } from 'use-scramble'

export default function HijackedScrambledTitle({ text }) {

  const { ref, replay } = useScramble({
    text,
    speed: 1,
    scramble: 10,
    chance: 0.8,
    overdrive: false,
    step: 3
  })

  return <span ref={ref} onMouseEnter={replay} onClick={replay} style={{ display: 'inline-block' }} />
}
