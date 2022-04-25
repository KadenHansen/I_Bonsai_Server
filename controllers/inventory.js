const router = require('express').Router()
const db = require('../models')

// SHOW ROUTES
// show all trees
router.get('/', async (req, res) => {
    const trees = await db.Tree.find({})
    res.json(trees)
})

//  show tree by id
router.get('/:id', async (req, res) => {
    // const ... = await ...({})
})
// POST ROUTES
// add tree card
router.post('/:id' async (req, res) => {
    //const .... = await ({})
})
// add event to tree
router.post(':eventid' async (req, res) => {
    //const .... = await ({})
})
// EDIT ROUTES
// edit tree by id
router.patch('treeid' async (req, res) => {
    //const... = await ({})
})
// edit event by id
router.patch('eventid' async (req, res) => {
    //const... = await ({})
})
// DELETE ROUTES
// delete tree by id
router.delete(':treeid' async (req,res) => {
    //const.... = await ({})
})
// delete event by id
router.delete(':eventid' async (req, res) => {
    //const.... = await ({})
})
module.exports = router