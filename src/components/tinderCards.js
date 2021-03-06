import React, { useState }  from 'react';

// assets
import img1 from '../assets/img1.jpg'
import img4 from '../assets/img4.jpg'
import TinderCard from "react-tinder-card"

// styles
import "../style/tinderCards.css"


const TinderCards = () =>
{
    const [people, setPeople] = useState([
        {
            name: "Judith",
            cover: img1
        },
        {
            name: "Sasha",
            cover: img4
        }
    ]);


    return(
        <div className="tinderCards__cardContainer" >
            {people.map((person) => (
                <TinderCard className="swipe" key={person.name} preventSwipe={ [ 'up', 'down']} >
                    <div style={{backgroundImage: `url(${person.cover})` }} className="card">
                        <h1>{person.name}</h1>
                    </div>
                </TinderCard>
            ))}
        </div>
    )
}

export default TinderCards;