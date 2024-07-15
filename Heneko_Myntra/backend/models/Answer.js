const mongoose = require('mongoose');

const AnswersSchema = new mongoose.Schema({
  answer: String,
  questonId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"questions"
  },

  createdAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("Answers", AnswersSchema);
