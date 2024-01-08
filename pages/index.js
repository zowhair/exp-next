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
        <NewCard />
        <PackageCards />
        <Packages />
   
      

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