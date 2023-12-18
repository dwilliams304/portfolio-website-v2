export default function Contact(){
    return(
        <section className="contact" id="contact">
            <h2>Contact</h2>
            <form>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="email" placeholder="Email Address" />
                <input type="text" placeholder="Phone #" />
                <input type="text" placeholder="Additional Details" />
                <button type="submit">Send!</button>
            </form>
        </section>
    )
}