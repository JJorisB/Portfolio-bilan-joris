import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Salut! Je m'appelle <span className="purple">Joris BILAN </span>
            et je viens de <span className="purple"> France, en Europe.</span>
            <br />
            Je suis actuellement en freelance mais je préfèrerais opter pour la
            sécurité d'un emploi stable au sein d'une{" "}
            <span className="purple">entreprise organisée.</span>
            <br />
            J'ai obtenu un diplôme de Menuiserie avant de finalement me
            réorienter dans ce qui était ma vraie passion : Le code. J'ai donc
            suivi une formation chez Openclassrooms en tant{" "}
            <span className="purple">qu'intégrateur web.</span>
            <br />
            La patience, la minutie et l'organisation ont donc toujours fait
            parti de mon quotidien!
            <br />
            <br />
            Mis à part le code, voici les autres choses qui m'animent :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Les jeux vidéos
            </li>
            <li className="about-activity">
              <ImPointRight /> La musique
            </li>
            <li className="about-activity">
              <ImPointRight /> La randonnée
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Il n'y a pas de problèmes, que des solutions!"{" "}
          </p>
          <footer className="blockquote-footer">JorisBilan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
