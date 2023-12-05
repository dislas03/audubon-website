import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

function Bird ({ birds, setBirds }) {
    const { name } = useParams()
    const birdName = name.replace(/-/g, ' ')

    const [findBird, setFindBird] = useState(null)

    useEffect(() => {
        const birdFilter = birds.filter(bird => bird.name === birdName)
        if (birdFilter.length > 0) {
            setFindBird(birdFilter[0])
        } else {
            setFindBird(null)
        }

    }, [birdName, birds]);

    return (
        <div>
          {findBird ? (
            <div className="bird-specific-container">
                <img src={findBird.image} alt={findBird.name} className="bird-image"/>
                <div className="bird-description">
                    <h1>{findBird.name}</h1>
                    <p className="genus"><i>({findBird.genus})</i></p>
                    <br></br>
                    <div className="conservation-container">
                         <p><b>Conservation status</b></p>
                        {findBird.conservationStatus ? (
                            <p className="cons-status">{findBird.conservationStatus}</p>
                            ) : (
                            <p> Bird currently does not have any conservation data to report. </p>
                        )}
                        <Link to={findBird.homepage} target="_blank" rel="noopener noreferrer">
                            <button className="read-more">READ MORE</button>
                        </Link>
                    </div>
                   
                </div>
            </div>
          ) : (
            <p> error </p>
          )}
        </div>
      );

}

export default Bird