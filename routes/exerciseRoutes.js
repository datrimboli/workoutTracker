const router = require('express').Router()
const { Exercise } = require('../models')

// GET all exercise
router.get('/exercises', (req, res) => {
  Exercise.find()
    .populate('exercise')
    .then(items => res.json(exercises))
    .catch(err => console.log(err))
})

// POST one exercise
router.post('/exercises', (req, res) => {
  Exercise.create(req.body)
    .then(exercise => {
      User.findByIdAndUpdate(item.user, { $push: { items: item._id } })
        .then(() => res.json(item))
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
})

// PUT one exercise
router.put('/exercises/:id', (req, res) => {
  Exercise.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

// DELETE one exercise
router.delete('/exercises/:id', (req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router
