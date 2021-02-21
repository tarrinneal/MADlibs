const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/madlib');

const CompletedStoriesSchema = mongoose.Schema({
  user: String,
  date: String,
  story: String
})

const MadlibSchema = mongoose.Schema({
  user: String,
  lines: [String],
  words: [String],
  stories: [CompletedStoriesSchema]
})

let Madlib = mongoose.model('Madlib', MadlibSchema);
let CompletedStories = mongoose.model('Story', CompletedStoriesSchema);


let addLib = (object) => {
  return Madlib.create(object)
}


module.exports = {
  addLib,
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