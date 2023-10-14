'use client'
import { useState } from 'react'
import cstyle from './contactus.module.scss'

export default function contactus() {
    const [isLoading, setIsLoading] = useState(false);
    const [formErrors, setFormErrors] = useState({ fname: false, lname: false, email: false, message: false })
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        message: ''
    });
    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;
        setFormData({
            ...formData, // Keep existing form data
            [name]: value // Update form data for the input field that changed
        });
        setFormErrors({
            ...formErrors, // Keep existing form data
            [name]: false // Update form data for the input field that changed
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the form from being submitted

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        const errors = {};
        setIsLoading(true);
        if (formData.fname.length === 0) {
            errors.fname = true;
        }

        if (formData.lname.length === 0) {
            errors.lname = true;
        }

        if (formData.email.length === 0 || !emailPattern.test(formData.email)) {
            errors.email = true;
        }

        if (formData.message.length === 0) {
            errors.message = true;
        }

        setFormErrors({ ...formErrors, ...errors });

        console.log(formData);
        console.log(formErrors);
        if (Object.keys(errors).length === 0) {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/contact`, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify(formData)
                })
                if (res.ok) {
                    console.log('Successfully Saved Data...')
                    setFormErrors({ fname: false, lname: false, email: false, message: false });
                    setFormData({ fname: '', lname: '', email: '', phone: '', message: '' });

                } else {
                    console.log("Error occured while Saving....")
                    console.log(res)

                }
            } catch (error) {
                console.log(error)
            }
        }
        setIsLoading(false);
    };


    return (
        <>
            <div className={cstyle.container_contact100}>
                <div className={cstyle.wrap_contact100}>
                    <form className={`${cstyle.contact100_form} ${cstyle.validate_form}`} method='POST'>
                        <span className={cstyle.contact100_form_title}>
                            Send Us A Message
                        </span>

                        <div className={`${cstyle.wrap_input100} ${cstyle.rs1_wrap_input100} ${cstyle.validate_input} ${formErrors.fname ? cstyle.alert_validate : ''}`} data-validate="Type first name">
                            <input id="fname" className={cstyle.input100} type="text" name="fname" placeholder="First name" value={formData.fname} onChange={handleChange} />
                            <span className={cstyle.focus_input100}></span>
                        </div>
                        <div className={`${cstyle.wrap_input100} ${cstyle.rs1_wrap_input100} ${cstyle.validate_input} ${formErrors.lname ? cstyle.alert_validate : ''}`} data-validate="Type first name">
                            <input id="lname" className={cstyle.input100} type="text" name="lname" placeholder="Last name" value={formData.lname} onChange={handleChange} />
                            <span className={cstyle.focus_input100}></span>
                        </div>
                        <div className={`${cstyle.wrap_input100} ${cstyle.validate_input} ${formErrors.email ? cstyle.alert_validate : ''}`} data-validate="Valid email is required: ex@abc.xyz">
                            <input id="email" className={cstyle.input100} type="text" name="email" placeholder="Eg. example@email.com" value={formData.email} onChange={handleChange} />
                            <span className={cstyle.focus_input100}></span>
                        </div>
                        <div className={`${cstyle.wrap_input100} ${cstyle.validate_input}`}>
                            <input id="phone" className={cstyle.input100} type="number" name="phone" placeholder="Eg. +91 0000000000" value={formData.phone} onChange={handleChange} />
                            <span className={cstyle.focus_input100}></span>
                        </div>
                        <div className={`${cstyle.wrap_input100} ${cstyle.validate_input} ${formErrors.message ? cstyle.alert_validate : ''}`} data-validate="Message is required">
                            <textarea id="message" className={cstyle.input100} name="message" placeholder="Write us a message" value={formData.message} onChange={handleChange}></textarea>
                            <span className={cstyle.focus_input100}></span>
                        </div>
                        <div className={cstyle.container_contact100_form_btn}>
                            <button type="submit" className={cstyle.contact100_form_btn} onClick={handleSubmit} disabled={isLoading}>
                            {isLoading ? <i className="fa fa-refresh fa-spin"></i> : 'Send Message'}
                            </button>
                        </div>
                    </form>
                    <div className={cstyle.contact100_more} style={{ backgroundImage: "url('/images/contact_bg.jpg')", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <div className={cstyle.size1} style={{ display: 'flex', flexWrap: 'wrap', paddingBottom: '47px' }}>
                            <div className={cstyle.txt1} style={{ paddingRight: '25px' }}>
                                <span><i className="fa-solid fa-location-dot"></i></span>
                            </div>
                            <div className={cstyle.size2} style={{ display: 'flex', flexDirection: 'column' }}>
                                <span className={cstyle.txt1} style={{ paddingBottom: '47px' }}>
                                    Address
                                </span>
                                <span className={cstyle.txt2}>
                                    Ellahibagh, Hazratbal road, Srinagar-190020
                                </span>
                            </div>
                        </div>
                        <div className={cstyle.size1} style={{ display: 'flex', paddingBottom: '47px' }}>
                            <div className={cstyle.txt1} style={{ paddingRight: '25px' }}>
                                <span><i className="fa-solid fa-phone"></i></span>
                            </div>
                            <div className={cstyle.size2} style={{ display: 'flex', flexDirection: 'column' }}>
                                <span className={cstyle.txt1} style={{ paddingBottom: '20px' }}>
                                    Lets Talk
                                </span>
                                <span className={cstyle.txt3}>
                                    +91 - 9958299984/9958299985
                                </span>
                            </div>
                        </div>
                        <div className={cstyle.size1} style={{ display: 'flex', paddingBottom: '47px' }}>
                            <div className={cstyle.txt1} style={{ paddingRight: '25px' }}>
                                <span><i className="fa-regular fa-envelope"></i></span>
                            </div>
                            <div className={cstyle.size2} style={{ display: 'flex', flexDirection: 'column' }}>
                                <span className={cstyle.txt1} style={{ paddingBottom: '20px' }}>
                                    General Support
                                </span>
                                <span className={cstyle.txt3}>
                                    info@openskytrips.com
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>





    )
}