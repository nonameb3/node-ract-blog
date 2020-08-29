const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
  name: String,
  status: String,
  content: String,
  category: String,
  createDate: { type: Date, default: Date.now },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const commentModel = mongoose.model('Card', CardSchema);
module.exports = commentModel;
