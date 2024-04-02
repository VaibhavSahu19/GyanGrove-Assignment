import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import styles from "./ShowCard.module.css"

function ShowCard({show}) {
    const {eventName, cityName, date, weather, distanceKm, imgUrl} = show;
    const options = { month: 'long', day: '2-digit', year: 'numeric' };
    const formattedDate = new Date(date).toLocaleDateString('en-US', options);
    const distance = Math.floor(distanceKm);
    function getImageIdFromGoogleDriveUrl(url) {
        const match = url.match(/\/d\/([^/]+)\//);
        if (match && match.length > 1) {
            return match[1];
        } else {
            console.error('Invalid Google Drive URL');
            return null;
        }
    }
    const imageId = getImageIdFromGoogleDriveUrl(imgUrl);
    const imageUrl = `https://drive.google.com/thumbnail?id=${imageId}&sz=w1000`;

    return (
        <section className={styles.cardContainer}>
            <div className={styles.imageContainer}>
                <img className={styles.cardImage} src={imageUrl} alt={`${eventName} image`} />
            </div>
            <div className={styles.description}>
                <div className={styles.upperDiv}>
                    <h5>{eventName}</h5>
                    <div>{formattedDate}</div>
                </div>
                <div className={styles.lowerDiv}>
                    <div className={styles.locationDiv}>
                        <img src={imgUrl} alt="" />
                        <FontAwesomeIcon icon={faLocationDot} />
                        <div>{cityName}</div>
                    </div>
                    <div className={styles.distanceDiv}>
                        <div>{weather} &deg; | </div>
                        <div>{distance} km</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShowCard