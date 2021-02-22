import React from 'react';

const FinishedStories = ({completeStory, home, saveLib}) => {
  let story = (<p>{completeStory}</p>)
  return (
    <div>
      <button onClick={home}>Home</button>
      {story}
      <form onSubmit={saveLib}>
        <input type="text" placeholder="Author" />
        <input type="submit" value="Save"></input>
      </form>


    </div>
  )
}

export default FinishedStories;