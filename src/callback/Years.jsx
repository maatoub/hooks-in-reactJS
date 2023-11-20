import React from 'react'

const Years = ({years}) => {
    console.log("rendering component Years");
  return (
    <div>
      <h4>{years}</h4>
    </div>
  );
}

export default React.memo(Years)
