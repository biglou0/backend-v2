const express = require('express')
const  router = express.Router()
const config = require("./../config.json");

const TQPr  = require('../Controllers/TQPControllers');



router.get('/showw/:key', TQPr.recupererTQp)
router.get('/a', TQPr.recupereraddr)
router.get('/c', TQPr.recuperercontart)
router.get('/p', TQPr.recupererphase)
router.get('/f', TQPr.recupererfonction)
router.get('/r', TQPr.recupererregion)
router.get('/n', TQPr.recuperernaf)
router.get('/code', TQPr.recuperercodeape)
router.get('/cour', TQPr.recuperercourier)





module.exports= router