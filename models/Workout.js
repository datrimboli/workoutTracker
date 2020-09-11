// Bringing in mongoose
const { model, Schema } = require('mongoose')

// Exercise variables
const Workout = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [{
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
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

// Exporting Workout variable
module.exports = model('Workout', Workout)
