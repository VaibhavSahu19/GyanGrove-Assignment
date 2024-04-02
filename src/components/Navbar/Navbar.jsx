import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass, faHeart, faLocationDot, faUser } from '@fortawesome/free-solid-svg-icons'
import styles from "./Navbar.module.css"


function Navbar() {
  const [selectedLocation, setSelectedLocation] = useState('Mumbai, India');
  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const citiesInIndia = [
    "New Delhi, India",
    "Mumbai, India",
    "Bangalore, India",
    "Chennai, India",
    "Kolkata, India",
    "Hyderabad, India",
    "Pune, India",
    "Ahmedabad, India",
    "Jaipur, India",
    "Lucknow, India"
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.upperNav}>
        <div className={styles.leftUpperNav}>
          <h3 className={styles.title}>BookUsNow</h3>
          <a className={styles.category}>
            <div>
              <FontAwesomeIcon icon={faBars} />
            </div>
            <div>
              Categories
            </div>
          </a>
        </div>
        <div className={styles.rightUpperNav}>
          <div className={styles.searchContainer}>
            <input className={styles.searchBar} type="text" placeholder='DJI phantom'/>
            <div className={styles.searchIcon}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
          </div>
          <div className={styles.favContainer}>
            <div className={styles.favIcon}>
              <FontAwesomeIcon icon={faHeart} />
            </div>
            <div className={styles.favHeading}>Favorites</div>
          </div>
          <div className={styles.signInContainer}>
            <button className={styles.signInBtn}>Sign in</button>
            <FontAwesomeIcon className={styles.userIcon} icon={faUser} />
          </div>
        </div>
      </div>
      <div className={styles.lowerNav}>
        <div className={styles.location}>
          <div className={styles.locationIcon}>
            <FontAwesomeIcon icon={faLocationDot} />
          </div>
          <select className={styles.locationDropDown} id="locations" value={selectedLocation} onChange={handleLocationChange}>
            <option value="">Mumbai, India</option>
            {citiesInIndia.map((city, index) => (
              <option key={index} value={city}>{city}</option>
            ))}
          </select>
        </div>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>Live Shows</li>
          <li className={styles.menuItem}>Streams</li>
          <li className={styles.menuItem}>Movies</li>
          <li className={styles.menuItem}>Plays</li>
          <li className={styles.menuItem}>Events</li>
          <li className={styles.menuItem}>Sports</li>
          <li className={styles.menuItem}>Activities</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar