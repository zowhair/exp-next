import Head from 'next/head';
import styles from '../styles/Home.module.css';
import NavBar from '../components/Nav';
import Carousel from '../components/Carousel';
// import Card from '../components/Cards';
import Card from '../components/card/Card';
import PackageCards from '../components/PackageCards';
import Packages from '../components/Packages';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import NewCard from '../components/card/NewCard';
import  Stay  from '../components/Stay';
import { Arrange } from '../components/Arrange';
import Form from '../components/Form';
import PartnersCarousel from '../components/PartnersCarousel';

export default function Home() {
//   let cardsData = [
//     {
//         title: "K2 Expedition",
//         desc: "K2 expedition is ...",
//         price: 899,
//     },
    
// ]
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Carousel />
        <Hero />
        {/* <Card /> */}

        <div className="block-component">
          

          <div className='container-block'>
            <div className='container_title'>
              <span className='title'>Trekking Tours</span>
            </div>
            <div className="card-wrapper container-block">
              <NewCard imgSrc="/images/k2-ggla.JPG" slug="k2-expedition" title="k2 Gondogoro La Trek" desc="k2 expedition is ..." tag="sale" price="$899" />
              <NewCard imgSrc="/images/parbet.jpeg" slug="nangaparbet" title="Nanga Parbat Fairy Meadows Trek" desc="We provide Nangaparbet Expedition...." tag="new" price="$908" />
              <NewCard slug="biafohispar" title="Biafo Hispar Nagar Snow Lake Trek" desc="Economy Package..." tag="sale" price="$657" />
              
            </div>  
            
          </div>

          <div className='container-block'>
            <div className='container_title'>
              <span className='title'>Cultural Tours</span>
            </div>
            <div className="card-wrapper container-block">
              <NewCard imgSrc="/images/cultural.jpeg" slug="indusvalley" title="Indus Valley Civilization Culture tours" desc="New Sale offer..." tag="discount" price="$989" />
              <NewCard imgSrc="/images/northsouth.jpeg" slug="northandsouth" title="North and South Pakistan Culture Tours" desc="Economy Package..." tag="sale" price="$657" />
              <NewCard imgSrc="/images/spring.jpg" slug="skardutours" title="Skardu Tours " desc="New Sale offer..." tag="discount" price="$989" />
            </div>            
          </div>
        </div>
        <PackageCards />
        {/* <Packages /> */}
        
        {/* <Arrange /> */}
        {/* <Form /> */}
        {/* <Stay /> */}
        
        <PartnersCarousel />
      

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}


Home.getLayout =function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}