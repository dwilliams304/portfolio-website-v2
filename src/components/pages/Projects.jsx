import "../../styles/section-styles/projects.css";
import CardCarousel from "../utility/CardCarousel";
import { useState, useEffect } from "react";
import { supabase } from "../../data/supabaseClient";

export default function Projects(){
    const [cardsData, setCardsData] = useState([]);

    useEffect(() => {
        getProjectData();
    }, [])


    async function getProjectData(){
        try{
            const { data, error } = await supabase //eslint-disable-line
                .from('projects')
                .select('*');
            if(data != null) setCardsData(data);
        }
        catch(error){
            alert(error.message);
        }
    }
    
    return(
        <section className="projects" id="projects">
            <h2>My <span className="highlight">Projects</span></h2>
            <div className="carousel-container">
                <CardCarousel cardsData={cardsData} />
            </div>
        </section>
    )
}