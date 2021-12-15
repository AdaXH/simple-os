import { useInterval } from '@/common/hooks';
import React, { memo, useState } from 'react';
import { WEEK_MAP } from './constant';

import styles from './index.module.less';
import { wrapString } from './util';

export const Time = memo(
  () => {
    const [time] = useInterval(() => {
      const date = new Date();
      const hour = date.getHours();
      const mins = date.getMinutes();
      const sec = date.getSeconds();
      const day = date.getDate();
      const years = date.getFullYear();
      const mons = date.getMonth();
      const week = date.getDay();
      return {
        hour: wrapString(hour),
        mins: wrapString(mins),
        sec: wrapString(sec),
        day: wrapString(day),
        years,
        mons: wrapString(mons + 1),
        week,
      };
    });
    const { hour = '00', mins = '00', sec = '00', day, years, mons, week } = time;
    if (!time.years) return null;
    return (
      <div className={styles.time}>
        <div className={styles.timeClock}>
          {hour}:{mins}:{sec}
        </div>
        <div className={styles.timeYear}>
          {years}/{mons}/{day} 星期{WEEK_MAP[week]}
        </div>
      </div>
    );
  },
  () => true,
);
