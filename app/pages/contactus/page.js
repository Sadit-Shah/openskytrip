import cstyle from './contactus.module.scss'
import contactuscss from './contactus.module.scss';
import contactcss from './contactus.module.scss'
export default function contactus() {
    return (
        <>

        <div className={contactcss.contactcontainer}>
            <div className={contactcss.contactform}>
                <div className={contactcss.heading}>
                    <h3> Our support team will get back to you ASAP via email. </h3>
                </div>
                <div className={contactcss.details}>
                    <div className={contactcss.fname}>
                    <label>First Name</label>
                    <input type='text' placeholder='Enter Your First Name'></input>
                    </div>

                    <div className={contactcss.fname}>
                    <label>Middle Name</label>
                    <input type='text' placeholder='Enter Your Middle Name'></input>
                    </div>

                    <div className={contactcss.fname}>
                    <label>Last Name</label>
                    <input type='text' placeholder='Enter Your Last Name'></input>
                    </div>


            </div>



        </div >

        </div>
      </>



       
      
    )
}