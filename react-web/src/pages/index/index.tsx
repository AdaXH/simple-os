import React from 'react';
import Loading from '@/component/loadingWraper';
import { UserInfo } from './component/userInfo';

export default ({ history }) => (
  <>
    <Loading />
    <UserInfo history={history}/>
  </>
);
