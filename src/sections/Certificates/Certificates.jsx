import styles from './CertificatesStyles.module.css';

import ServiceNow from '../../assets/Servicenow.png';
import ServiceNowWelcome from '../../assets/Micro-CertificationWelcometoServiceNow.pdf';

import CambridgeUniversityLarge from '../../assets/CambridgeUniversityLarge.png';


import ProjectCard from '../../common/ProjectCard';

function Certificates() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">CERTIFICATES</h1>
      <section className={styles.sectionProjectsContainer}>
        <h2 className="sectionTitle">SERVICENOW</h2>
        <div className={styles.projectsContainer}>
        <ProjectCard
            src={ServiceNow}
            link={ServiceNowWelcome}
            h3="Welcome to ServiceNow"
            p="ServiceNow"
          />
        </div>
      </section>
      <section className={styles.sectionProjectsContainer}>
        <h2 className="sectionTitle">LANGUAGES</h2>
        <div className={styles.projectsContainer}>
        <ProjectCard
            src={CambridgeUniversityLarge}
            h3="B2 First"
            p="Cambridge University"
          />
        </div>
      </section>
    </section>

    
  );
}

export default Certificates;
