import React from 'react';

const Simple = React.memo(({ value }) => {
  console.log('Simple rendered');
  return <div>{value}</div>;
});

export default Simple;