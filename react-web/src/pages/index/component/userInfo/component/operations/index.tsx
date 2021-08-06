import React, { useState, useEffect, useRef, useCallback } from 'react';
import classnames from 'classnames';

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
  const { list, history } = props;
  if (!list?.length) return null;
  const [inputCfg, setInput] = useState<{ visible?: Boolean; value?: string }>({});
  const inputRef = useRef<HTMLInputElement>();
  const hanldeClick = (url, useHistory) => {
    if (useHistory) {
      history.push(url);
    } else {
      window.open(url);
    }
  };
  const { visible, value } = inputCfg;
  useEffect(() => {
    if (visible) {
      inputRef?.current?.focus();
    }
  }, [visible]);
  const onClickIcon = useCallback(() => {
    setInput({ ...inputCfg, visible: !visible });
  }, [inputCfg]);
  return (
    <div className={classnames({ [styles.quickOpen]: true, [styles.quickOpenVisible]: visible })}>
      <input
        placeholder="按下回车搜索"
        ref={inputRef}
        className={classnames({ [styles.search]: true, [styles.searchVisible]: visible })}
      />
      {list.map((item) => (
        <a key={item.icon} onClick={() => hanldeClick(item.url, item.useHistory)}>
          <i className={`${item.icon} iconfont`} />
        </a>
      ))}
      <a
        className={classnames({ [styles.searchIcon]: true, [styles.searchIconVisible]: visible })}
        onClick={onClickIcon}
      >
        <i className={`${visible ? 'icon-close' : 'icon-search2'} iconfont`} />
      </a>
    </div>
  );
};
