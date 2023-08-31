import React from "react";
import { Country, State } from "country-state-city";
import Popup from 'reactjs-popup';
import { Link } from "react-router-dom";

const Shipping = () => {
  return (
    <section className="shipping">
      <main>
        <h1>Détail de la livraison</h1>
        <form>
          <div>
            <label>Adresse</label>
            <input type="text" placeholder="Introduisez votre adresse" />
          </div>
          <div>
            <label>Ville</label>
            <input type="text" placeholder="Introduisze votre ville" />
          </div>
          <div>
              {/* Compelte the code for the COUNTRY DROPDOWN*/}
            <label>Pays</label>

            <select>
              <option value="">Pays</option>
              // Enter the code here for country dropdown
              {Country && Country.getAllCountries().map((i) => ( 
              <option value="{i.isoCode}" key="{i.isoCode}">
                {i.name}
              </option>
              ))}                
            </select>
          </div>
          
          <div>
              {/* Add the code for the STATE DROPDOWN*/}
              <label>Etat/Région</label>

              <select>
                <option value="">Etat/Région</option>                
                {State && State.getStatesOfCountry().map((i) =>( 
                <option value="{i.isoCode}" key="{i.isoCode}">
                  {i.name}
                </option>
                ))}                
              </select>
          </div>

          <div>
            <label>Code postal</label>
            <input type="number" placeholder="Introduisez votre code postal" />
          </div>
                  
          <div>
            <label>N° de téléphone</label>
            <input type="number" placeholder="Introduisez votre n° de téléphone" />
          </div>
          <Popup trigger=
                {<Link className="link" to="/myorders">Confirmer la commande</Link>}
                position="right center">
                <div style={{color:"red",position: 'absolute', top: '50%', right: '100%', transform: 'translateY(-50%)', 
                      backgroundColor: '#fff', padding: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'}}>
                      Votre commande est encours de traitement !</div>              
          </Popup>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
