import styles from './WorkStyles.module.css';

import express from '../../assets/ztelogo.png';

import WorkCard from '../../common/WorkCard';

function Work() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">WORK EXPERIENCE</h1>
      <section className={styles.sectionWorkContainer}>
        <div className={styles.workContainer}>
          <WorkCard
            src={express}
            link="https://www.ztedevices.com/es/"
            h3="ZTE SPAIN"
            p="Systems Technician"
            time="Nov 25, 2024 - Nov 25, 2024"
            p2="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Donec sodales enim odio, vel malesuada neque vehicula sit amet. Aliquam venenatis ac leo nec semper."
            isLast={true}
          />
          
        </div>
      </section>
    </section>
  );
}

export default Work;