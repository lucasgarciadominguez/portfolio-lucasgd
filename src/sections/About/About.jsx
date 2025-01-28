import  { useState } from 'react';
import styles from './About.module.css';

function About() {
  const [language, setLanguage] = useState('en'); // state for the current language

  function handleLanguageChange(e, lang) {
    e.preventDefault();
    setLanguage(lang); 
  }

  return (
    <section id="about" className={styles.container}>
      <h1 className="sectionTitle">About</h1>
      <div className="post-info">
        <p>Also available in</p>
        <a 
          href="#" 
          onClick={(e) => handleLanguageChange(e, 'es')} // Changes the language
        >
          <span className="flag flag-icon flag-icon-es flag-icon-squared"></span>
        </a>
        <a 
          href="#" 
          onClick={(e) => handleLanguageChange(e, 'en')} 
        >
          <span className="flag flag-icon flag-icon-gb flag-icon-squared"></span>
        </a>
      </div>
      <div>
        {language === 'es' ? (
          <p className={styles.descriptionAbout}>
            Desarrollador backend con una sólida experiencia en C++ y C#, adquirida a lo largo de más de 6 años trabajando en proyectos complejos de desarrollo de videojuegos. <br></br><br></br>
            Actualmente, estoy más enfocado en tecnologías backend, principalmente en el entorno .NET, aprovechando mi profundo conocimiento en programación orientada a objetos,
            estructuras de datos y algoritmos complejos, así como en patrones de diseño. También tengo experiencia en desarrollo frontend utilizando React y Angular,
            lo cual me permite trabajar en todo el stack de una aplicación web. <br></br><br></br> Además, soy competente en tecnologías de desarrollo de videojuegos
            tanto para plataformas de PC como móviles, así como en proyectos de realidad aumentada y multijugador.
          </p>
        ) : (
          <p className={styles.descriptionAbout}>
            Backend developer with a strong background in C++ and C#, gained through over 6 years of experience working on complex game development projects. <br></br><br></br>
            Currently, I’m more focused on backend technologies, primarily in the .NET environment, leveraging my deep understanding of object-oriented programming, 
            complex algorithms, data structures, and design patterns. I also have experience in frontend development using React and Angular,
            which enables me to work across the full stack of a web application.<br></br><br></br> In addition, I am proficient in game development technologies for both PC and mobile platforms,
            as well as in AR and multiplayer projects.
          </p>
        )}
      </div>
    </section>
  );
}

export default About;