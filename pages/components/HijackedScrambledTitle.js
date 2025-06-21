import { useScramble } from 'use-scramble'

export default function HijackedScrambledTitle({ text }) {

  const { ref, replay } = useScramble({
    text,
    speed: 0.8,
    scramble: 3,
    chance: 0.1,
    overflow: false
  })

  return <span ref={ref} style={{ display: 'inline-block' }} />
}
