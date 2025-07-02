import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LAISSEZ-MOI <span className="purple"> ME PRÉSENTER </span>
            </h1>
            <p className="home-about-body">
              Je suis tombé amoureux de la programmation et j’ai depuis appris
              de nombreuses choses...
              <br />
              <br />
              Je suis à l’aise avec les classiques comme
              <i>
                <b className="purple"> HTML, CSS, Javascript et React. </b>
              </i>
              <br />
              <br />
              Mon domaine d’intérêt est la construction de nouvelles&nbsp;
              <i>
                <b className="purple"> Technologies et produits Web </b>
              </i>
              <br />
              <br />
              Chaque fois que possible, j’applique également ma passion pour le
              développement de produits avec <b className="purple">
                Node.js
              </b>{" "}
              et
              <i>
                <b className="purple">
                  {" "}
                  la bibliothèque Javascript moderne et des frameworks
                </b>
              </i>
              &nbsp; comme
              <i>
                <b className="purple"> React.js et Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>RETROUVEZ-MOI</h1>
            <p>
              N'hesitez pas à <span className="purple"> me contacter </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/JJorisB"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/joris-bilan-2775a0281/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
