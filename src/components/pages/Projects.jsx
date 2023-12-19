import "../../styles/section-styles/projects.css";

export default function Projects(){
    return(
        <section className="projects" id="projects">
            <h2>My <span className="highlight">Projects</span></h2>
            <div className="scrolling-container">
                <div className="project">
                    <h4>Neon Rain</h4>
                    <img src="" alt="Project thumb"/>
                    <div>
                        <p>Tech Used</p>
                        <span>JS</span>
                        <span>Unity</span>
                    </div>
                    <p>Neon Rain is a 2D top-down shooter game made within the Unity Engine.</p>
                    <button>GitHub</button>
                    <button>Demo</button>
                </div>

                <div className="project">
                    <h4>Neon Rain</h4>
                    <img src="" alt="Project thumb"/>
                    <div>
                        <p>Tech Used</p>
                        <span>JS</span>
                        <span>Unity</span>
                    </div>
                    <p>Neon Rain is a 2D top-down shooter game made within the Unity Engine.</p>
                    <button><span>GitHub</span></button>
                    <button><span>Demo</span></button>
                </div>

                
            </div>
        </section>
    )
}