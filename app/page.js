
"use client";
import Head from 'next/head'
import styles from './page.module.scss'
import Slider from './components/slider/slider'
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Trendingcard from './components/trendingcard/trendingcard';
import MainSlider from './components/mainslider/mainslider';
import Link from 'next/link'



export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 2000
    });
  })

  const options = {
    margin: 0,
    nav: false,
    responsiveClass: true,
    lazyLoad: true,
    dots: false,
    autoplay: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 3000,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
      300: {
        items: 1,
      },
      600: {
        items: 1,
      },
      700: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
  return (

    <>
      <Head>
        <title>OpenSkyTripsssss</title>
        <meta name="description" content="Openskytrips - The Best Travel Agency of Kashmir" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />
        {/* <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"></link> */}

      </Head>

      <div style={{ marginTop: '60px' }}>
        <MainSlider options={options} />
      </div>

      <div data-aos="fade-up" className={styles.trendingsection}>
        <div className={styles.trendingheading}>
          <span>Top Trending Tour Packages</span>
        </div>
        <div className={styles.trendingpackages}>
          <Trendingcard imageSrc='/images/homeslider/slider1.jpg' imageDesc='Classic Kashmir - Family Tours' />
          <Trendingcard imageSrc='/images/homeslider/slider3.jpg' imageDesc='Facinating Kashmir-Winter Special' />
          <Trendingcard imageSrc='/images/homeslider/slider8.jpg' imageDesc='Kashmir Magic Moments-Honeymoon Special' />
          <Trendingcard imageSrc='/images/homeslider/slider10.jpg' imageDesc='Exotic Kashmir - Cool Embrace & Aromatic Fragnance ' />
          <Trendingcard imageSrc='/images/homeslider/slider12.png' imageDesc='Kashmir Discover tours-Fusion Tours' />

        </div>
      </div>

      <div data-aos="fade-up" className={styles.pdsection}>
        <div className={styles.pdheading}>
          <span className={styles.h1}>Take a look at Our</span>
          <span className={styles.h5}>Popular Locations</span>
        </div>
        <div className={styles.pdestinations}>
          <div data-aos="fade-up" className={styles.pdcard}>
            <img src="/images/gulmarg.jpg" alt="" width="100%" height="300px" />
            <div className={styles.desc}>
              <span>Gulmarg</span>
              <a href='/pages/tours' className={styles.btnknowmore}> Know More </a>
            </div>
          </div>
          <div data-aos="fade-up" className={styles.pdcard}>
            <img src="/images/pahalgham.jpg" alt="" width="100%" height="300px" />
            <div className={styles.desc}>
              <span>Pahalgam</span>
              <a href='/pages/tours' className={styles.btnknowmore}> Know More </a>
            </div>
          </div>
          <div data-aos="fade-up" className={styles.pdcard}>
            <img src="/images/srinagar.jpg" alt="" width="100%" height="290px" />
            <div className={styles.desc}>
              <span>Srinagar</span>
              <a href='/pages/tours' className={styles.btnknowmore}> Know More </a>
            </div>

          </div>
          <div data-aos="fade-up" className={styles.pdcard}>
            <img src="/images/sonamarg.jpg" alt="" width="100%" height="290px" />
            <div className={styles.desc}>
              <span>Sonamarg</span>
              <a href='/pages/tours' className={styles.btnknowmore}> Know More </a>
            </div>

          </div>

        </div>
      </div>

      <div className={styles.abtcont}>
        <img data-aos="fade-up" src="images/palne.jpeg" />
        <div data-aos="fade-up" className={styles.habt}>
          <div className={styles.abtitle}>
            <span>About Us</span>
            <h2>Get ready for real time adventure</h2>
          </div>
          <div className={styles.abcaption}>
            <p className={styles.mb50}>Let&apos;s start your journey with us, your dream will come true.</p>
            <p className={styles.mb50}>The world&apos;s best travel destination &apos;KASHMIR&apos; hailed all over the world for its incredible
              natural beauty
              cradled high in the lofty green Himalayas surrounded by mountain peaks,
              lush green valleys, glistening lakes, temples and spectacular Mughal-era gardens. </p>
            <p className={styles.mb50}>Our Services Are Ideal for Individuals, Couples, Families and Groups.
            </p>
            <div className={styles.bydbtn}>
              <Link href={"/pages/tours"}>
                <input type="button" className={styles.byd} value="Book Your Destination" />
              </Link>
            </div>
          </div>
        </div>
      </div>


      <Slider />

    </>

  )
}
