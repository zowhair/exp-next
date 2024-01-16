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

export default function Home() {
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
            <div className="card-wrapper container-block">
              <NewCard slug="k2-expedition" title="K2 expedition" desc="k2 expedition is ..." tag="sale" />
              <NewCard slug="gasherbrum" title="Gasherbrum" desc="We provide Gasherbrum Expedition...." tag="new" />
              <NewCard slug="g6-expedition" title="G6 Expedition" desc="Economy Package..." tag="sale" />
              <NewCard slug="nangaparbet" title="Nangaparbet expedition" desc="New Sale offer..." tag="discount" />
            </div>

          </div>
        </div>
        <PackageCards />
        <Packages />
        
        <Arrange />
        <Form />
        {/* <Stay /> */}

      

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