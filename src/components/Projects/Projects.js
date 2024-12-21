import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sophiebluel from "../../Assets/Projects/sophiebluel.png";
import emotion from "../../Assets/Projects/emotion.png";
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
              description="x"
              ghLink="https://github.com/JJorisB/project-kasa"
              demoLink="https://project-kasa-rho.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={booki}
              isBlog={false}
              title="Booki"
              description="x"
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://jjorisb.github.io/BOOKI_Bilan_Joris/Bilan_Joris_Booki_03_2024/html.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ohmyfood}
              isBlog={false}
              title="OhMyFood"
              description="x"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://jjorisb.github.io/omf/OHMYFOOD_BILAN_Joris/html.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={argentbank}
              isBlog={false}
              title="Argent bank"
              description="x"
              ghLink="https://github.com/JJorisB/Projet-appli-bancaire"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sophiebluel}
              isBlog={false}
              title="Portfolio Sophie BLUEL"
              description="x"
              ghLink="https://github.com/JJorisB/Projet-Sophie-BLUEL"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
