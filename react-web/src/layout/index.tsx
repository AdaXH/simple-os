import React from 'react';
import Body from '@/component/body';
// import GoBack from '@/component/goBack';

import styles from './index.module.less';
import { Time } from '@/component/time';

export default ({ children, history }) => {
  return (
    <>
      <Body />
      <div className={styles.global}>
        {/* <GoBack history={history} /> */}
        <div className={styles.left}>
          <Time />
        </div>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};
