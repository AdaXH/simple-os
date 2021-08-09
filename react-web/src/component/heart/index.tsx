import React from 'react';

import styles from './index.module.less';

export default () => {
  return (
    <div className={styles.loading}>
      <svg
        version="1.2"
        height="300"
        width="600"
        xmlns="https://www.w3.org/2000/svg"
        // ts-ingore
        // viewPort="0 0 60 60"
        // xmlns:xlink="https://www.w3.org/1999/xlink"
      >
        <path
          className={styles.sluger}
          fill="none"
          strokeLinejoin="round"
          d="M0,90L250,90Q257,60 262,87T267,95 270,88 273,92t6,35 7,-60T290,127 297,107s2,-11 10,-10 1,1 8,-10T319,95c6,4 8,-6 10,-17s2,10 9,11h210"
        />
      </svg>
    </div>
  );
};
