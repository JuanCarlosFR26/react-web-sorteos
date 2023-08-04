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
        <h2>¿Cómo funciona?</h2>
        <p>Primero tienes que registrarte en la web para poder participar en los sorteos. Hay sorteos semanales y mensuales. Todos los sorteos tienen un cupo maximo de personas que pueden participar. ¡Tienes que estar atento!</p>
      </article>
      <article>
        <h2>¿Cómo funciona?</h2>
        <p>Primero tienes que registrarte en la web para poder participar en los sorteos. Hay sorteos semanales y mensuales. Todos los sorteos tienen un cupo maximo de personas que pueden participar. ¡Tienes que estar atento!</p>
      </article>
      <article>
        <h2>¿Cómo funciona?</h2>
        <p>Primero tienes que registrarte en la web para poder participar en los sorteos. Hay sorteos semanales y mensuales. Todos los sorteos tienen un cupo maximo de personas que pueden participar. ¡Tienes que estar atento!</p>
      </article>
      <article>
        <h2>¿Cómo funciona?</h2>
        <p>Primero tienes que registrarte en la web para poder participar en los sorteos. Hay sorteos semanales y mensuales. Todos los sorteos tienen un cupo maximo de personas que pueden participar. ¡Tienes que estar atento!</p>
      </article>
      <article>
        <h2>¿Cómo funciona?</h2>
        <p>Primero tienes que registrarte en la web para poder participar en los sorteos. Hay sorteos semanales y mensuales. Todos los sorteos tienen un cupo maximo de personas que pueden participar. ¡Tienes que estar atento!</p>
      </article>
    </section>
  )
}

export default About