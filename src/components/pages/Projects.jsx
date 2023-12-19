import "../../styles/section-styles/projects.css";
import CardCarousel from "../utility/CardCarousel";

import { data } from "../../data/DummyData";

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