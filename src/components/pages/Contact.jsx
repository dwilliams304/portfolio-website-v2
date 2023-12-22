/* eslint-disable */
import "../../styles/section-styles/contact.css"
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const initialValues = {
    user_name: "",
    user_email: "",
    user_phone: "",
    user_subject: "",
    message: ""
}

export default function Contact(){
    const [formValues, setFormValues] = useState(initialValues);
    const form = useRef();
    const recaptcha = useRef();

    const handleChange = e => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        emailjs.sendForm(import.meta.env.VITE_EMAIL_ID, import.meta.env.VITE_TEMPLATE, form.current, import.meta.env.VITE_PUBLIC_KEY)
            .then(res => {
                setFormValues(initialValues);
            })
            .catch(err => console.log(err.text));
    }
    return(
        <section className="contact" id="contact">
            <h2>Let's <span className="highlight">Connect!</span></h2>
            <form ref={form} onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="user_name"
                    value={formValues.user_name}
                    onChange={handleChange}
                    placeholder="Full Name" />
                <input 
                    type="email" 
                    name="user_email"
                    value={formValues.user_email}
                    onChange={handleChange}
                    placeholder="Email Address" />
                <input 
                    type="tel" 
                    name="user_phone"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    value={formValues.user_phone}
                    onChange={handleChange}
                    placeholder="Phone # - ex. 123-456-7890" />
                <input 
                    type="text" 
                    name="user_subject"
                    value={formValues.user_subject}
                    onChange={handleChange}
                    placeholder="Subject" />
                <textarea 
                    name="message"
                    value={formValues.message}
                    onChange={handleChange}
                    placeholder="Additional details" />
                <ReCAPTCHA ref={recaptcha} sitekey={import.meta.env.VITE_SITE_KEY} />
                <button type="submit">Send!</button>
            </form>
        </section>
    )
}