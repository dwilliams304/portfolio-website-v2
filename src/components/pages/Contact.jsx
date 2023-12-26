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
    const [charCount, setCharCount] = useState(0);
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const form = useRef();
    const recaptcha = useRef();

    const handleChange = e => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        })
        if(name === "message"){
            setCharCount(value.length);
        }
    }

    const checkValidForm = () => {
        const formErrors = {};
        if(formValues.user_name.trim().length < 4 ||
        formValues.user_name.trim().length > 32){
            formErrors.user_name = "Name must be between 4 - 32 characters.";
        }

        if(formValues.user_email.trim().length === 0){
            formErrors.user_email = "Email is required";
        }

        if(formValues.user_phone.trim().length < 10){
            formErrors.user_phone = "Phone # is required.";
        }

        if(formValues.user_subject.trim().length < 4 ||
        formValues.user_subject.trim().length > 32){
            formErrors.user_subject = "Subject must be between 4 - 32 characters.";
        }

        if(formValues.message.trim().length < 10){
            formErrors.message = "Please provide a reason for your message. (10 chars min)";
        }

        if(!recaptcha.current.getValue()){
            formErrors.captcha = "reCAPTCHA is required.";
        }
        
        setErrors(formErrors);
        return Object.keys(formErrors).length === 0 ? true : false;

    }

    const handleSubmit = e => {
        e.preventDefault();
        setSuccess(false);
        if(checkValidForm()){
            emailjs.sendForm(import.meta.env.VITE_EMAIL_ID, import.meta.env.VITE_TEMPLATE, form.current, import.meta.env.VITE_PUBLIC_KEY)
                .then(res => {
                    setFormValues(initialValues);
                    setErrors({});
                    setSuccess(true);
                })
                .catch(err => console.log(err.text));
        }
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
                    placeholder="Full Name"
                />
                {errors.user_name && <span className="error">{errors.user_name}</span>}
                <input 
                    type="email" 
                    name="user_email"
                    value={formValues.user_email}
                    onChange={handleChange}
                    placeholder="Email Address" 
                />
                {errors.user_email && <span className="error">{errors.user_email}</span>}
                <input 
                    type="tel" 
                    name="user_phone"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    value={formValues.user_phone}
                    onChange={handleChange}
                    placeholder="Phone # - ex. 123-456-7890" 
                />
                {errors.user_phone && <span className="error">{errors.user_phone}</span>}
                <input 
                    type="text" 
                    name="user_subject"
                    value={formValues.user_subject}
                    onChange={handleChange}
                    placeholder="Subject" 
                />
                {errors.user_subject && <span className="error">{errors.user_subject}</span>}
                <textarea 
                    name="message"
                    value={formValues.message}
                    onChange={handleChange}
                    placeholder="Additional details" 
                    maxLength={500}
                />
                {errors.message && <span className="error">{errors.message}</span>}
                <span className="char-count">{charCount}/500</span>

                <ReCAPTCHA ref={recaptcha} sitekey={import.meta.env.VITE_SITE_KEY} className="captcha" />
                {errors.captcha && <span className="error">{errors.captcha}</span>}

                <button type="submit">Send!</button>
                {success && <span className="success">Message successfully sent!</span>}
            </form>
        </section>
    )
}