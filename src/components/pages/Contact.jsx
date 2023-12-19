/* eslint-disable */
import "../../styles/section-styles/contact.css"
import { useState } from "react";

const initialValues = {
    form_name: "",
    form_email: "",
    form_phone: "",
    form_subject: "",
    form_additional: ""
}

export default function Contact(){
    const [formValues, setFormValues] = useState(initialValues);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
    }
    return(
        <section className="contact" id="contact">
            <h2>Let's <span className="highlight">Connect!</span></h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="form_name"
                    value={formValues.form_name}
                    onChange={handleChange}
                    placeholder="Full Name" />
                <input 
                    type="email" 
                    name="form_email"
                    value={formValues.form_email}
                    onChange={handleChange}
                    placeholder="Email Address" />
                <input 
                    type="tel" 
                    name="form_phone"
                    value={formValues.form_phone}
                    onChange={handleChange}
                    placeholder="Phone # - (123) 456-7890" />
                <input 
                    type="text" 
                    name="form_subject"
                    value={formValues.form_subject}
                    onChange={handleChange}
                    placeholder="Subject" />
                <textarea 
                    name="form_additional"
                    value={formValues.form_additional}
                    onChange={handleChange}
                    placeholder="Additional details" />
                <button type="submit">Send!</button>
            </form>
        </section>
    )
}