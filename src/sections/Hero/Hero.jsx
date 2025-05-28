import styles from './HeroStyles.module.css';
import heroImg from '../../assets/CVPhoto.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import youtubeLight from '../../assets/youtube-light.svg';
import youtubeDark from '../../assets/youtube-dark.svg';
import CV from '../../assets/LucasGarciaDominguezCVEnglish.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const youtubeIcon = theme === 'light' ? youtubeLight : youtubeDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Lucas Garcia"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Lucas
          <br />
          Garcia
        </h1>
        <h2>
          Software Developer
          <span className={styles.logo__cursor}></span>
        </h2>
        <span>
          <a href="https://github.com/lucasgarciadominguez" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/lucas-garcia-dominguez/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href="https://youtube.com/@lucasgarciadominguez?si=K0nPqC6DsSNP6qwL" target="_blank">
            <img src={youtubeIcon} alt="Youtube icon" />
          </a>
        </span>
        <p className={styles.description}>
        Passionate backend developer with 6+ years in C++ and C#, now specializing in .NET technologies and full-stack development with React.
        </p>
        <div className={styles.options}>
          <a href={CV} download>
            <button className="hover">Resume</button>
          </a>
          <a href={CV} download>
            <button className={`hover ${styles.redButton}`}>Work Experience</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
