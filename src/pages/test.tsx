import { formatDistanceToNowStrict } from 'date-fns'
import ja from 'date-fns/locale/ja'

const Jsicm = new Date(2023, 3, 2)

const A = formatDistanceToNowStrict(Jsicm, {
  addSuffix: true,
  locale: ja,
  unit: 'day',
})

export default function Home() {
  return (
    <>
      <h1>{A}</h1>
    </>
  )
}
