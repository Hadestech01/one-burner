import Head from 'next/head'
import NavBar from '../components/Navbar'
import Collaborate from '../components/Collaborate'
import Companies from '../components/Companies'
import Management from '../components/Management'
import Team from '../components/Team'
import Selection from "../components/Selection"
import Selection2 from "../components/Selection2"


export default function Home() {
  return (
    <>
      <Head>
        <title></title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/> 
      <main>
       <Collaborate/>
       <Companies />
       <Management />
       <Team />
       <Selection />
       <Selection2 />
      </main>
    </>
  )
}
