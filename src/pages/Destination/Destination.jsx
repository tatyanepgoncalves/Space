import { useState } from "react";
import "../../sass/_Destination.scss";

import moonPng from "../../assets/images/destination/image-moon.png";
import moonWebp from "../../assets/images/destination/image-moon.webp";
import marsPng from "../../assets/images/destination/image-mars.png";
import marsWebp from "../../assets/images/destination/image-mars.webp";
import europaPng from "../../assets/images/destination/image-europa.png";
import europaWebp from "../../assets/images/destination/image-europa.webp"
import titanPng from "../../assets/images/destination/image-titan.png";
import titanWebp from "../../assets/images/destination/image-titan.webp";

const DestinationData = [
  {
    name: "Moon",
    images: {
      png: moonPng,
      webp: moonWebp
    },
    description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days"
  },
  {
    name: "Mars",
    images: {
      png: marsPng,
      webp: marsWebp
    },
    description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months"
  },
  {
    name: "Europa",
    images: {
      png: europaPng,
      webp: europaWebp
    },
    description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years"
  },
  {
    name: "Titan",
    images: {
      png: titanPng,
      webp: titanWebp
    },
    description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years"
  }
];

export default function Destination() {
  const [selectedDestination, setSelectedDestination] = useState("Moon");

  const handleMenuClick = (name) => {
    setSelectedDestination(name);
  }

  const selectedData = DestinationData.find (
    (destination) => destination.name === selectedDestination
  );

  return (
    <main className="page destination">
      <div className="container">
        <div className="title-page">
          <span>01</span>
          <h2>Pick your destination</h2>
        </div>

        {selectedData && (
          <div className="destination-items">
            <picture className="images-destination">
              <source srcSet={selectedData.images.webp} type="image/webp" />
              <img src={selectedData.images.png} alt={selectedData.name} />
            </picture>

            <div className="right">
              <ul className="menu-destination">
                {DestinationData.map((destination) => (
                  <li key={destination.name} onClick={() => handleMenuClick(destination.name)} className={destination.name === selectedDestination ? "active" : ""}>
                    {destination.name}
                  </li>
                ))}
              </ul>
              <h3>{selectedData.name}</h3>
              <p>{selectedData.description}</p>
              <div className="line"></div>
              <div className="travel-distance">
                <div>
                  <span>Avg. distance</span>
                  <h4>{selectedData.distance}</h4>
                </div>
                <div>
                  <span>Est. travel time</span>
                  <h4>{selectedData.travel}</h4>
                </div>
              </div>

            </div>
          </div>
        )}
      </div>
    </main>
  )
}
