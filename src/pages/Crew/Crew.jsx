import { useState } from "react";
import DouglasPng from "../../assets/images/crew/image-douglas-hurley.png";
import DouglasWebp from "../../assets/images/crew/image-douglas-hurley.webp";
import MarkPng from "../../assets/images/crew/image-mark-shuttleworth.png";
import MarkWebp from "../../assets/images/crew/image-mark-shuttleworth.webp";
import VictorPng from "../../assets/images/crew/image-victor-glover.png";
import VictorWebp from "../../assets/images/crew/image-victor-glover.webp";
import AnoushehPng from "../../assets/images/crew/image-anousheh-ansari.png";
import AnoushehWebp from "../../assets/images/crew/image-anousheh-ansari.webp";

import "../../sass/_Crew.scss";
const CrewData = [
  {
    name: "Douglas Hurley",
    images: {
      png: DouglasPng,
      webp: DouglasWebp,
    },
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    name: "Mark Shuttleworth",
    images: {
      png: MarkPng,
      webp: MarkWebp,
    },
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    name: "Victor Glover",
    images: {
      png: VictorPng,
      webp: VictorWebp,
    },
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    name: "Anousheh Ansari",
    images: {
      png: AnoushehPng,
      webp: AnoushehWebp,
    },
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];

export default function Crew() {
  const [selectedCrew, setSelectedCrew] = useState("Douglas Hurley");

  const handleMenuCrewClick = (name) => {
    setSelectedCrew(name);
  };

  const selectedDataCrew = CrewData.find((crew) => crew.name === selectedCrew);

  return (
    <main className="page crew">
      <div className="container">
        Crew
        <div className="title-page">
          <span>02</span>
          <h2>Meet your Crew</h2>
        </div>
        
        {selectedDataCrew && (
          <div className="crew-items">
            <picture className="images-crew">
              <source srcSet={selectedDataCrew.images.webp} type="image/webp" />
              <img
                src={selectedDataCrew.images.png}
                alt={selectedDataCrew.name}
              />
            </picture>

            <div className="text-crew">
              <ul className="menu-crew top">
                {CrewData.map((crew) => (
                  <li
                    key={crew.name}
                    onClick={() => handleMenuCrewClick(crew.name)}
                    className={crew.name === selectedCrew ? "active" : ""}
                  ></li>
                ))}
              </ul>
              <div className="text-box">
                <div className="id">
                  <span>{selectedDataCrew.role}</span>
                  <h3>{selectedDataCrew.name}</h3>
                </div>
                <p>{selectedDataCrew.bio}</p>
              </div>

              <ul className="menu-crew bottom">
                {CrewData.map((crew) => (
                  <li
                    key={crew.name}
                    onClick={() => handleMenuCrewClick(crew.name)}
                    className={crew.name === selectedCrew ? "active" : ""}
                  ></li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
