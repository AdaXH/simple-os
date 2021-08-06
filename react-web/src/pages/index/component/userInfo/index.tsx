import React, { useState, useMemo } from 'react';
import { useDidMount } from '@/common/hooks';
import { Operations } from './component/operations';
import { Entry } from './component/entry';
import { Hitokoto } from './component/hitokoto';
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
  desc?: string;
}

export const UserInfo: React.FC<{ history: History }> = ({ history }) => {
  const [config, setCfg] = useState<Config>({});
  useDidMount(() => {
    queryIndexPageConfig().then((res) => setCfg(res));
  });
  const { avatar, userName, blogTitle, hitokoto, qq, email, github, desc } = config;
  const operations = useMemo(
    () => [
      {
        value: qq,
        icon: 'icon-logo-qq',
        url: '/article-list',
        useHistory: true,
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
  const useHitokoto = useMemo(() => hitokoto === '1', [hitokoto]);
  console.log('history', history)
  return (
    <div className={styles.userInfoContainer}>
      <div className={styles.userAvatar} style={{ backgroundImage: `url(${avatar})` }} />
      <h3 className={styles.userName}>{userName || blogTitle}</h3>
      <Operations history={history} list={operations} />
      <Hitokoto data={{ useHitokoto, desc }} />
      <Entry onClick={() => history.push('/')} />
    </div>
  );
};
