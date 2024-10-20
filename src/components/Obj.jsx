import React from 'react';

const Obj = React.memo(({ obj }) => {
  console.log('Obj rendered');
  return <div>{obj.name}</div>;
}, (prevProps, nextProps) => {
  return prevProps.obj === nextProps.obj;
});

export default Obj;
