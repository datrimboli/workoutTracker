// Bringing in express.Router
const router = require('express').Router()
// Connecting the viewRoutes and workoutRoutes files 
router.use('/api', require('./workoutRoutes.js'))
router.use('/', require('./viewRoutes.js'))

// Exporting routes
module.exports = router
