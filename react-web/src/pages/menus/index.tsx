import React from 'react';
import Heart from '@/component/heart';
import { MENUS } from './constant';
import styles from './index.module.less';

export default () => {
  return (
    <div className={styles.menuBox}>
      <div className={styles.inner}>
        {/* <h3 className={styles.title}>&copy;Simple</h3> */}
        <div className={styles.heartBox}>
          <Heart />
        </div>
      </div>
      <div className={styles.out}>
        {MENUS.map((item) => (
          <div key={item.path} className={styles.menuItem}>
            <i className={item.icon} />
            <span className={styles.menuTitle}>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
