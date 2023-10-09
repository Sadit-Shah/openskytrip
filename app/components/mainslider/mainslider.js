
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import mainslidercss from './mainslider.module.scss'


var $ = require("jquery");
if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});

// This is for React JS, Remove this for Next.js
// import OwlCarousel from 'react-owl-carousel';

const MainSlider = (props) => {
    useEffect(() => {
        Aos.init({
            duration: 5000
        });
    })
    // const options = {
    //     margin: 0,
    //     nav:false,
    //     responsiveClass: true,
    //     dots: false,
    //     autoplay: true,
    //     smartSpeed: 1000,
    //     autoplayTimeout: 3000,
    //     autoplayHoverPause: true,
    //     responsive: {
    //         600: {
    //             items: 3,
    //         },
    //         700: {
    //             items: 4,
    //         },
    //         1000: {
    //             items: 6,
    //         },
    //     },
    // };
    const options = props.options;
    return (
        <OwlCarousel 

            className="owl-theme"
            loop
            margin={8}
            nav={true}
            dots={false}
            mouseDrag={false}
            touchDrag={false}
            {...options}
        >
            
           
            <img src="/images/ms2.jpg" className={mainslidercss.mainslider}   />
            <img src="/images/ms5.jpg"  className={mainslidercss.mainslider}/>
            <img src="/images/n2.jpg"  className={mainslidercss.mainslider}/>
            <img src="/images/ms6.jpg" className={mainslidercss.mainslider}/>
            <img src="/images/ms7.jpg" className={mainslidercss.mainslider}/>
           
            {/* <div>
                <img src="/images/homeslider/slider2.jpg" />
            </div>
            <div>
                <img src="/images/homeslider/slider3.png" />
            </div>
            <div>
                <img src="/images/homeslider/slider4.jpg" />
            </div>
            <div>
                <img src="/images/homeslider/slider5.jpg" />
            </div>
            <div>
                <img src="/images/homeslider/slider6.jpg" />
            </div>
            <div>
                <img src="/images/homeslider/slider7.jpg" />
            </div>
            <div>
                <img src="/images/homeslider/slider8.jpg" />
            </div>
            <div>
                <img src="/images/homeslider/slider9.jpg" />
            </div>
            <div>
                <img src="/images/homeslider/slider10.jpg" />
            </div>
            <div>
                <img src="/images/homeslider/slider11.jpg" />
            </div>
            <div>
                <img src="/images/homeslider/slider12.png" />
            </div> */}
        </OwlCarousel>
    );
};
export default MainSlider;