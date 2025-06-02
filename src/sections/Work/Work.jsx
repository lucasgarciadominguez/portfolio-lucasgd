import styles from './WorkStyles.module.css';
import express from '../../assets/ztelogo.png';
import dxc from '../../assets/dxclogo.svg';
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
            time="December 2024 - May 2025"
            p2={[
              "BA-Networks N1 and N2 Surveillance.",
              "Use of alarm monitoring tools such as 360.",
              "Ticket handling: TGJira, Jiranext, TESA, Telecable, Euskaltel, MMYOSP, Adamo .",
              "Use of virtual machines, HFC line provisioning, VoIP, POTS.",
              "Ticketing, CRM, KPIs, databases, PMO.",
              "Provisioning tools such as ShoPa.",
              "Linux Server, Ubuntu, terminal management, basic commands.",
              "Support for network technicians and customer technicians in HFC and FTTH installations."
            ]}
          />
          
          <WorkCard
            src={dxc}
            link="https://dxc.com/es/es"
            h3="DXC SPAIN"
            p="ServiceNow Consultant"
            time="June 2025 - "
            p2={[
              "Support package software application development projects.",
              "Collaborate with the team on coding, testing, and maintenance tasks.",
              "Follow coding standards and best practices.",
              "Contribute to the completion of project milestones.",
              "Participate in code reviews and maintain coding standards.",
              "Assist in software documentation and user support.",
              "Stay updated on industry trends and technologies.",
              "Assist in troubleshooting and resolving software issues."
            ]}
            isLast={true}
            isPresent={true}
          />
        </div>
      </section>
    </section>
  );
}

export default Work;