import React from 'react';
import Body from '@/component/body';

export default ({ children }) => {
  return (
    <>
      <Body />
      <nav>header</nav>
      <div>{children}</div>
    </>
  );
};
