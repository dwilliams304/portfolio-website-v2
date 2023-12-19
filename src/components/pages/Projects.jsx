import "../../styles/section-styles/projects.css";
import CardCarousel from "../utility/CardCarousel";

const data = [
    {
        name: "Test Project",
        img: "",
        tech: ["JS, Unity, Node, Redux, React"],
        description: "This is a test description for a test project.",
        links: ["", ""]
    },
    {
        name: "Test Project 2",
        img: "",
        tech: ["JS, Unity, Node, Redux, React"],
        description: "This is a test description for a test project.",
        links: ["", ""]
    },{
        name: "Test Project 3",
        img: "",
        tech: ["JS, Unity, Node, Redux, React"],
        description: "This is a test description for a test project.",
        links: ["", ""]
    },
]

export default function Projects(){
    return(
        <section className="projects" id="projects">
            <h2>My <span className="highlight">Projects</span></h2>
            <div className="scrolling-container">
                <CardCarousel cardsData={data} />
            </div>
        </section>
    )
}