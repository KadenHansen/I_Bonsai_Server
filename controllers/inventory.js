const router = require('express').Router()
const db = require('../models')

// SHOW ROUTES
router.get('/', async (req, res) => {
    const trees = await db.Tree.find({})
    res.json(trees)
})

// POST ROUTES

// EDIT ROUTES

// DELETE ROUTES

module.exports = router