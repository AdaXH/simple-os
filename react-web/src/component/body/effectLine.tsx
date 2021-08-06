import React, { memo, useState } from 'react';
import classNames from 'classnames';
import { useDidMount } from '@/common/hooks';

import styles from './index.module.less';

export const Line: React.FC<{}> = memo(() => {
  const [lines, setLines] = useState<
    Array<{ width: number; height: number; left?: number; bottom: number; duration: number }>
  >([]);
  useDidMount(() => {
    setLines(Array.from(Array(30)));
  });
  return (
    <>
      {lines.map((_, index) => (
        <div
          className={classNames(styles.line, styles[`lineLeft${index}`])}
          key={index}
        />
      ))}
    </>
  );
});
