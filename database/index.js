const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/madlib');

const CompletedStoriesSchema = mongoose.Schema({
  user: String,
  date: String,
  story: String
})

const MadlibSchema = mongoose.Schema({
  lines: [String],
  words: [String],
  stories: [CompletedStoriesSchema]
})

let Madlib = mongoose.model('Madlib', MadlibSchema);
let CompletedStories = mongoose.model('Story', CompletedStoriesSchema);



