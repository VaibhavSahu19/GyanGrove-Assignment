import React, { useState, useEffect } from 'react'
import styles from "./Hero.module.css"
import ShowCard from './ShowCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

function Hero() {
    const [showsData, setShowsData] = useState(null);

    useEffect(() => {
        async function fetchData() {
        // const response = await fetch('https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco');
          try {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setShowsData(jsonData.events);
          } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
          }
        }
        fetchData();
      }, []);

    if(!showsData){
        return <h1>Loading</h1>
    }

    const recommendedShowsArray = showsData.map((show, index) => {
        return <div className="card">
            <ShowCard
                key = {index}
                show = {show}
            />
    </div>
    })
      
    return (
        <section className={styles.mainContainer}>
            <div className={styles.description}>
                <h1 className={styles.heading}>
                    Discover Exciting Events Happing Near You - Stay Tuned for Updates!
                </h1>
                <p className={styles.subHeading}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint voluptas hic voluptates obcaecati necessitatibus. Accusamus soluta facilis cupiditate ipsam sed. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, omnis.
                </p>
            </div>
            <div className={styles.showsContainer}>
                <div className={styles.headLine}>
                    <div className={styles.recommendedShows}>
                        <div>Recommended Shows </div>
                        <FontAwesomeIcon icon={faArrowRightLong} />
                    </div>
                    <a href="">See all</a>
                </div>
            </div>
            <div className={styles.list}>
                {recommendedShowsArray}
            </div>
        </section>
    )
}

export default Hero