import "../../styles/section-styles/projects.css";
import { useState, useEffect } from "react";
import { supabase } from "../../data/supabaseClient";

import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

import Card from '../common/Card';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
        tablet: {
        breakpoint: { max: 1024, min: 700 },
        items: 2,
    },
        mobile: {
        breakpoint: { max: 700, min: 0 },
        items: 1,
    }
}

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
            <h4>Scroll to see more --&gt;</h4>
            <Carousel 
                responsive={responsive}
                infinite={true}
                showDots={true}
                containerClass="carousel-container"
                dotListClass="carousel-dots"
            >
                {
                    cardsData.map(card => {
                        return <Card data={card} key={card.project_name}/>
                    })
                }
            </Carousel>
        </section>
    )
}
