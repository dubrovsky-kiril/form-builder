import React from 'react';

export const Tab = ({loadToggleCb, className, children}) => {
  return (
    <a
      onClick={loadToggleCb}
      className={className}
    >
      {children}
    </a>
  )
};
