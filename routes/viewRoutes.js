// Bringing in express.Router
const router = require('express').Router()
// Bringing in path.join
const { join } = require('path')
  // Linking to exercise.html in public folder
router.get('/exercise', (req, res) => {
  res.sendFile(join(__dirname, '../public/exercise.html'))
})
  // Linking to stats.html in public folder
router.get('/stats', (req, res) => {
  res.sendFile(join(__dirname, '../public/stats.html'))
})
  // Linking to index.html in public folder
router.get('/*', (req, res) => {
  res.sendFile(join(__dirname, '../public/index.html'))
})
// Exporting routes
module.exports = router