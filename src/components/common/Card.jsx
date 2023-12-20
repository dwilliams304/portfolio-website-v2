/* eslint-disable */

export default function Card({ data, position }){ //eslint-disable-line
    return(
        <div className={`card ${position}`}>
            <img src={data.img} alt="Project thumb"/>
            <h4>{data.name}</h4>
            <div>
                <p>Tech Used</p>
                {
                    data.tech.map((tech, idx) => {
                        return <span key={idx}>{tech}</span>
                    })
                }
            </div>
            <p>{data.description}</p>
            <button className="btn-fancy">GitHub</button>
            <button className="btn-fancy">Demo</button>
        </div>
    )
}