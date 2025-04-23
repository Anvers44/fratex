import React from "react";
import "./Main.css";
import pic1 from "../../assets/bed1.png";

function Main() {
  return (
    <div>
      <div className="intro">
        <div className="left-card">
          <h2>Bienvenue chez FRATEX,</h2>
          <h3>
            Des textiles qui incarnent le savoir-vivre,
            <br />
            Fabriqués en Algérie.
          </h3>
          <p>
            Nos produits s'adressent aux professionnels <br /> exigents
            cherchant à allier confort et élégance.
          </p>

          <ul>
            <h3>Nous accompagnons:</h3>
            <li>Hôtel : Pour une expértise mémorable.</li>
            <li>Restaurent : Pour des tables raffinées.</li>
            <li>Hôpiteaux et spas : Pour un confort optimal.</li>
            <li>Salles des fêtes : Pour des événements stylés.</li>
          </ul>
        </div>
        <div className="right-card">
          <img className="pic1" src={pic1} alt="bed" />
        </div>
      </div>
    </div>
  );
}

export default Main;
