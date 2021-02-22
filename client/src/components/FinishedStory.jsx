import React from 'react';

const FinishedStories = ({completeStory, home}) => {

  return (
    <div>
      <button onClick={home}>Home</button>
      {completeStory}
    </div>
  )
}

export default FinishedStories;