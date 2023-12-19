/* eslint-disable */

export default function Card({ data }){ //eslint-disable-line
    return(
        <div className="card">
            <h4>{data.name}</h4>
            <img src={data.img} alt="Project thumb"/>
            <div>
                <p>Tech Used</p>
                {
                    data.tech.map((tech, idx) => {
                        return <span key={idx}>{tech}</span>
                    })
                }
            </div>
            <p>{data.description}</p>
            <button>GitHub</button>
            <button>Demo</button>
        </div>
    )
}