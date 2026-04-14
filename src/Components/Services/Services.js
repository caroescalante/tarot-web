import React from 'react';
import './Services.css';
import amor from "../../Assets/amor.jpeg";
import abundancia from "../../Assets/abundancia.jpeg";
import abre_caminos from "../../Assets/abre caminos.jpeg";
import salud from "../../Assets/salud.jpeg";
import { Col, Row, Container } from "react-bootstrap";
import ProjectCard from "./ProjectCards.js";

const Services = () => {
    return (
        <section className="services-section" id="services">
            <br /><br /><br />
            <h1 className='title'> Lista de Servicios ...</h1>

            <div>
                <Container>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col xs={12} sm={6} md={3}  className="project-card">
                        <ProjectCard
                        imgPath={amor}
                        isBlog={false}
                        isGh={false}
                        title="Lectura de Amor"
                        description=""
                        precioServicio="50usd"      
                        nroTelefono="https://wa.me/5491121777953"      
                        />
                    </Col>

                    <Col xs={12} sm={6} md={3}  className="project-card">
                        <ProjectCard
                        imgPath={abre_caminos}
                        isBlog={false}
                        isGh={false}
                        title="Ritual Abre Caminos"
                        description=""
                        precioServicio="75usd"
                        nroTelefono="https://wa.me/5491121777953"
                        />
                    </Col>

                    <Col xs={12} sm={6} md={3}  className="project-card">
                        <ProjectCard
                        imgPath={abundancia}
                        isBlog={false}
                        isGh={false}
                        title="Lectura de Abundancia"
                        description=""
                        precioServicio="40usd"
                        nroTelefono="https://wa.me/5491121777953"              
                        />
                    </Col>


                    <Col xs={12} sm={6} md={3} className="project-card">
                        <ProjectCard 
                        imgPath={salud}
                        isBlog={false}
                        isGh={false}
                        title="Ritual de Salud"
                        description=""
                        precioServicio="70usd"
                        nroTelefono="https://wa.me/5491121777953"
                        />
                    </Col>

                    
                </Row>
                </Container> 
            </div>
        </section>

    );
}

export default Services;