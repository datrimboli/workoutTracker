const { model, Schema } = require('mongoose')

const Exercise = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  type: {
    type: Number,
    unique: true,
    required: true
  },
  weight: {
    type: Number,
    unique: true,
    required: true
  },
  sets: {
    type: Number,
    unique: true,
    required: true
  },
  reps: {
    type: Number,
    unique: true,
    required: true
  },
  duration: {
    type: Number,
    unique: true,
    required: true
  },
}, { timestamps: true })

module.exports = model('Exercise', Exercise)
