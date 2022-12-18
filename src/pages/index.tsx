import { MainTemp } from './components/Main'

import { FooterTemp } from '@/pages/components/Footer'
import { HeaderTemp } from '@/pages/components/Header'

import { log } from 'next-axiom'

export default function Home() {
  log.debug('Home')
  return (
    <>
      <HeaderTemp />
      <MainTemp />
      <FooterTemp />
    </>
  )
}
