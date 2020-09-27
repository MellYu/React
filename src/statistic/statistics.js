import React from 'react';
import PropTypes from "prop-types";
import styles from './statistics.module.css';

function Statistics({title, stats}) {
  return (
    <section className={styles.statistics}>
      <h2 className={title? styles.title : styles.nonTitle}>{title}</h2>
      <ul className={styles.list}>
        {stats.map(item => (
          <li key={item.id} className={styles.listItem}>
            <span className={styles.label}>{item.label}</span>
        <span className={styles.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
    title: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
  };

export default Statistics;
