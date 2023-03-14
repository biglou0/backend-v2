const express = require('express')
const  router = express.Router()
const config = require("./../config.json");

const TCHAPr  = require('../Controllers/TCHAP_QTcontrollers');


router.post('/show', TCHAPr.recupererChap)
router.post('/jou', TCHAPr.ajouteTCHAP)
router.get('/showw/:key', TCHAPr.recupererChapp)
router.put('/upform/:id', TCHAPr.updateform);
router.put('/upchap/:id', TCHAPr.updatechap);
router.put('/upsschap/:id', TCHAPr.updatesschap);
router.put('/upquest/:id', TCHAPr.updatequest);
router.get('/searchform/:id', TCHAPr.searchform);
router.get('/searchchap/:id', TCHAPr.searchchap);
router.get('/searchsschap/:id', TCHAPr.searchsschap);
router.get('/searchquest/:id', TCHAPr.searchquest);



module.exports= router