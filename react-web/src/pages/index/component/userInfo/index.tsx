import React, { useState, useMemo } from 'react';
import { useDidMount } from '@/common/hooks';
import { Operations } from './component/operations';
import { Entry } from './component/entry';
import { queryIndexPageConfig } from './service';

import styles from './index.module.less';

interface Config {
  qq?: string;
  email?: string;
  github?: string;
  avatar?: string;
  userName?: string;
  blogTitle?: string;
  hitokoto?: string;
}

export const UserInfo: React.FC<{ history: History }> = ({ history }) => {
  const [config, setCfg] = useState<Config>({});
  useDidMount(() => {
    queryIndexPageConfig().then((res) => setCfg(res));
  });
  const { avatar, userName, blogTitle, hitokoto, qq, email, github } = config;
  const operations = useMemo(
    () => [
      {
        value: qq,
        icon: 'icon-logo-qq',
        url: '/',
      },
      {
        value: email,
        icon: 'icon-email',
        url: '/',
      },
      {
        value: github,
        icon: 'icon-GitHub',
        url: '/',
      },
      {
        icon: 'icon-f-about',
        url: '/about-me',
        useHistory: true,
      },
    ],
    [qq, email, github],
  );
  const useHitokoto = useMemo(() => hitokoto === 'true', [hitokoto]);
  return (
    <div className={styles.userInfoContainer}>
      <div className={styles.userAvatar} style={{ backgroundImage: `url(${avatar})` }} />
      <h3 className={styles.userName}>{userName || blogTitle}</h3>
      <Operations history={history} list={operations} />
      <Entry onClick={() => history.push('/')}/>
    </div>
  );
};
