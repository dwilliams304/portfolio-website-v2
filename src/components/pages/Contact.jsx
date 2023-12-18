/* eslint-disable */
import "../../styles/section-styles/contact.css"

export default function Contact(){
    return(
        <section className="contact" id="contact">
            <h2>Let's <span className="highlight">Connect!</span></h2>
            <form>
                <input type="text" name="form_name" placeholder="Full Name" />
                <input type="email" name="form_email" placeholder="Email Address" />
                <input type="tel" name="form_phone" placeholder="Phone # - (123) 456-7890" />
                <input type="text" name="form_subject" placeholder="Subject" />
                <textarea placeholder="Additional details"></textarea>
                <button type="submit">Send!</button>
            </form>
        </section>
    )
}