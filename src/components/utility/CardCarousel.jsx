import Card from "../common/Card"

export default function CardCarousel({ cardsData }){ //eslint-disable-line
    return(
        <div className="carousel">
            {
                cardsData.map((card, idx) => { //eslint-disable-line
                    return <Card key={idx} data={card} />
                })
            }
        </div>
    )
}