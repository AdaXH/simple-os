import React from 'react';

export default ({ children }) => {
  return (
    <div>
      <nav>header</nav>
      <div>{children}</div>
    </div>
  );
};
