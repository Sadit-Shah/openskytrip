'use client'

import bookingCSS from '../contactus/contactus.module.scss'
import bookingStyle from './booking.module.scss'
import { useState } from 'react'
import Image from 'next/image';

export default function Booking() {
    const [isLoading, setIsLoading] = useState(false);
    const [formErrors, setFormErrors] = useState({ name: false, email: false, mobile: false, city: false, arrivalcity: false, dov: false, persons: false, days: false })
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        city: '',
        arrivalcity: '',
        dov: '',
        persons: '',
        days: '',
        remarks: ''
    });

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;
        if (name === 'dov') {
            const parts = value.split('-');
            if (parts.length === 3) {
                // Format the date as "dd-mm-yyyy"
                const formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
                setFormData({
                    ...formData,
                    [name]: formattedDate
                });
            }
        } else {
            setFormData({
                ...formData, // Keep existing form data
                [name]: value // Update form data for the input field that changed
            });
        }
        setFormErrors({
            ...formErrors, // Keep existing form data
            [name]: false // Update form data for the input field that changed
        });
    }
    const handleFocus = (e) => {
        setFormErrors({ ...formErrors, [e.target.name]: false })
    }
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the form from being submitted

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        const errors = {};
        setIsLoading(true);
        if (formData.name.length === 0) {
            errors.name = true;
        }
        if (formData.email.length === 0 || !emailPattern.test(formData.email)) {
            errors.email = true;
        }
        if (formData.mobile.length === 0) {
            errors.mobile = true;
        }
        if (formData.city.length === 0) {
            errors.city = true;
        }
        if (formData.arrivalcity.length === 0) {
            errors.arrivalcity = true;
        }
        if (formData.dov.length === 0) {
            errors.dov = true;
        }
        if (formData.persons.length === 0) {
            errors.persons = true;
        }
        if (formData.days.length === 0) {
            errors.days = true;
        }
        if (formData.days <= 0) {
            errors.days = true;
        }

        setFormErrors({ ...formErrors, ...errors });
        if (Object.keys(errors).length === 0) {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/booking`, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify(formData)
                })
                if (res.ok) {
                    console.log('Successfully Saved Data...')
                    setFormErrors({ name: false, email: false, mobile: false, city: false, arrivalcity: false, dov: false, persons: false, days: false });
                    setFormData({ name: '', email: '', mobile: '', city: '', arrivalcity: '', dov: '', persons: '', days: '', remarks: '' });

                } else {
                    console.log("Error occured while Saving....")

                }
            } catch (error) {
                console.log(error)
            }
        }
        setIsLoading(false);
    };
    return (
        <div className={bookingStyle.bookingContainer}>

            <div className={`${bookingCSS.container_contact100} ${bookingStyle.bookingRightPanel}`}>
                <form className={`${bookingCSS.contact100_form} ${bookingCSS.validate_form}`} style={{ width: '600px', marginTop: '0px' }} method='POST'>
                    <span className={bookingCSS.contact100_form_title}>
                        <h3>Book Your Trip</h3>
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', width: '100%' }}>
                        <div className={`${bookingCSS.wrap_input100} ${bookingCSS.rs1_wrap_input100} ${bookingCSS.validate_input} ${formErrors.name ? bookingCSS.alert_validate : ''}`} data-validate="Type Full Name">
                            <input id="name" className={bookingCSS.input100} type="text" name="name" placeholder="Full Name *" value={formData.name} onChange={handleChange} onFocus={handleFocus} />
                            <span className={bookingCSS.focus_input100}></span>
                        </div>
                        <div className={`${bookingCSS.wrap_input100} ${bookingCSS.rs1_wrap_input100} ${bookingCSS.validate_input} ${formErrors.email ? bookingCSS.alert_validate : ''}`} data-validate="Valid email is required: ex@abc.xyz">
                            <input id="email" className={bookingCSS.input100} type="text" name="email" placeholder="Eg. example@email.com *" value={formData.email} onChange={handleChange} onFocus={handleFocus} />
                            <span className={bookingCSS.focus_input100}></span>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', width: '100%' }}>
                        <div className={`${bookingCSS.wrap_input100} ${bookingCSS.rs1_wrap_input100} ${bookingCSS.validate_input} ${formErrors.mobile ? bookingCSS.alert_validate : ''}`} data-validate="Type Mobile Number">
                            <input id="mobile" className={bookingCSS.input100} type="text" name="mobile" placeholder="Contact Number *" value={formData.mobile} onChange={handleChange} onFocus={handleFocus} />
                            <span className={bookingCSS.focus_input100}></span>
                        </div>
                        <div className={`${bookingCSS.wrap_input100} ${bookingCSS.rs1_wrap_input100} ${bookingCSS.validate_input} ${formErrors.dov ? bookingCSS.alert_validate : ''}`} data-validate="Type Date of Visit">
                            <input id="mobile" className={bookingCSS.input100} type="text" name="dov" placeholder="Date of Visit *" value={formData.dov} onFocus={(e) => (e.target.type = 'date')} onBlur={(e) => (e.target.type = 'text')} onChange={handleChange} />
                            <span className={bookingCSS.focus_input100}></span>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', width: '100%' }}>
                        <div className={`${bookingCSS.wrap_input100} ${bookingCSS.rs1_wrap_input100} ${bookingCSS.validate_input} ${formErrors.city ? bookingCSS.alert_validate : ''}`} data-validate="Type City Name">
                            <input id="city" className={bookingCSS.input100} type="text" name="city" placeholder="Your City *" value={formData.city} onChange={handleChange} onFocus={handleFocus} />
                            <span className={bookingCSS.focus_input100}></span>
                        </div>
                        <div className={`${bookingCSS.wrap_input100} ${bookingCSS.rs1_wrap_input100} ${bookingCSS.validate_input} ${formErrors.arrivalcity ? bookingCSS.alert_validate : ''}`} data-validate="Type Arrival City">
                            <input id="arrivalcity" className={bookingCSS.input100} type="text" name="arrivalcity" placeholder="Arrival City *" value={formData.arrivalcity} onChange={handleChange} onFocus={handleFocus} />
                            <span className={bookingCSS.focus_input100}></span>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', width: '100%' }}>
                        <div className={`${bookingCSS.wrap_input100} ${bookingCSS.rs1_wrap_input100} ${bookingCSS.validate_input} ${formErrors.persons ? bookingCSS.alert_validate : ''}`} data-validate="Type No. of Persons">
                            <input id="persons" className={bookingCSS.input100} type="number" min="0" name="persons" placeholder="Number of Persons *" value={formData.persons} onChange={handleChange} onFocus={handleFocus} />
                            <span className={bookingCSS.focus_input100}></span>
                        </div>
                        <div className={`${bookingCSS.wrap_input100} ${bookingCSS.rs1_wrap_input100} ${bookingCSS.validate_input} ${formErrors.days ? bookingCSS.alert_validate : ''}`} data-validate="Type No. of Days">
                            <input id="days" className={bookingCSS.input100} type="number" min="0" name="days" placeholder="Number of Days *" value={formData.days} onChange={handleChange} onFocus={handleFocus} />
                            <span className={bookingCSS.focus_input100}></span>
                        </div>
                    </div>
                    <div className={`${bookingCSS.wrap_input100} ${bookingCSS.validate_input} ${formErrors.remarks ? bookingCSS.alert_validate : ''}`}>
                        <textarea id="remarks" className={bookingCSS.input100} name="remarks" placeholder="Would you like to provide more details" value={formData.remarks} onChange={handleChange} onFocus={handleFocus}></textarea>
                        <span className={bookingCSS.focus_input100}></span>
                    </div>
                    <div className={bookingCSS.container_contact100_form_btn}>
                        <button type="submit" className={bookingCSS.contact100_form_btn} onClick={handleSubmit} disabled={isLoading}>
                            {isLoading ? <i className="fa fa-refresh fa-spin"></i> : 'Book'}
                        </button>
                    </div>
                </form>
            </div>
            <div className={bookingStyle.bookingLeftPanel}>
                <Image src="/images/bgimg.jpg" width={600} height={400} alt='img' />
            </div>



        </div>
    )
}