const express = require('express');
const database = require('../data/config');
const router = express.Router();
const restrict = require('../user-res/users-middleware')

router.get('/items', restrict(), async (req, res, next) => {
    try{
        const items = await database.select('*').from('items');
        return res.status(200).json(items);
    } catch(error){
        next(error)
    }
})

router.post('/items', restrict(), async (req, res, next) => {
    try{
        const newItem = await database('items').insert([req.body])
        return res.status(201).json(newItem);
    } catch(error){
        next(error)
    }
})

router.delete('/items/:id', restrict(), async (req, res, next) => {
    try{
      const item = await database.select('*').from('items').where({id: req.params.id}).del();
      return res.status(201).json(item);
    } catch(error){
      next(error)
    }
})

router.get('/items/:id', restrict(), async (req, res, next) => {
    try{
        const item = await database.select('*').from('items').where({id: req.params.id}).first();
        return res.status(200).json(item);
    } catch(error){
        next(error)
    }
})

module.exports = router
