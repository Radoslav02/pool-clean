import "./Chemicals.css";
import ph from "../../assets/ph.jpeg";
import hlor from "../../assets/hlor.jpeg";
import floakulant from "../../assets/floakulant.jpeg";
import { useState } from "react";

const Chemicals = () => {
  const [selectedChemical, setSelectedChemical] = useState<string>("");

  const chemicalDescriptions: Record<string, JSX.Element> = {
    ph: (
      <div className="chemical-description-content">
        <h2>PH vrednost</h2>
        <p className="ph-desc">
          Na pH skali, koja ide od 0 do 14, vrednosti ispod 7 označavaju kiselu
          vodu,dok vrednosti iznad 7 označavaju alkalnu (baznu) vodu.
        </p>
        <p className="ph-value">Vrednost pH 7 je neutralna, što znači da nije ni kisela ni alkalna.</p>
        <p className="ph-or">
        <strong>Za bazen, idealna pH vrednost je između 7.2 i 7.6, što je optimalno
          za:</strong>
        </p>
        <p className="list">
          1. <strong>Efikasnost hemijskih tretmana</strong> – U tom opsegu, sredstva poput hlora
          deluje najučinkovitije u uništavanju bakterija i algi.
        </p>
        <p className="list">
          2. <strong>Komfor korisnika</strong> – Voda sa pH vrednostima u tom opsegu neće
          iritirati kožu i oči.
        </p>
        <p className="list">
          3. <strong>Očuvanje opreme</strong> – Previše kisela voda (pH ispod 7) može izazvati
          koroziju metalnih delova bazena, dok previše alkalna voda (pH iznad
          7.6) može dovesti do taloženja kalcijuma i stvaranja naslaga, što može
          oštetiti filtere i druge sisteme.
        </p>
      </div>
    ),
    chlorine: (
      <div className="chemical-description-content">
        <h2>Hlor</h2>
        <p>
          Hlor je važan u bazenima jer služi za dezinfekciju vode, uništavanje
          bakterija, virusa i drugih mikroorganizama koji mogu biti štetni za
          zdravlje.
        </p>
        <p className="chlorine-reasons"><strong>Evo ključnih razloga zašto je hlor neophodan:</strong></p>
        <p className="list">
        <strong>Dezinfekcija vode:</strong> Hlor ubija mikroorganizme koji mogu izazvati
          bolesti, poput E. coli, giardije i crevnih parazita.
        </p>
        <p className="list">
        <strong>Prevencija algi:</strong> Sprečava rast algi, koje mogu učiniti bazen klizavim,
          neprivlačnim i nehigijenskim.
        </p>
        <p className="list">
          <strong>Čista i bistra voda:</strong> Pomaže u održavanju čistoće i prozirnosti vode,
          uklanjajući organske materije i nečistoće.
        </p>
        <p className="list">
        <strong>Zaštita zdravlja kupača:</strong> Smanjuje rizik od infekcija kože, očiju i
          ušiju, kao i bolesti poput dijareje koje se mogu preneti vodom.
        </p>
        <p className="chlorine-end">
          Važno je održavati pravilnu koncentraciju hlora (1-3 ppm) kako bi voda
          bila sigurna, ali i da ne izaziva iritaciju kože i očiju.
        </p>
      </div>
    ),
    flocculant: (
      <div className="chemical-description-content">
        <h2>Flokulant</h2>
        <p className="floacc-about">
          <strong>Flokulant za bazene je kemijski preparat koji se koristi za
          poboljšanje kvaliteta vode u bazenima, posebno za čišćenje vode od
          sitnih čestica i zamućenja.</strong>
        </p>
        <p className="floacc-about">
          Flokulanti deluju tako da aglomeriraju (spajaju) male čestice u veće
          skupine, koje zatim mogu biti lakše uklonjene filtracijom ili
          ispuštanjem kroz dno bazena.
        </p>
        <p className="floacc-about"><strong>Korištenje flokulanta može pomoći u:</strong></p>
        <p className="list">
          Uklanjanju sitnih čestica koje ne mogu biti odstranjene običnim
          filterima,
        </p>
        <p className="list">Smanjenju zamućenja vode,</p>
        <p className="list">Poboljšanju učinkovitosti filtracijskog sistema.</p>
        <p className="floacc-about">
          Flokulanti dolaze u različitim oblicima, poput tekućine, praha ili
          tableta, a primena se obično vrši prema uputama proizvođača, kako bi
          se izbjegla predoziranja koja mogu negativno utjecati na ravnotežu
          vode i zdravlje korisnika bazena.
        </p>
      </div>
    ),
  };

  const handleChemicalClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setSelectedChemical(event.currentTarget.id);
  };

  return (
    <div className="chemicals-container">
      {!selectedChemical ? (
        <div className="chemical-wrapper">
          <div
            className="chemical-picture-wrapper"
            id="ph"
            onClick={handleChemicalClick}
          >
            <img className="chemical-page-picture" src={ph} alt="ph-picture" />
            <p>PH</p>
          </div>

          <div
            className="chemical-picture-wrapper"
            id="chlorine"
            onClick={handleChemicalClick}
          >
            <img
              className="chemical-page-picture"
              src={hlor}
              alt="chlorine-picture"
            />
            <p>Hlor</p>
          </div>

          <div
            className="chemical-picture-wrapper"
            id="flocculant"
            onClick={handleChemicalClick}
          >
            <img
              className="chemical-page-picture"
              src={floakulant}
              alt="flocculant-picture"
            />
            <p>Flokulant</p>
          </div>
        </div>
      ) : (
        <div className="chemical-description">
          {chemicalDescriptions[selectedChemical]}
          <button onClick={() => setSelectedChemical("")}>Nazad</button>
        </div>
      )}
    </div>
  );
};

export default Chemicals;
