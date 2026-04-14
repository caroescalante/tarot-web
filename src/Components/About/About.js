import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import './About.css';
import camion from '../../Assets/tarot1.jpeg';


const About = () => {
  return (
    <section className="about-section" id="about">
      <Container>
        <Row className="align-items-center">
          
          <Col md={6} className="about-text">
            <h1>Quien soy?</h1>
            <br></br>
            <p>
                Soy tarotista y guía espiritual con amplia experiencia en lecturas intuitivas y energéticas.
                A través de la tirada de cartas, te ayudo a encontrar claridad en momentos de duda, desbloquear 
                situaciones estancadas y conectar con tu propósito.
            </p>

            <p> Trabajo especialmente en temas de: </p>
            <p>    🔮 Lecturas profundas de amor, decisiones y destino </p>
            <p>    🔮 Limpiezas energéticas para soltar cargas, envidias y estancamientos  </p>
            <p>    🔮 Activación de tu energía para atraer lo que realmente merecés </p>


            <p>
                Cada sesión es un espacio seguro, confidencial y personalizado, donde vas a recibir mensajes claros, 
                guía concreta y herramientas para avanzar con seguridad.
            </p>
            <p>
                💫 Si sentís que algo no fluye, que estás repitiendo patrones o necesitás respuestas… este es tu momento.
            </p>


          </Col>

          <Col md={6} className="about-image">
            <img
              src={camion}
              alt=""
              className="img-fluid about-img"
            />
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default About;
