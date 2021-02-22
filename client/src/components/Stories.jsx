import React from 'react';

const Stories = ({stories, pickStory}) => {
  let stores = stories.map(story => {
    return (<div key={story.storyTitle} id={story._id} className={story.storyTitle + ' listItem'} id={story._id} onClick={pickStory}>
      <div className={story.storyTitle} id={story._id}>{story.author}</div>
      <div className={story.storyTitle} id={story._id}>{story.storyTitle}</div>
    </div>)
  })
  return (
    <div>
      {stores}
    </div>
  )
}

export default Stories;