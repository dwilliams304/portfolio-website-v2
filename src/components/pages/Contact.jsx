export default function Contact(){
    return(
        <section className="contact">
            <h2>Contact</h2>
            <form>
                <input type="text" placeholder="Enter name..." />
                <input type="email" placeholder="Enter email..." />
                <input type="text" placeholder="Enter additional details..." />
                <button type="submit">Send!</button>
            </form>
        </section>
    )
}