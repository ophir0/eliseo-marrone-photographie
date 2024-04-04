import React from "react";
import Accordion from "./Accordion";

const Infos = () => {
  return(
    <main>
      <div className="accordion">
      <Accordion
          title="BIOGRAPHIE"
          text="
          C’est probablement un appareil photo de la marque “Rolleiflex“, que j’ai eu quelques moments en main; pendant mon enfance, qui m’a émerveillé et m’a attiré vers ce médium.
          
          Déjà à l’époque, avec son viseur à orientation verticale, son miroir 45° périscopique et sa manivelle de recharge latérale, on pouvait voir le monde d’un angle différent.
          
          Je trouvais que cet appareil était bien plus distingué et élégant que tous les autres jouets…
          
          À la croisée des chemins de la vie, je m’inscris à l’Académie des Beaux-Arts de Liège, afin de trouver réponse à ma curiosité photographique. J’explore et développe certains sujets imposés par les cours et j’éprouve satisfaction en adoptant définitivement ce procédé avec passion."
        />
        <Accordion
          title="EXPO"
          text="- Lecture portfolio auprès de Mme Christine Ollier, historienne de l'art, et cofondatrice de la galerie Les Filles du Calvaire PARIS. ( mars 2018 )

          - Les Rencontres Photographique de Waremme ( expo collective février 2020)
          
          - Galerie Photo Ouverture, Liège  << L'Enfance aux petit bonheurs >> ( expo collective , avril 2023 )
          
          - Galerie 23, Liège   << Voyage Pictural >>  ( expo individuelle, avril 2024 )"
        />
        <Accordion
          title="MENTION LEGAL"
          text="Ce site et son contenu sont protégés par les lois sur la propriété intellectuelle. Toute reproduction est interdite."
        />
      </div>
      
    </main>
  )
};

export default Infos;