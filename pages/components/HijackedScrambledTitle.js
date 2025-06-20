import { useScramble } from 'use-scramble'

export default function HijackedScrambledTitle({ text }) {

  const { ref, replay } = useScramble({
    text,
    speed: 0.3,
    scramble: 6,
    chance: 0.5,
    overflow: true
  })

  return <span ref={ref} style={{ display: 'inline-block' }} />
}
