import React from 'react';

let StoryCreator = ({submitStory}) => {
  return (
    <div>
      <form onSubmit={submitStory} >
        <input type="text" placeholder="Author Name"></input>
        <input type="text" placeholder="Story Name"></input>
        <textarea type="text" />
        <input type="submit"/>
      </form>
    </div>
  )
}

export default StoryCreator