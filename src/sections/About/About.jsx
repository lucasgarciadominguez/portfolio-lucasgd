import styles from './About.module.css';
function About() {
  return (
    <section id="about" className={styles.container}>
      <h1 className="sectionTitle">About</h1>
      <div className="post-info"><p>Also available in</p>
      <a href=""><span className="flag flag-icon flag-icon-es flag-icon-squared"></span></a><p></p></div>
      <div >
      <p className={styles.descriptionAbout}>     
      Backend developer with a strong background in C++ and C#, gained through over 6 years of experience working on complex game development projects. <br></br><br></br>
      Currently, I’m more focused on backend technologies, primarily in the .NET environment, leveraging my deep understanding of object-oriented programming, 
      complex algorithms data structures, and design patterns. I also have experience in frontend development using React and Angular,
      which enables me to work across the full stack of a web application.<br></br><br></br> In addition, I am proficient in game development technologies for both PC and mobile platforms,
      as well as in AR and multiplayer projects.
      </p>
      </div>
    </section>
  );
}
export default About;
