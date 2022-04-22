const router = require('express').Router()
const db = require('../models')

// SHOW ROUTES
router.get('/', (req, res) => {
    db.Tree.find()
})

// POST ROUTES

// EDIT ROUTES

// DELETE ROUTES

module.exports = router