import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="cercles">
        <div className="cercle">
          <div className="oui">
            <p>
              Bonjour à vous! <br /> Bienvenue sur Valkyry ! <br /> <br /> Ce
              monde parallèle où découvertes et plaisirs de la musque ne font
              qu’un. Ici, vous trouverez 5 grands types de musiques choisi par
              chacun des membres l’ayant construit : Amandine, Sidney, Xavier,
              Benjamin, et Édouard. Ces différents types seront mis à jour
              quotidiennement et d’autres viendront s’ajouter au fur et à
              mesure. <br /> <br /> Enjoy, and let’s the music carry you !{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="line_2">
        <h1 className="title_home">HOME</h1>
      </div>
      <div
        className="container_cercle"
        style={{ display: "flex", flexDirection: "row-reverse" }}
      >
        <div className="cercle_2">
          <div className="oui_2">
            <h4 className="home_text">
              Valkyry se compose donc de 5 grandes catégories de musiques :
            </h4>
            <div className="list_music">
              <ul>
                <li>Classical</li>
                <li>Eighties</li>
                <li>Electro</li>
                <li>Trip</li>
                <li>Techno</li>
              </ul>
            </div>
            <p>
              Laissez vous porter par le style de musique qui vous intéresse et
              que votre moment soit agréable !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
