import React, { memo, useContext } from 'react';
import PageContext from '../../../contexts/PageContext';

const HeadingB = ({ children }) => {
  const { data } = useContext(PageContext);

  return (
    <h1
      className="pb-1 mb-2 text-sm font-bold tracking-wide uppercase border-b-2"
      style={{
        color: data.metadata.colors.primary,
        borderColor: data.metadata.colors.primary,
      }}
    >
      {children}
    </h1>
  );
};

export default memo(HeadingB);
