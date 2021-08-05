import React from 'react';
import Loading from '@/component/loadingWraper';
import { UserInfo } from './component/userInfo';
// import styles from './index.module.less';

export default ({ history }) => (
  <>
    <Loading />
    <UserInfo history={history}/>
  </>
);
