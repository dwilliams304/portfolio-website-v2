import "../../styles/section-styles/about.css";

export default function About(){
    return(
        <section className="about" id="about">
            <h2>About <span className="highlight">Me</span></h2>
            <div className="content-container">
                <div>
                    <img src="https://code.visualstudio.com/assets/docs/nodejs/reactjs/breakpoint.png" alt="some-img" />
                </div>
                <div>
                    <p>I am a Fullstack Web Developer with a strong foundation in customer 
                        service and a passion for creating user-centric web applications. Currently, I am 
                        proficient in using JavaScript, ReactJS, and C#. 
                        This website is designed to show off all projects I have worked on and is also to
                        help showcase some of my skills with designing, programming,  and anything else
                        related to web development!
                    </p>
                    <p> I absolutely love designing and developing things that people can interact with like websites,
                        games, software, anything of the like. If you ever want to collaborate, work with me, or just
                        in general contact me for any reason, feel free to fill out the contact form - I would love to chat!
                    </p>
                </div>
            </div>
        </section>
    )
}