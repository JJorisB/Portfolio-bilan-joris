import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sophiebluel from "../../Assets/Projects/sophiebluel.png";
import booki from "../../Assets/Projects/booki.png";
import kasa from "../../Assets/Projects/kasa.png";
import ohmyfood from "../../Assets/Projects/ohmyfood.png";
import argentbank from "../../Assets/Projects/argentbank.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">Travaux </strong>récents
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques projets sur lesquels j’ai travaillé récemment.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kasa}
              isBlog={false}
              title="KASA"
              description="KASA est un site internet de location d'appartements entre particuliers.
              Ce projet m'a permis de développer mes compétences en Javascript(React), de me familiariser avec NodeJS et de peaufiner mes compétences en HTML et CSS."
              ghLink="https://github.com/JJorisB/project-kasa"
              demoLink="https://project-kasa-rho.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={booki}
              isBlog={false}
              title="Booki"
              description="Booki est un site internet qui permet aux utilisateurs de trouver des hébergements & des activités dans la ville de leur choix. Ce projet m'a permis de développer mes compétences en HTML et CSS."
              ghLink="https://github.com/JJorisB/BOOKI_Bilan_Joris"
              demoLink="https://jjorisb.github.io/BOOKI_Bilan_Joris/Bilan_Joris_Booki_03_2024/html.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ohmyfood}
              isBlog={false}
              title="OhMyFood"
              description="Oh My Food est un site 'mobile first' qui répertorie les menus de restaurants gastronomiques. Ce projet m'a appris à développer des animations qui fluidifie l'éxperience utilisateur et à adapter le site sous tous les formats et supports"
              ghLink="https://github.com/JJorisB/omf"
              demoLink="https://jjorisb.github.io/omf/OHMYFOOD_BILAN_Joris/html.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={argentbank}
              isBlog={false}
              title="Argent bank"
              description="Argent bank est une application bancaire créée à partir de Javascript, react et redux. Etant la première fois que j'utilise redux, ce projet m'a permis de m'accoutumer avec cette bibliothèque de gestion d'état"
              ghLink="https://github.com/JJorisB/Projet-appli-bancaire"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sophiebluel}
              isBlog={false}
              title="Portfolio Sophie BLUEL"
              description="Ce site est le portfolio de Sophie BLUEL, une architecte d'intérieur. Ce projet m'a fait faire mes premiers pas dans le monde de Javascript, un monde aussi vaste que fascinant."
              ghLink="https://github.com/JJorisB/Projet-Sophie-BLUEL"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
