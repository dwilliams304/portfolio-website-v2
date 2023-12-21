/* eslint-disable */

import { iconMap } from "../../data/iconMap"

export default function Card({ data, position }){ //eslint-disable-line
    return(
        <div className={`card ${position}`}>
            <div className="top-face">
                <div className="content">
                    <img className="thumbnail" src={data.img} alt="Project thumb"/>
                    <h4>{data.name}</h4>
                    <p>{data.description}</p>
                    <div className="btn-container">
                        <button className="btn-fancy">GitHub</button>
                        <button className="btn-fancy">Demo</button>
                    </div>
                </div>
            </div>

            <div className="bottom-face">
                <div className="content">
                    <div className="tech">
                        {
                            data.tech.map((tech, idx) => {
                                return <span key={idx}>{iconMap[tech]}</span>
                            })
                        }
                    </div>
                    <p>Started: 12/20/2023</p>
                    <p>Status: Ongoing</p>
                </div>
            </div>
        </div>
    )
}