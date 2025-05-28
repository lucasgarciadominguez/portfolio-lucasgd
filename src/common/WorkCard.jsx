import React from 'react';
import { ArrowDown } from 'lucide-react';  // Imports arrowdown from lucide-react library
import styles from '../sections/Work/WorkStyles.module.css';

function WorkCard({ src, link, h3, p, time, p2, isLast }) {
  return (
    <div className={styles.workCardWrapper}>
      <div className={styles.leftBlock}>
        <div className={styles.workCardCircle}>
          <img src={src} alt={`${h3} logo`} />
        </div>
        {!isLast && (
          <div className={styles.workCardArrow}>
          <div className={styles.arrowLine} />
            <ArrowDown size={24} /> 
          </div>
        )}
      </div>
      <div className={styles.workCardContent}>
        <a className={styles.companyContent} href={link} target="_blank" rel="noopener noreferrer">
          <h3>{h3}</h3>
        </a>
        <p className={styles.professionContent}>{p}</p>
        {time && <time className={styles.dateContent}>{time}</time>}
        {p2 && <p className={styles.descriptionContent}>{p2}</p>}
      </div>
    </div>
  );
}

export default WorkCard;
