import React from 'react'

const PickedStory = ({pickedStory, submitWords}) => {
  let words = pickedStory.words.map((word) => {
    return(<input type="text" className="word" placeholder={word}></input>)
  })

  return (
    <div>
      <form onSubmit={submitWords}>
        {words}
        <input type="submit"/>
      </form>
    </div>
  )
}

export default PickedStory;