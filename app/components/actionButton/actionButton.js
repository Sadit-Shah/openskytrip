'use client';
import { useState } from 'react';
import styles from './actionButton.module.scss';



export default function ActionBar() {
    const [active,setActive]=useState(false)
    const handleActive = () => {
        setActive(!active)
      };
    return (
        <>
            <div className={styles.navigation}>
                {/* <div className={`${styles.menuToggle} ${active ? styles.active : ''}`} onClick={()=>handleActive()}> */}
                <div className={`${styles.menuToggle} ${active ? styles.active : ''}`} onClick={()=>handleActive()}>
                    <i className="fa-regular fa-message"></i>
                    {/* <div className={styles.menu}> */}
                    <div className={styles.menu}>
                    <ul>
                        <li style={{'--i':'0.1s'}}><i className="fa-regular fa-comment" style={{background:'#FFC800'}}></i></li>
                        <li style={{'--i':'0.2s'}}><i className="fa-brands fa-whatsapp" style={{background:'#059405'}}></i></li>
                    </ul>
                    </div>
                </div>
            </div>
        </>
    )
}