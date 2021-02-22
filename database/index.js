const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/madlib');

const CompletedStoriesSchema = mongoose.Schema({
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
}

let getAllStories = () => {
  return Madlib.find({})
}


module.exports = {
  addLib,
  getAllStories
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