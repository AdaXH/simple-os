import React from 'react';
import Loading from '@/component/loadingWraper';
import Galaxy from '@/component/galaxy';
import { UserInfo } from './component/userInfo';

export default ({ history }) => (
  <>
    <Loading />
    {/* <UserInfo history={history}/> */}
    <Galaxy />
  </>
);
