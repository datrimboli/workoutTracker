const { model, Schema } = require('mongoose')

const Workout = new Schema({
  day: {
    type: String,
    required: true
  },
  exercises: [{
  name: {
    type: String,
    required: true
  },
  type: {
    type: Number,
    required: true
  },
  weight: {
    type: Number
   },
  sets: {
    type: Number
    },
  reps: {
    type: Number
    },
  duration: {
    type: Number,
    required: true
  },
  distance: {
    type: Number
    },
  }]
}, { timestamps: true })

module.exports = model('Workout', Workout)
