import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Header, Landing } from '../components'
const Home: NextPage = () => {
  return (
    <div className="">
      <Header />
      <Landing />
    </div>
  )
}

export default Home
