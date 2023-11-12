import layoutcss from './layout.module.scss'
import Header from '../header/header'
import Footer from '../footer/footer'
import ActionBar from '../actionButton/actionButton'
import Enquiry from '../enquiry/enquiry'

export default function Layout({ children }) {
    return (
        <>
            <Header></Header>
            {children}
            <Footer></Footer>
            <div className={layoutcss.tabbedBarComponent}><ActionBar/></div>
            <div className={layoutcss.enquiryComponent}>
                <Enquiry />
            </div>
            <div className={layoutcss.whatsappComponent} style={{
                    position: 'fixed',
                    left: '5px',
                    bottom: '5px',
                    zIndex: 2000
            }}>
                <a href="https://api.whatsapp.com/send?phone=+91-9958299984&text=Hello........" target="_blank">
                    <i className="fab fa-whatsapp-square" style={{ color: 'limegreen',fontSize: '50px' }}></i>
                </a>
            </div>
        </>
    )
}