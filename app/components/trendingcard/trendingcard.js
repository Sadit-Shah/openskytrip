
import Image from 'next/image'
import Trendingcardcss from './trendingcard.module.scss'
import Aos from 'aos'
import { useEffect } from 'react';

export default function Trendingcard(props) {
    useEffect(() => {
        Aos.init({
          duration: 2000
        });
      })
    return (
        <>
            <div data-aos="fade-up" className={Trendingcardcss.cardcont}>
                <div className={Trendingcardcss.imgcont}>
                    <Image src={props.imageSrc} width={200} height={330} />
                </div>
                <div className={Trendingcardcss.desc}>
                    <h5>
                        <a href='/packages/packages'> {props.imageDesc} </a>
                    </h5>
                </div>

            </div>
        </>
    )
}