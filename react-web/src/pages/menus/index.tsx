import React from 'react';
import Heart from '@/component/heart';
import { MENUS } from './constant';
import styles from './index.module.less';

export default () => {
  return (
    <div className={styles.menuBox}>
      <div className={styles.out}>
        <div className={styles.m} />
        <div className={styles.m} />
        <div className={styles.m} />
        <div className={styles.m} />
        <div className={styles.m} />
        {MENUS.map((item) => (
          <div key={item.path} className={styles.menuItem}>
            <i className={item.icon} />
            <span className={styles.menuTitle}>{item.title}</span>
          </div>
        ))}
      </div>
      <Heart />
    </div>
  );
};
