import React, { useState, useEffect, useCallback } from 'react';
import { getHitokoto } from './service';

import styles from './index.module.less';

export const Hitokoto: React.FC<{ data: { useHitokoto: boolean; desc: string } }> = ({ data }) => {
  const { useHitokoto, desc } = data || {};
  const [tip, setTip] = useState(desc);
  const updTips = useCallback(() => {
    getHitokoto().then((res) => {
      if (res.hitokoto) {
        setTip(res.hitokoto);
      }
    });
  }, []);
  useEffect(() => {
    let id;
    if (useHitokoto) {
      updTips();
      id = setInterval(updTips, 10000);
    } else {
      if (desc) {
        setTip(desc);
      }
    }
    return () => clearInterval(id);
  }, [useHitokoto, desc]);
  return <div className={styles.hitokotoBox}>“{tip}”</div>;
};
