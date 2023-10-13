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
                <div className={styles.menuToggle} onClick={()=>handleActive()}>
                    <i className="fa-regular fa-message"></i>
                    {/* <div className={styles.menu}> */}
                    <div className={`${styles.menu} ${active ? styles.active : ''}`}>
                    <ul>
                        <li><i className="fa-regular fa-comment" style={{color:'#4343ff'}}></i></li>
                        <li><i className="fa-brands fa-whatsapp" style={{color:'#0bb60b'}}></i></li>
                    </ul>
                    </div>
                </div>
            </div>
        </>
    )
}