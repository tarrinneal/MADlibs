import React from "react";
import ReactDOM from "react-dom";
import StoryCreator from "./StoryCreator.jsx";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.submitStory = this.submitStory.bind(this)
    this.getAll = this.getAll.bind(this)
  }

  submitStory (e) {
    e.preventDefault()
    let author = e.target[0].value;
    let storyTitle = e.target[1].value;
    let text = e.target[2].value;
    let split = text.split('/')
    let lines = [];
    let words = [];
    for (let i = 0; i < split.length; i++) {
      if (i % 2 === 0) {
        lines.push(split[i])
      } else {
        words.push(split[i])
      }
    }
    let body = {
      author,
      storyTitle,
      lines,
      words
    }
    console.log(body)
    axios.post('/', body)
      .then((data) => {
        console.log(data)
      })
  }

  getAll () {
    axios.get('/stories')
      .then(data => {
        console.log(data)
      })
  }

  componentDidMount () {
    this.getAll()
  }

  render() {
    return (
      <div>
        <div>hello</div>
        <StoryCreator submitStory={this.submitStory}/>
      </div>
    );
  }
}

export default App;
