import React from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './index.module.less';

export const Transition: React.FC<{ match: any; timeout?: number }> = ({
  match,
  timeout = 500,
  children,
}) => {
  return (
    <CSSTransition
      in={match !== null}
      classNames={{
        enter: styles.enter,
        enterActive: styles.enterActive,
        exitActive: styles.exitActive,
        exit: styles.exit,
        enterDone: styles.anima,
        exitDone: styles.anima,
      }}
      timeout={timeout}
      unmountOnExit
      mountOnEnter
    >
      {children}
    </CSSTransition>
  );
};
