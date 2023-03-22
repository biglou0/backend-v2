const express = require('express')
const  router = express.Router()
const config = require("./../config.json");

const quest  = require('../Controllers/Questcontroller');



router.post('/jou', quest.ajouteTCHAP)
router.get('/showw/:key/:chap/:ssch', quest.recupererquestqt)
router.get('/showed/:key', quest.recupererquestqts)
router.get('/showrep/:key', quest.recupererquestrep)
router.get('/showform/:key', quest.nomform)
router.get('/showchap/:key', quest.nomchap)
router.get('/showsschap/:key', quest.nomsschap)
router.get('/showquest/:key', quest.nomquest)


module.exports= router