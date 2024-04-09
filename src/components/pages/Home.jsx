/* eslint-disable */
import "../../styles/section-styles/home.css";
import { iconMap } from "../../data/iconMap";
import Coin from "../../../src/assets/imgs/coin.jpg";

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
                    <h4>I'm a Fullstack Developer based out of Greenville, SC.</h4>
                    <p>Welcome to my portfolio! Here you can view some information about me, as well as information about some of the projects I've worked on.</p>
                    <div style={{display: "flex"}}>
                        <span onClick={() => window.open("https://github.com/dwilliams304")}>{iconMap["GitHub"]}</span>
                        <span onClick={() => window.open("https://www.linkedin.com/in/daviswilliams304/")}>{iconMap["LinkedIn"]}</span>
                    </div>
                </div>
                <img className="img-coin" src={Coin} alt="headshot"/>
            </div>
            <a href="#contact" className="btn-fancy" style={{textDecoration: "none", marginBottom: "2rem"}}>Want to connect?</a>
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