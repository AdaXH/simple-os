import React, { useState } from 'react';
import bg1 from '@/assets/images/3.jpg';
import { useDidMount } from '@/common/hooks';
import { Line } from './effectLine';
import { queryBgConfig } from './service';

import styles from './index.module.less';
import { Galaxy } from '../galaxy';

const body = document.querySelector('body');

export default () => {
  const [config, setCfg] = useState<{ bg?: string; bgOpacity?: string; effectLine?: string }>({
    bgOpacity: '0.6',
    effectLine: '0',
  });
  // useDidMount(() => {
  //   body.style.backgroundImage = `url(${bg1})`;
  //   queryBgConfig().then((res) => setCfg(res));
  // });
  const { bgOpacity, effectLine } = config;
  return (
    <div className={styles.wraper}>
      {/* <Line data={Number(effectLine)} /> */}
      <Galaxy />
    </div>
  );
};
