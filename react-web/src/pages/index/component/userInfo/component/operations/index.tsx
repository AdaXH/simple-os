import React, { useState, useEffect, useRef, useCallback, ChangeEvent } from 'react';
import classnames from 'classnames';

import styles from './index.module.less';

export const Operations: React.FC<{
  history: History;
  list: Array<{
    title?: string;
    icon: string;
    path: string;
  }>;
}> = (props) => {
  const { list, history } = props;
  if (!list?.length) return null;
  const [inputCfg, setInput] = useState<{ visible?: Boolean; value?: string }>({});
  const inputRef = useRef<HTMLInputElement>();
  const hanldeClick = (url) => {
    // if (useHistory) {
    history.push(url);
    // } else {
    //   window.open(url);
    // }
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
  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    // if (e)
    console.log(e)
    setInput({ ...inputCfg, value: e.target.value });
  }
  return (
    <div className={classnames({ [styles.quickOpen]: true, [styles.quickOpenVisible]: visible })}>
      <input
        placeholder="按下回车搜索"
        ref={inputRef}
        className={classnames({ [styles.search]: true, [styles.searchVisible]: visible })}
        onChange={onChangeSearch}
      />
      {list.map((item) => (
        <a key={item.icon} onClick={() => hanldeClick(item.path)}>
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
