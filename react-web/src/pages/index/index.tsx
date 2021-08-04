import React from 'react';
import Loading from '@/component/loadingWraper';
import { UserInfo } from './component/userInfo';
// import styles from './index.module.less';

export default () => (
  <>
    <Loading />
    <UserInfo />
  </>
);
