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
    const trees = await db.Tree.findById({})
    res.json(trees)
})
// POST ROUTES
// add tree card
router.post('/:id', async (req, res) => {
    const treeCard = new TreeCard(req.body);
    try {
        await treeCard.save();
        res.status(201).send(treeCard)
    } catch (error) {
        req.status(500).send(error)
    }
})
// add event to tree
router.post('/:treeid/:eventid', async (req, res) => {
    const newEvent =  new Event(req.body)
    try {
        await newEvent.save()
        res.status(201).send(newEvent)
    } catch (error) {
        req.status(500).send(error)
    }
})
// EDIT ROUTES
// edit tree by id
router.patch('/edit/:treeid', async (req, res) => {
    try {
        const tree = await db.Tree.findByIdAndUpdate(req.params.treeid, req.body, {new: true})
        if(!tree){
            return res.status(404)
        }
        res.status(200).send(tree)
    } catch (error) {
        res.status(500).send(error)
    }
})
// edit event by id
router.patch('/edit/:treeid/:eventid', async (req, res) => {
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
// DELETE ROUTES
// delete tree by id
router.delete('/delete-tree/:treeid', async (req, res) => {
    try {
        const tree = await db.Tree.findByIdAndDelete(req.params.id);
        if (!tree) {
            return res.status(404).send();
        }
        res.send(tree);
    } catch (error) {
        res.status(500).send(error);
    }
})
// delete event by id
router.delete('/delete-tree/:treeid/:eventid', async (req, res) => {
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