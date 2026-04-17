import React from 'react';
import { Container, Row } from "react-bootstrap";
import './Home.css'
import "@fontsource/cinzel-decorative";
import nube from '../../Assets/cloud.png'
// import logo from '../../logo2.png';


const Home = () => {
  return (
    <section>
      <Container fluid className="home-section px-0" id="home">
          <Row className="home-header m-0">

                  {/* <img src={logo} className="App-logo" alt="logo" /> */}

            <div className="clouds-container">
              <img src={nube} className="cloud cloud-left" alt="" />
              
              <img src={nube} className="cloud cloud-right" alt="" />
            </div>

            <br />
            <h1 className="heading">
              tarot
            </h1>
            
            {/* <h2 className="heading-name">
              Conecta con tu destino a través del tarot
            </h2> */}

            <h2 className="heading-name">
  <span className="line1">Conecta con tu destino</span>
  <span className="line2">a través del tarot</span>
</h2>


             <div className="btn-conoceme-container">
                <button 
                  className="btn-conoceme"
                    onClick={() => {
                        const phone = "5491121777953";
                        const message = "Hola! Quiero reservar un turno para una lectura";
                        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
                        window.open(url, "_blank");
                    }}
                >
                  Turnos
                </button>
            </div>

          </Row>
      </Container>
    </section>
  )
}

export default Home