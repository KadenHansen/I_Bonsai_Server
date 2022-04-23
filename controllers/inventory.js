const router = require('express').Router()
const db = require('../models')

// SHOW ROUTES
// show all trees
router.get('/', async (req, res) => {
    const trees = await db.Tree.find({})
    res.json(trees)
})

//  show tree by id

// POST ROUTES
// add tree card

// add event to tree

// EDIT ROUTES
// edit tree by id

// edit event by id

// DELETE ROUTES
// delete tree by id

// delete event by id

module.exports = router