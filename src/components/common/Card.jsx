/* eslint-disable */

import { iconMap } from "../../data/iconMap"

export default function Card(props){ //eslint-disable-line
    const { data, position } = props;

    const openInNewWindow = (link) => {
        window.open(link);
    }
    return(
        <div className={`card ${position}`}>
            <div className="top-face">
                <div className="content">
                    <img className="thumbnail" src={data.project_img} alt="Project thumb"/>
                    <h4>{data.project_name}</h4>
                    <p>{data.project_description}</p>
                    <div className="btn-container">
                        {
                            data.links[0] ? 
                                <button className="btn-fancy" onClick={() => openInNewWindow(data.links[0])}>Demo</button>
                                :
                                <p className="no-link">(no demo, sorry)</p>

                        }
                        {
                            data.links[1] ? 
                                <button className="btn-fancy" onClick={() => openInNewWindow(data.links[1])}>GitHub</button>
                                :
                                <p className="no-link">(private github, sorry)</p>
                        }
                    </div>
                </div>
            </div>

            <div className="bottom-face">
                <div className="content">
                    <div className="tech">
                        {
                            data.tech_used.map((tech, idx) => {
                                return <span key={idx}>{iconMap[tech]}</span>
                            })
                        }
                    </div>
                    <p>Started: {data.date_started}</p>
                    <p>Status: {data.status}</p>
                </div>
            </div>
        </div>
    )
}