import React from 'react';
import Body from '@/component/body';

import styles from './index.module.less';

export default ({ children }) => {
  return (
    <>
      <Body />
      <nav>header</nav>
      <main className={styles.main}>{children}</main>
    </>
  );
};
