import cstyle from './contactus.module.scss'

export default function contactus() {
    return (
        <>
            <div className={cstyle.container_contact100}>
                <div className={cstyle.wrap_contact100}>
                    <form className={`${cstyle.contact100_form} ${cstyle.validate_form}`}>
                        <span className={cstyle.contact100_form_title}>
                            Send Us A Message
                        </span>
 
                        <div className={`${cstyle.wrap_input100} ${cstyle.rs1_wrap_input100} ${cstyle.validate_input}`} data-validate="Type first name">
                            <input id="first-name" className={cstyle.input100} type="text" name="first-name" placeholder="First name"/>
                                <span className={cstyle.focus_input100}></span>
                        </div>
                        <div className={`${cstyle.wrap_input100} ${cstyle.rs1_wrap_input100} ${cstyle.validate_input}`} data-validate="Type first name">
                            <input id="last-name" className={cstyle.input100} type="text" name="last-name" placeholder="Last name"/>
                                <span className={cstyle.focus_input100}></span>
                        </div>
                        <div className={`${cstyle.wrap_input100} ${cstyle.validate_input}`} data-validate="Valid email is required: ex@abc.xyz">
                            <input id="email" className={cstyle.input100} type="text" name="email" placeholder="Eg. example@email.com"/>
                                <span className={cstyle.focus_input100}></span>
                        </div>
                        <div className={`${cstyle.wrap_input100} ${cstyle.validate_input}`}>
                            <input id="phone" className={cstyle.input100} type="text" name="phone" placeholder="Eg. +91 0000000000"/>
                                <span className={cstyle.focus_input100}></span>
                        </div>
                        <div className={`${cstyle.wrap_input100} ${cstyle.validate_input}`} data-validate="Message is required">
                            <textarea id="message" className={cstyle.input100} name="message" placeholder="Write us a message"></textarea>
                            <span className={cstyle.focus_input100}></span>
                        </div>
                        <div className={cstyle.container_contact100_form_btn}>
                            <button className={cstyle.contact100_form_btn}>
                                Send Message
                            </button>
                        </div> 
                    </form>
                    <div className={cstyle.contact100_more} style={{backgroundImage: "url('/images/contact_bg.jpg')", display:'flex', flexDirection:'column', alignItems:'center',justifyContent:'center'}}>
                        <div className={cstyle.size1} style={{display:'flex',flexWrap:'wrap', paddingBottom:'47px'}}>
                            <div className={cstyle.txt1} style={{paddingRight:'25px'}}>
                                <span><i class="fa-solid fa-location-dot"></i></span>
                            </div>
                            <div className={cstyle.size2} style={{display:'flex', flexDirection:'column'}}>
                                <span className={cstyle.txt1} style={{paddingBottom:'47px'}}>
                                    Address
                                </span>
                                <span className={cstyle.txt2}>
                                    Mada Center 8th floor, 379 Hudson St, New York, NY 10018 US
                                </span>
                            </div>
                        </div>
                        <div className={cstyle.size1} style={{display:'flex',paddingBottom:'47px'}}>
                            <div className={cstyle.txt1} style={{paddingRight:'25px'}}>
                                <span><i class="fa-solid fa-phone"></i></span>
                            </div>
                            <div className={cstyle.size2} style={{display:'flex', flexDirection:'column'}}>
                                <span className={cstyle.txt1} style={{paddingBottom:'20px'}}>
                                    Lets Talk
                                </span>
                                <span className={cstyle.txt3}>
                                    +1 800 1236879
                                </span>
                            </div>
                        </div>
                        <div className={cstyle.size1} style={{display:'flex',paddingBottom:'47px'}}>
                            <div className={cstyle.txt1} style={{paddingRight:'25px'}}>
                                <span><i class="fa-regular fa-envelope"></i></span>
                            </div>
                            <div className={cstyle.size2} style={{display:'flex', flexDirection:'column'}}>
                                <span className={cstyle.txt1} style={{paddingBottom:'20px'}}>
                                    General Support
                                </span>
                                <span className={cstyle.txt3}>
                                    contact@example.com
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>





    )
}