import React, { useEffect, useState } from 'react'
import styles from "./Upcoming.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import UpcomingShowCard from './UpcomingShowCard'

function Upcoming() {
    const [upcomingData, setUpcomingData] = useState(null);

    useEffect(() => {
        async function fetchData() {
        const response = await fetch('https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=1&type=upcoming');
          try {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setUpcomingData(jsonData.events);
          } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
          }
        }
        fetchData();
      }, []);

    if(!upcomingData){
        return <h1>Loading</h1>
    }

    const upcomingShowsArray = upcomingData.map((show, index) => {
        return <div className="card">
            <UpcomingShowCard
                key = {index}
                show = {show}
            />
    </div>
    })

    return (
        <section className={styles.mainContainer}>
            <div className={styles.headLine}>
                <div className={styles.heading}>Upcoming Events</div>
                <FontAwesomeIcon icon={ faArrowRightLong } />
            </div>
            <div className={styles.list}>

            </div>
        </section>
    )
}

export default Upcoming