import React, { useState } from 'react';
import { useDidMount } from '@/common/hooks';
import { History } from 'history';

import styles from './index.module.less';

export default ({ history }: { history: History }) => {
  const [visible, setVisible] = useState<boolean>(history.location.pathname !== '/');
  useDidMount(() => {
    history.listen((location) => {
      setVisible(location.pathname !== '/');
    });
  });
  if (!visible) return null;
  const onBack = () => {
    history.goBack();
  };
  return (
    <div className={styles.backIcon} onClick={onBack}>
      <i className="icon-Arrowleft iconfont" />
    </div>
  );
};
