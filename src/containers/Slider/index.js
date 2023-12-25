import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);
  const byDateDesc = data?.focus.sort((evtA, evtB) =>
  // Modification : Inversion de l'opérateur ternaire dans la comparaison des dates
  // Raison : Ajuster l'ordre de tri des événements de la plus récente à la plus ancienne.
  // Cette modification améliore la lisibilité des données pour l'utilisateur, en présentant d'abord les événements les plus récents.
    new Date(evtA.date) > new Date(evtB.date) ? 1 : -1
  );
  const nextCard = () => {
    setTimeout(
      // Modification : Ajout de '-1' à l'index du tableau
      // Raison : En JavaScript, les indices de tableau commencent à 0, pas à 1. 
      // Par conséquent, nous soustrayons 1 pour aligner l'indexation sur la convention standard de JavaScript.
      // Cela garantit que nous accédons à l'élément correct lors de l'indexation du tableau.
      () => setIndex(index < byDateDesc.length -1 ? index + 1 : 0),
      5000
    );
  };
  useEffect(() => {
    nextCard();
  });
  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
        <div>
          <div
          // Modification de la propriété 'key' dans le rendu des slides.
          // Raison : Assurer l'unicité de chaque slide dans la liste.
          // En attribuant une clé unique à chaque slide, React peut identifier efficacement et re-rendre les éléments spécifiques 
          // lors des changements de données, améliorant ainsi les performances de l'application.
            key={event.id}
            className={`SlideCard SlideCard--${
              index === idx ? "display" : "hide"
            }`}
          >
          {/* On ajoute un alt à l'image avec le titre de l'évènement */}
            <img src={event.cover} alt="{event.title}" />
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
                  key={`${event.id}`}
                  type="radio"
                  name="radio-button"
                  // Modification : 'idx' est remplacé par 'radioIdx'
                  // Raison : Pour garantir l'unicité de chaque bouton radio associé à un slide.
                  // En utilisant 'radioIdx' au lieu de 'idx', nous nous assurons que chaque bouton radio a un identifiant unique, 
                  // ce qui est essentiel pour le bon fonctionnement de la fonctionnalité de sélection de slide.
                  checked={index === radioIdx}
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
