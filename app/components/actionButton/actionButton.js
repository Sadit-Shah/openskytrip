'use client';
import { useState , useEffect} from 'react';
import styles from './actionButton.module.scss';
import EnquiryForm from '../enquiry/enquiryForm/enquiryForm';



export default function ActionBar() {
    const [active, setActive] = useState(false)
    const [showEnquiry, setShowEnquiry] = useState(false)
    useEffect(()=> {
        // add overflow hidden for body tag
        if(showEnquiry)
        document.body.style.overflow="hidden";
        else
        document.body.style.overflow="auto";
        document.body.style.overflowX="hidden";
    }, [showEnquiry])
    const handleActive = () => {
        setActive(!active)
    };
    const handleshowEnquiry = () => {
        setShowEnquiry(!showEnquiry)
    };
    return (
        <>
            <div className={styles.navigation}>
                {/* <div className={`${styles.menuToggle} ${active ? styles.active : ''}`} onClick={()=>handleActive()}> */}
                <div className={`${styles.menuToggle} ${active ? styles.active : ''}`} onClick={() => handleActive()}>
                    <i className="fa-regular fa-message"></i>
                    {/* <div className={styles.menu}> */}
                    <div className={styles.menu}>
                        <ul>
                            <li style={{ '--i': '0.1s' }} onClick={() => handleshowEnquiry()}><i className="fa-regular fa-comment" style={{ background: '#FFC800' }}></i></li>
                            <li style={{ '--i': '0.2s' }}><a href="https://api.whatsapp.com/send?phone=+91-9958299984&text=Hello........" target="_blank">
                                <i className="fa-brands fa-whatsapp" style={{ background: '#059405' }}></i>
                            </a></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* {showEnquiry && (
                <> */}
            <div className={`${styles.enquiryContainer} ${showEnquiry ? styles.active : ''}`}>
                
            </div>
            <div className={styles.enquiryForm}>
                    <div className={styles.enquiryFormHeader}>
                        <h3>Quick Enquiry</h3>
                        <i className='fa-regular fa-circle-xmark' onClick={() => handleshowEnquiry()}></i>
                    </div>
                    <div className={styles.enquiryFormBody}>
                        <EnquiryForm />
                    </div>
                </div>

            {/* </>
            )} */}
        </>
    )
}