import React from 'react';
import Body from '@/component/body';
import GoBack from '@/component/goBack';

import styles from './index.module.less';

export default ({ children, history }) => {
  return (
    <>
      <Body />
      <GoBack history={history} />
      <main className={styles.main}>{children}</main>
    </>
  );
};
