import React, { memo, useState } from 'react';
import classNames from 'classnames';
import { useDidMount } from '@/common/hooks';

import styles from './index.module.less';

type Lines = Array<{
  width: number;
  height: number;
  left?: number;
  bottom: number;
  duration: number;
}>;

export const Line: React.FC<{ data: number }> = memo(({ data }) => {
  if (!data) return null;
  const [lines, setLines] = useState<Lines>([]);
  useDidMount(() => {
    setLines(Array.from(Array(data)));
  });
  return (
    <>
      {lines.map((_, index) => (
        <div className={classNames(styles.line, styles[`lineLeft${index}`])} key={index} />
      ))}
    </>
  );
});
