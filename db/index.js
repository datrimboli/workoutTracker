module.exports = require('mongoose').connect('mongodb://localhost/exercise_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
