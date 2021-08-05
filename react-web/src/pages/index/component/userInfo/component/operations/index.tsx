import React from 'react';

import styles from './index.module.less';

export const Operations: React.FC<{
  history: History;
  list: Array<{
    value?: string;
    icon: string;
    url: string;
    useHistory?: boolean;
  }>;
}> = (props) => {
  const { list } = props;
  if (!list?.length) return null;
  const hanldeClick = (url, useHistory) => {
    if (useHistory) {
      history.push(url);
    } else {
      window.open(url);
    }
  };
  return (
    <div className={styles.quickOpen}>
      {list.map((item) => (
        <a key={item.icon} onClick={() => hanldeClick(item.url, item.useHistory)}>
          <i className={`${item.icon} iconfont`} />
        </a>
      ))}
    </div>
  );
};
