const router = require('express').Router()
const { redirect } = require('express/lib/response')
const db = require('../models')

////// SHOW ROUTES //////

// show all trees
router.get('/', async (req, res) => {
    const trees = await db.Tree.find({})
    res.json(trees)
})

//  show tree by id
router.get('/:treeId', async (req, res) => {
    const trees = await db.Tree.findById(req.params.treeId)
    res.json(trees)
})

////// POST ROUTES //////

// add tree card
router.post('/', async (req, res) => {
    try {
        await db.Tree.create({
            Name: `${req.body.Name}`,
            Age: `${req.body.Age}`,
            Species: `${req.body.Species}`,
            Style: `${req.body.Style}`,
            Image: `${req.body.Image}`,
            Events: []
        })
            .then(console.log(req.body))
            .then(res.status(200).redirect('/inventory'))
    } catch (error) {
        res.status(500).send(error)
    }
})

// add event to tree
router.post('/:treeId/event', async (req, res) => {
    const tree = await db.Tree.findById(req.params.treeId)
    try {
        let event = await db.Event.create({
            Description: `${req.body.Description}`,
            DatePotted: `${req.body.DatePotted}`,
            Image: `${req.body.Image}`,
            Notes: `${req.body.Notes}`
        })
            .then(tree.Events.push(event._id))
            .then(await tree.save())
            .then(res.status(201).redirect('/'))
    } catch (error) {
        req.status(500).send(error)
    }
})

////// EDIT ROUTES //////

// edit tree by id
router.patch('/:treeId/edit', async (req, res) => {
    let tree = req.body
    try {
        await db.Tree.findByIdAndUpdate(req.params.treeId, tree)
        .then(res.json({ redirect: '/Inventory' }))
    } catch (error) {
        res.status(500).send(error)
        console.log(error)
    }
})

// edit event by id
router.patch('/:treeId/edit/:eventId', async (req, res) => {
    try {
        const event = await Event.findByIdAndUpdate(req.params.eventid, req.body, { new: true })
        if (!event) {
            return res.status(404)
        }
        res.status(200).send(event)
    } catch (error) {
        res.status(500).send(error)
    }

})

////// DELETE ROUTES //////

// delete tree by id
router.delete('/:treeId/delete', async (req, res) => {
    let tree = req.body
    try{
        await db.Tree.findByIdAndDelete(req.params.treeId, tree)
        .then(res.json({ redirect: '/Inventory' }))
    } catch(error) {
        res.status(500).send(error)
        console.log(error)
    }
})


// delete event by id
router.delete('/:treeId/delete/:eventId', async (req, res) => {
    try {
        const event = await db.Event.findByIdAndDelete(req.params.id)
        if (!event) {
            return res.status(404).send()
        }
        res.send(event)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router