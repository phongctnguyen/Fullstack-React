import React from 'react';

import styles from './SeasonDisplay.module.css';

const seasonConfig = {
  summer: {
    text: 'Lets hit the beach',
    iconName: 'sun',
  },
  winter: {
    text: 'Burr, it is chilly',
    iconName: 'snowflake',
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

export default ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`${styles['season-display']} ${styles[`${season}`]}`}>
      <i
        className={`
          ${styles['icon-left']} 
          massive
          ${styles[`${iconName}`]} 
          ${iconName}
          icon
          `}
      />
      <h1>{text}</h1>
      <i
        className={`f
          ${styles['icon-right']} 
          massive
          ${styles[`${iconName}`]} 
          ${iconName}
          icon
          `}
      />
    </div>
  );
};
