import "./Home.css";
import CistBazen from "../../assets/CistBazen.jpeg";
import PrljavBazen from "../../assets/PrljavBazen.jpeg";
import { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Home() {
  const [afterClicked, setAfterClicked] = useState<boolean>(false);

  function handleAfterClicked() {
    const clicked = afterClicked;
    setAfterClicked(!clicked);
  }

  return (
    <div className="home-page-container">
      <div className="home-description-left-wrapper">
        <p>
          <strong>
            Želite kristalno čistu vodu u svom bazenu bez brige o održavanju?
          </strong>
        </p>
        <p>Mi smo ovde da vam pomognemo!</p>
        <p>
          Naša stručna ekipa pruža usluge profesionalnog čišćenja i održavanja
          bazena kako biste uživali u savršenoj vodi tokom cele godine.
        </p>
      </div>
      <div className="home-description-right-wrapper">
        <div className="image-arrows-wrapper">
          <ArrowBackIosNewIcon
            className="arrows"
          
            onClick={handleAfterClicked}
          />
          {!afterClicked ? (
            <div className="image-before-wrapper">
              <img className="right-description-image" src={PrljavBazen} />
              <label>Posle</label>
            </div>
          ) : (
            <div className="image-before-wrapper">
              <img className="right-description-image" src={CistBazen} />
              <label>Pre</label>
            </div>
          )}
          <ArrowForwardIosIcon
            className="arrows"
            
            onClick={handleAfterClicked}
          />
        </div>
        <div className="right-desc-wrapper">
          <p>
            <strong>Šta nudimo?</strong>
          </p>
          <p>
            • Kompletno čišćenje bazena – od uklanjanja nečistoća do tretmana
            vode.
          </p>
          <p>
            • Održavanje kvaliteta vode – merenje i balansiranje pH vrednosti,
            hlora i drugih hemikalija
          </p>
          <p>• Popravke i zamena opreme – filteri, pumpe, i ostala oprema.</p>
          <p>
            • Sezonska priprema bazena – priprema za letnju sezonu ili zimsko
            konzerviranje.
          </p>
        </div>
      </div>
      <div className="home-description-left-wrapper">
        <p>
          <strong>Zašto odabrati nas?</strong>
        </p>
        <p>• Iskusni i profesionalni tim.</p>
        <p>• Korišćenje kvalitetnih proizvoda i opreme.</p>
        <p>• Brza i pouzdana usluga prilagođena vašim potrebama.</p>
        <p>• Transparentne cene i bez skrivenih troškova.</p>
      </div>
    </div>
  );
}
