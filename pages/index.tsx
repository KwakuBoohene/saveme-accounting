import type { NextPage } from 'next'
import Head from 'next/head'


import Header from '../components/homepage/Header'
import Features from '../components/homepage/Features'
import Footer from '../components/homepage/Footer'
import Headline from '../components/homepage/Headline'
import Info from '../components/homepage/Info'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>SaveMe - A Personal Accounting App for your everyday internet user</title>
        <meta name="description" content="SaveMe - A Personal Accounting App for your everyday internet user" />
        <link rel="icon" href="./assets/icons/icon-transparent.png" />
      </Head>

    <Header/>
    <Headline/>
    <Info/>
    <Features/>
    <Footer/>



    </div>
  )
}

export default Home
