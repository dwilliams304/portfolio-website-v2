/* eslint-disable */
import "../../styles/section-styles/home.css";
import { iconMap } from "../../data/iconMap";

export default function Home(){
    const lang = [
        "JavaScript",
        "TypeScript",
        "C#",
        "Python",
    ]

    const fe = [
        "React",
        "Redux",
        "CSS",
        "Tailwind",
    ]

    const be = [
        "Node",
        "Express",
        ".NET",
        "AWS",
    ]

    const db = [
        "MongoDB",
        "MySQL",
        "SQLite",
        "PostgreSQL",
    ]

    const other = [
        "Git",
        "Unity",
        "Unreal",
        "Godot"
    ]

    return(
        <section className="home" id="home">
            <h2>My name is <span className="highlight">Davis</span></h2>
            <div className="details">
                <div>
                    <h4>I'm a Fullstack Developer based out of Tucson, AZ.</h4>
                    <p>Here is some more information that I could put here.</p>
                </div>
                <img className="img-coin" src="https://media.licdn.com/dms/image/D5603AQHEj5uIBI3Qdg/profile-displayphoto-shrink_200_200/0/1693500191424?e=1707350400&v=beta&t=i3MSpn-IkIRI_msHHWiBAy8cagf6-05_d4_sZxbaBg0" alt="headshot"/>
            </div>
            <h2>My <span className="highlight">skills:</span></h2>
            <div className="tech">
                <div className="skills">
                    <h3><span className="highlight">Languages</span></h3>
                    <div>
                        {
                            lang.map((key, i) => {
                                return <span key={i}>{iconMap[key]}</span>
                            })
                        }
                    </div>
                </div>

                <div className="skills">
                    <h3><span className="highlight">Frontend</span></h3>
                    <div>
                        {
                            fe.map((key, i) => {
                                return <span key={i}>{iconMap[key]}</span>
                            })
                        }
                    </div>
                </div>

                <div className="skills">
                    <h3><span className="highlight">Backend</span></h3>
                    <div>
                        {
                            be.map((key, i) => {
                                return <span key={i}>{iconMap[key]}</span>
                            })
                        }
                    </div>
                </div>

                <div className="skills">
                    <h3><span className="highlight">Databases</span></h3>
                    <div>
                        {
                            db.map((key, i) => {
                                return <span key={i}>{iconMap[key]}</span>
                            })
                        }
                    </div>
                </div>

                <div className="skills">
                    <h3><span className="highlight">Other</span></h3>
                    <div>
                        {
                            other.map((key, i) => {
                                return <span key={i}>{iconMap[key]}</span>
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}