import React from 'react';
import bg1 from '@/assets/images/3.jpg';
import { useDidMount } from '@/common/hooks';
import { Line } from './effectLine';

import styles from './index.module.less';

const body = document.querySelector('body');

export default () => {
  useDidMount(() => {
    body.style.backgroundImage = `url(${bg1})`;
  });
  return (
    <div className={styles.wraper}>
      <Line />
    </div>
  );
};
