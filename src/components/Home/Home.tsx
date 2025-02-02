import "./Home.css";
import CistBazen from "../../assets/CistBazen.jpeg";
import PrljavBazen from "../../assets/PrljavBazen.jpeg";
import PoolCleaning from "../../assets/swimming-cleaning.jpg";
import { useNavigate } from "react-router-dom";



export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page-container">
      <div className="home-description-left-wrapper">
        <h3>
          Želite kristalno čistu vodu u svom bazenu bez brige o održavanju?
        </h3>
        <p>Mi smo ovde da vam pomognemo!</p>
        <p>
          Naša stručna ekipa pruža usluge profesionalnog čišćenja i održavanja
          bazena kako biste uživali u savršenoj vodi tokom cele godine.
        </p>
      </div>
      <div className="home-description-right-wrapper">
        <div className="image-arrows-wrapper">
            <div className="image-before-wrapper">
              <img className="right-description-image" src={PrljavBazen} alt="dirty-pool-picture"/>
              <h3>Pre</h3>
            </div>
            <div className="image-before-wrapper">
              <img className="right-description-image" src={CistBazen} alt="clean-pool-picture"/>
              <h3>Posle</h3>
            </div>
        </div>
        <div className="right-desc-wrapper">
          <h3>Šta nudimo?</h3>
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
        <h3>Zašto odabrati nas?</h3>
        <p>• Iskusni i profesionalni tim.</p>
        <p>• Korišćenje kvalitetnih proizvoda i opreme.</p>
        <p>• Brza i pouzdana usluga prilagođena vašim potrebama.</p>
        <p>• Transparentne cene i bez skrivenih troškova.</p>
      </div>
      <div className="home-description-right-wrapper">
        <img className="help-description-image" src={PoolCleaning} alt="cleaning-tools-picture" />
        <div className="home-contact-wrapper">
          <h3 className="promo-text">Potrebna vam je stručna pomoć?</h3>
          <button onClick={() => navigate("/kontakt")}>Kontaktirajte nas</button>
        </div>
      </div>
      <div className="phrase-wrapper">
          <h2>Vaš bazen je naša briga!</h2>
      </div>
    </div>
  );
}
