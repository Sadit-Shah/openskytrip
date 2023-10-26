
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
            <img src="/images/ms2.jpg" className={mainslidercss.mainslider} />
            <img src="/images/ms5.jpg"  className={mainslidercss.mainslider}/>
            <img src="/images/mainslider/ms-1.jpg"  className={mainslidercss.mainslider}/>
            <img src="/images/ms6.jpg" className={mainslidercss.mainslider}/>
            <img src="/images/ms7.jpg" className={mainslidercss.mainslider}/>
            <img src="/images/mainslider/ms-2.jpg" className={mainslidercss.mainslider}/>
        </OwlCarousel>
    );
};
export default MainSlider;