var express = require('express');
const Accounts = require('../model/account');
var accountRouter = express.Router();

 accountRouter.route('/')
 .all((req, res, next)=>{
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    next()
 })
 .get((req, res, next)=>{
    Accounts.find({})
    .then((accounts)=>{
        res.json(accounts)
    })
 })
 .post((req, res, next)=>{
    Accounts.create(req.body)
    .then((accounts)=>{
        res.statusCode = 200
        res.json(accounts)
    })
 })
 .put((req, res, next)=>{
    res.statusCode = 403    
    res.end('Not support')
 })
 .delete((req, res, next)=>{
    
    Orchids.deleteOne({})
    .then((orchid)=>{
        res.json(orchid)
    })  
 })
accountRouter.route('/:orchidId')
.all((re, res, next)=>{
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    next()
})
.get((req, res, netxt)=>{
    Orchids.findById(req.params.orchidId)
    .then((orchid)=>{
       res.statusCode = 200
        res.json(orchid)
    })
})
.post((req, res, next)=>{
    res.statusCode = 403
    res.end('Not support')
 })
 .put((req, res, next)=>{
    Orchids.findByIdAndUpdate(req.params.orchidId, {
        $set: req.body
    }, {new: true} )
    .then((orchid)=>{
        res.json(orchid)
    })
 })
 .delete((req, res, next)=>{
    Orchids.findByIdAndDelete(req.params.orchidId)
    .then((resp)=>{
        res.json(resp)
    })
 })
 accountRouter.route('/:orchidId/comments')
 .all((re, res, next)=>{
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    next()
})
.get((req, res, next)=>{
    Orchids.findById(req.params.orchidId)
    .then((orchid)=>{
        res.json(orchid.comments)
    })
})
module.exports = accountRouter;
