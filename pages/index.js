import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'
import AboutComp from '../components/About'
import { useRef } from 'react'
import Footer from '../components/Footer'
import ServicesComp from '../components/Services'
import PortfolioComp from '../components/Portfolio'
import NewsComp from '../components/News'
import Carouseler from '../components/Carouseler'
import ContactComp from '../components/Contact'
export default function Home() {
  let carRef = useRef();
  return (
    <div className=' w-[100%] h-[100%] flex flex-col gap-14'>
      <Head>
        <title>Elements</title>
        <meta name="description" content="A desgin Template for a hypothetical website called elements" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content='width=device-width,initial-scale = 1,maximum-scale=1'></meta>
      </Head>
  <Nav />
<div className='relative w-[100vw] h-[100vh] flex flex-col lg:flex-row'>
<div className='absolute w-full h-full bg-purple-700 z-10 hidden lg:inline ' style={{top:"0%",left:"0",clipPath:"polygon(0 0, 62% 0,39% 100%,0 100%)"}}/>
<div className='absolute w-[100%] h-[90vh] bg-purple-700 -z-10 lg:hidden' />
<div className='flex   w-[100%] relative h-[100%] flex-col lg:flex-row '>

<Carouseler 
  tailwind="h-[60%] lg:h-[100%] w-[100%] z-80 lg:w-[110%] lg:flex mt-[25%] lg:mt-0"
></Carouseler>
</div>

</div>
<AboutComp></AboutComp>
<ServicesComp></ServicesComp>
<PortfolioComp></PortfolioComp>
<NewsComp></NewsComp>
<div className='h-[40vh] pb-[4%] w-full bg-blue-900 mt-20 flex'>
  <div className='flex w-[100%] lg:w-[80%] ml-auto mr-auto h-[80%] mt-20 flex-col lg:flex-row'>
    <p className='text-4xl w-[100%] lg:w-[20%] text-white mr-20 font-serif text-center'>Subscribe to our news letter</p>
    <div className='flex w-[60%] mt-[1%] flex-col lg:flex-row  ml-auto mr-auto '>
      <input className='w-[90%] pl-5 lg:h-[60px] h-[40px]  rounded-full ml-auto mr-auto focus:outline-none ' type="email"></input>
   <div className='w-fit justify-center h-fit  text-white rounded-full pl-6 pr-6 pt-2 pb-2 mt-[2%] overflow-hidden text-right bg-blue-700 hover:bg-blue-500 ml-auto mr-auto text-md lg:translate-x-[-110%] lg:translate-y-[-14%]' >Subscribe</div>
    </div>
  </div>
</div>
<ContactComp></ContactComp>
<Footer></Footer>
    </div>
  )
}
