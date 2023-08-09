import React, { useEffect, useState } from 'react'
import '../styles/about.css'

const About = () => {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(document.querySelectorAll('.article'))
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      articles.forEach(article => {
        const position = article.getBoundingClientReact().top;

        if(position < windowHeight / 1.5) {
          article.classList.add('show')
        } else {
          article.classList.remove('show')
        }
      })
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [articles])

  return (
    <section className='about'>
      <article>
        <h2>¿Quiénes somos?</h2>
        <p>Bienvenido a <i>Fortuna Fest</i>, el destino número uno para apasionados de los sorteos que buscan una oportunidad emocionante. Nuestra misión es brindarte oportunidades únicas de conseguir premios de alto valor a un precio muy bajo. Con un equipo apasionado y dedicado, estamos comprometidos a llevar la emoción de los sorteos a tu vida, haciendo tus sueños una realidad.</p>
      </article>
      <article>
        <h2>¿Cómo funciona?</h2>
        <p>Aquí en <i>Fortuna Fest</i>, creemos en hacer que tus sueños cobren vida. ¿Cómo? Es simple. Primero, regístrate en nuestra página para ser parte de nuestra comunidad exclusiva. Luego, prepárate para emocionantes sorteos semanales y mensuales, donde puedes ganar increíbles premios tecnológicos y experiencias de viaje inolvidables. Recuerda que hay un cupo limitado de personas para cada sorteo, ¡así que asegúrate de reservar tu lugar y aumentar tus posibilidades de ganar!</p>
      </article>
      <article>
        <h2>Envíos por correo</h2>
        <p>Tu satisfacción es nuestra prioridad, y eso incluye asegurarnos de que tus premios lleguen a tus manos de manera segura y puntual. Trabajamos con socios de envío confiables y utilizamos métodos de seguimiento para garantizar que cada producto y experiencia de viaje llegue a ti en perfectas condiciones. Puedes estar tranquilo sabiendo que cuidamos cada detalle para que disfrutes al máximo tus premios.</p>
      </article>
      <article>
        <h2>Método de Pago Seguro</h2>
        <p>En <i>Fortuna Fest</i>, la seguridad es primordial. Ofrecemos un método de pago seguro para todas tus transacciones, para que puedas participar en nuestros sorteos con total confianza. Utilizamos las últimas medidas de seguridad en línea para proteger tus datos financieros y personales. Puedes estar seguro de que tu información está en buenas manos mientras te sumerges en la emoción de nuestros emocionantes sorteos.</p>
      </article>
      <article>
        <h2>Cuéntanos tus dudas</h2>
        <p>¿Tienes alguna pregunta, sugerencia o simplemente quieres decir hola? Estamos aquí para ti. Nuestra sección de contacto está abierta para todas tus consultas y comentarios. Ya sea que necesites asistencia con tu cuenta, tengas preguntas sobre nuestros sorteos o simplemente quieras charlar, nuestro equipo de atención al cliente estará encantado de ayudarte en cada paso del camino. Tu satisfacción es nuestra mayor recompensa.</p>
      </article>
    </section>
  )
}

export default About