import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import StoryCreator from "./StoryCreator";
import Stories from "./Stories";
import PickedStory from "./PickedStory";
import FinishedStory from "./FinishedStory"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      stories: [],
      story: {},
      pickedStory: '',
      completeStory: ''
    }
    this.submitStory = this.submitStory.bind(this)
    this.getAll = this.getAll.bind(this)
    this.pickStory = this.pickStory.bind(this)
    this.submitWords = this.submitWords.bind(this)
    this.home = this.home.bind(this)
    this.saveLib = this.saveLib.bind(this)
  }

  submitStory (e) {
    e.preventDefault()
    let author = e.target[0].value;
    let storyTitle = e.target[1].value;
    let text = ' ' + e.target[2].value;
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
    axios.post('/', body)
      .then((data) => {
        this.getAll()
      })
    e.target.reset()
  }

  getAll () {
    axios.get('/stories')
      .then(data => {
        if(Array.isArray(data.data)) {
          this.setState({
            stories: data.data
          })
        }
      })
  }

  pickStory (e) {
    e.preventDefault();
    let story;
    for (let i = 0; i < this.state.stories.length; i++) {
      if (this.state.stories[i]._id === e.target.id) {
        story = this.state.stories[i]
        break;
      }
    }
    this.setState({
      pickedStory: story
    })
  }

  submitWords (e) {
    // debugger;
    e.preventDefault()
    let words = []
    for (let i = 0; i < e.target.children.length; i++) {
      words.push(e.target[i].value)
    }
    let story = ''
    for (let i = 0; i < words.length || i < this.state.pickedStory.lines.length; i++) {
      if (i < this.state.pickedStory.lines.length) {
        story += this.state.pickedStory.lines[i]
      }
      if (i < words.length) {
        story += words[i]
      }
    }
    console.log(story)
    this.setState({
      completeStory: story
    })
  }

  home (e) {
    if(e) {
      e.preventDefault()
    }
    this.setState({
      pickedStory: '',
      completeStory: ''
    })
  }

  saveLib (e) {
    e.preventDefault();
    debugger;
    let body = {
      author: e.target[0].value,
      story: this.state.completeStory,
      madLib_id: this.state.pickedStory._id
    }
    axios.post('/save', body)
      .then((data) => {
        this.home()
      })
  }

  componentDidMount () {
    this.getAll()
  }

  render() {
    let toRender = null;
    if (this.state.completeStory) {
      toRender = <FinishedStory completeStory={this.state.completeStory} home={this.home} saveLib={this.saveLib}/>
    } else if (this.state.pickedStory) {
      toRender = <PickedStory pickedStory={this.state.pickedStory} submitWords={this.submitWords}/>
    } else {
      toRender = (<div>
        <StoryCreator submitStory={this.submitStory}/>
        <Stories stories={this.state.stories} pickStory={this.pickStory} />
      </div>)
    }
    return (
      toRender
    );
  }
}

export default App;
