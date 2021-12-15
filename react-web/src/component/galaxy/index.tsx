import React, { memo } from 'react';

import styles from './index.module.less';

export const Galaxy = memo(
  () => (
    <div className={styles.wrap}>
      {/* <div className={styles.outerBox}>
        <div className={styles.sun} />
        <div className={styles.mercury} />
        <div className={styles.venus} />
        <div className={styles.earth} />
        <div className={styles.mars} />
        <div className={styles.jupiter} />
        <div className={styles.saturn} />
        <div className={styles.uranus} />
        <div className={styles.neptune} />
        <div className={styles.pluto} />
        <div className={styles.asteroidsBelt} />
      </div> */}
    </div>
  ),
  () => true,
);
