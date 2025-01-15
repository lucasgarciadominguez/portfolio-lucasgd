import styles from './ProjectsStyles.module.css';

import asp from '../../assets/aspminimalapi.png';
import cinemareact from '../../assets/cinemareact.png';
import portfolio from '../../assets/portfolio.png';

import virtualinteractivetour from '../../assets/virtualtour.png';
import iverstales from '../../assets/iverstales.png';
import vestigesofthempire from '../../assets/vestigesofthempire.png';
import carsonline from '../../assets/carsonline.png';

import gamengine from '../../assets/gamengine.png';
import smallgamengine from '../../assets/smallgamengine.png';
import bullet from '../../assets/bullet.png';
import box2d from '../../assets/box2d.png';

import chess from '../../assets/chess.png';
import chernobyl from '../../assets/chernobyl.png';

import fourinline from '../../assets/4inline.png';
import geneticalgorithms from '../../assets/geneticalgorithms.png';
import fpsue5 from '../../assets/fpsue5.png';

import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <section className={styles.sectionProjectsContainer}>
        <h2 className="sectionTitle">Web Development</h2>
        <div className={styles.projectsContainer}>
          <ProjectCard
            src={asp}
            link="https://github.com/lucasgarciadominguez/minimal-API-ASP.NET"
            h3="Minimal API ASP.NET"
            p="API"
          />
          <ProjectCard
            src={cinemareact}
            link="https://github.com/lucasgarciadominguez/cinema-react"
            h3="Cinema React"
            p="React"
          />
          <ProjectCard
            src={portfolio}
            link="https://github.com/lucasgarciadominguez/portfolio-lucasgd"
            h3="Portfolio"
            p="React"
          />
        </div>
      </section>
      <section className={styles.sectionProjectsContainer}>
        <h2 className="sectionTitle">Unity Projects C#</h2>
        <div className={styles.projectsContainer}>
          <ProjectCard
            src={virtualinteractivetour}
            link="https://github.com/lucasgarciadominguez/test-lighting-architecture-unity"
            h3="Virtual Interactive Tour"
            p="Unity Simulator"
          />
          <ProjectCard
            src={iverstales}
            link="https://iguanago.itch.io/ivers-tales"
            h3="Iver's Tales"
            p="Unity Game"
          />
          <ProjectCard
            src={vestigesofthempire}
            link="https://github.com/lucasgarciadominguez/vestiges-of-the-empire"
            h3="Vestiges Of The Empire"
            p="Unity Game"
          />
          <ProjectCard
            src={carsonline}
            link="https://github.com/lucasgarciadominguez/online-cars"
            h3="Online Cars"
            p="Unity Multiplayer Game"
          />
        </div>
      </section>
      <section className={styles.sectionProjectsContainer}>
        <h2 className="sectionTitle">C++ Projects</h2>
        <div className={styles.projectsContainer}>
          <ProjectCard
            src={gamengine}
            link="https://github.com/lucasgarciadominguez/game-engine"
            h3="Cold Engine"
            p="C++ ECS Game Engine"
          />
          <ProjectCard
            src={smallgamengine}
            link="https://github.com/lucasgarciadominguez/qt-application-with-opengl"
            h3="Small Game Engine"
            p="QT & OpenGL Game Engine"
          />
          <ProjectCard
            src={bullet}
            link="https://github.com/lucasgarciadominguez/3d-animation-with-bullet"
            h3="3D Animation Bullet"
            p="SFML & Bullet Project"
          />
          <ProjectCard
            src={box2d}
            link="https://github.com/lucasgarciadominguez/2d-animation-with-box2D"
            h3="2D Animation Box2D"
            p="SFML & Box2D Project"
          />
        </div>
      </section>
      <section className={styles.sectionProjectsContainer}>
        <h2 className="sectionTitle">Mobile Developments</h2>
        <div className={styles.projectsContainer}>
          <ProjectCard
            src={chess}
            link="https://github.com/lucasgarciadominguez/-Piedra-Papel-Jaque-Mate-"
            h3="Piedra, Papel, Jaque Mate!"
            p="Unity Mobile Game"
          />
          <ProjectCard
            src={chernobyl}
            link="https://github.com/lucasgarciadominguez/chernobyl-quizz-ar-mobile"
            h3="Chernobyl Quizz AR"
            p="Unity Mobile Game"
          />
        </div>
      </section>
      <section className={styles.sectionProjectsContainer}>
        <h2 className="sectionTitle">Others</h2>
        <div className={styles.projectsContainer}>
          <ProjectCard
            src={fourinline}
            link="https://github.com/lucasgarciadominguez/ai-4inline"
            h3="IA 4Inline"
            p="Unity AI Project"
          />
          <ProjectCard
            src={geneticalgorithms}
            link="https://github.com/lucasgarciadominguez/genetic-algorithms"
            h3="Genetic Algorithms"
            p="Unity AI Project"
          />
          <ProjectCard
            src={fpsue5}
            link="https://github.com/lucasgarciadominguez/fps-multiplayer-UE5"
            h3="FPS Multiplayer"
            p="Unreal Engine Game"
          />
        </div>
      </section>
    </section>

    
  );
}

export default Projects;
