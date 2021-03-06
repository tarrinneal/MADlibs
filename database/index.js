const mongoose = require('mongoose');
mongoose.connect(process.env.DBTOKEN);

const CompletedStoriesSchema = mongoose.Schema({
  madLib_id: String,
  author: String,
  date: String,
  story: String
})

const MadlibSchema = mongoose.Schema({
  author: String,
  storyTitle: String,
  lines: [String],
  words: [String],
  stories: [CompletedStoriesSchema]
})

let Madlib = mongoose.model('Madlib', MadlibSchema);
let CompletedStories = mongoose.model('Story', CompletedStoriesSchema);


let addLib = (object) => {
  return Madlib.create(object)
    .then((data) => {
      debugger;
    })
    .catch((error) => {
      debugger;
    })
}

let getAllStories = () => {
  return Madlib.find({})
}

let addStory = (object) => {
  return CompletedStories.create(object)
}


module.exports = {
  addLib,
  getAllStories,
  addStory
}
// let test = {
//   user: 'Tarrin',
//   lines: ['Hello', 'world'],
//   words: ['adjective'],
//   stories: [
//     {
//       user: 'Tarrin',
//       date: 'Right now',
//       story: 'Hello fuckin world'
//     }
//   ]
// }

// Madlib.create(test)