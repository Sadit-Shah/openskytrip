import layoutcss from './layout.module.scss'
import Header from '../header/header'
import Footer from '../footer/footer'
import Enquiry from '../enquiry/enquiry'
import TabbedBar from '../tabbedBar/tabbedBar'

export default function Layout({ children }) {
    return (
        <>
            <Header></Header>
            {children}
            <Footer></Footer>
            <div className={layoutcss.tabbedBarComponent}><TabbedBar/></div>
            <div className={layoutcss.enquiryComponent} style={{
                // position: 'fixed',
                // right: 20,
                // bottom: 0,
                // width: '300px',
                // backgroundColor: '#03a84e',
                // borderRadius: '5px 5px 0px 0px',
                // padding: '7px 15px 15px 15px',
                // display: 'flex',
                // alignItems: 'center',
                // justifyContent: 'space-between',
                // color: '#fff',
                // zIndex:2000
            }}>
                <Enquiry />
            </div>
            <div className={layoutcss.whatsappComponent} style={{
                    position: 'fixed',
                    left: '5px',
                    bottom: '5px',
                    zIndex: 2000
            }}>
                <a href="https://api.whatsapp.com/send?phone=+91-9906973143&text=Hello........" target="_blank">
                    <i className="fab fa-whatsapp-square" style={{ color: 'limegreen',fontSize: '50px' }}></i>
                </a>
            </div>
        </>
    )
}