import React, { useState, useEffect }  from 'react';

// assets
import TinderCard from 'react-tinder-card'
import database from '../assets/firebase'

// styles
import "../style/tinderCards.css"


const TinderCards = () =>
{
    const [people, setPeople] = useState([]);

    useEffect(() => {
        const unsubscribe =
        database.collection('people').onSnapshot(snapshot => (
            setPeople(snapshot.docs.map((doc) => doc.data())
        )))

        return () => {
            unsubscribe();
        }

    }, [])

    return(
        <div className="mainContainter" >
            <div className="tinderCards__cardContainer" >
                {people.map((person) => (
                    <TinderCard className="swipe" key={person.name} preventSwipe={ [ 'up', 'down']} >
                        <div style={{backgroundImage: `url(${person.url})` }} className="card">
                            <h1>{person.name}</h1>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards;