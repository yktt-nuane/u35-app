import MainSub from './components/MainSub'

import FooterTemp from '@/pages/components/Footer'
import MainTemp from '@/pages/components/Main'

import { log } from 'next-axiom'

export default function Home() {
  log.debug('Home')
  return (
    <>
      <MainTemp />
      <MainSub />
      <FooterTemp />
    </>
  )
}
