import React, { useState } from "react";
import "./Contact.css";
import { GiCrystalBall } from "react-icons/gi";

const Contact = () => {

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phone = "5491121777953";

    const text = `
✨ Nueva consulta ✨

👤 Nombre: ${form.nombre}
📧 Email: ${form.email}
🔮 Consulta: ${form.mensaje}
    `;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        <h2 className="contact-title">
          <GiCrystalBall /> Abrí tu portal
        </h2>

        <p className="contact-sub">
          Dejá tu mensaje y comenzá tu lectura
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Tu nombre..."
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
          />

          <input
            type="email"
            placeholder="Tu email..."
            name="email"
            value={form.email}
            onChange={handleChange}
          />

          <textarea
            placeholder="¿Qué querés saber?"
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
          />

          <button className="contact-btn">
            Activar energía ✨
          </button>

        </form>

      </div>
    </section>
  );
};

export default Contact;