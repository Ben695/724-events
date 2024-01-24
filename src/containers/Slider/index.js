import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);
  const byDateDesc = data?.focus.sort((evtA, evtB) =>
      // Modifie l'opérateur logique pour trier les images dans le bon ordre
      // De la plus récente à la plus ancienne (ordre décroissant)
    new Date(evtA.date) > new Date(evtB.date) ? -1 : 1
  );
  const nextCard = () => {
    setTimeout(
        // Supprime l'élément "undefined" en ajoutant +1 à l'index
        // Ajoute "?" pour vérifier que byDateDesc existe
      () => setIndex(index + 1 < byDateDesc?.length ? index + 1 : 0),
      5000
    );
  };
  useEffect(() => {
    nextCard();
  });

  return (
    <div className="SlideCardList">   
      {/* Suppression des <></> qui encapsulent deux éléments différents */}
      {byDateDesc?.map((event, idx) => (
        // Refactorisation de la clé pour qu'elle soit unique pour chaque diapositive
        <div key={event.date}>
          <div            
            className={`SlideCard SlideCard--${
              index === idx ? "display" : "hide"
            }`}
          >
            {/* Modifier l'attribut "alt" pour qu'il corresponde aux informations de l'image */}
            <img src={event.cover} alt={event.title} />
            <div className="SlideCard__descriptionContainer">
              <div className="SlideCard__description">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div>{getMonth(new Date(event.date))}</div>
              </div>
            </div>
          </div>
          <div className="SlideCard__paginationContainer">
            <div className="SlideCard__pagination">
              {byDateDesc.map((_, radioIdx) => (
                <input
                  // Changement de la key pour qu'elle corresponde à la slide en cours
                  key={_.date}
                  type="radio"
                  name="radio-button"
                    // Remplacer idx par index pour indiquer sur quelle image nous sommes 
                  checked={index === radioIdx}
                  // Ajout de readOnly pour supprimer l'erreur de la console
                  readOnly
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;