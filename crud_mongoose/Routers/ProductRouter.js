const ProductController = require('../Controller/ProductController');
const express = require('express');
const router = express.Router();

//GET
    router.get('/',ProductController.showProducts)
    router.get('/edit/:id',ProductController.edit)
    router.get('/delete/:id',ProductController.delete)

//POST
    router.post('/create',ProductController.create)
    router.post('/update',ProductController.update)

module.exports = router;