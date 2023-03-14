const express = require('express')
const  router = express.Router()
const config = require("./../config.json");

const affectation  = require('../Controllers/AffectationController');



//router.post('/login', Client.login)
router.post('/add', affectation.affecte)
router.get('/showaff/:key', affectation.recupereaff)
router.get('/showaud/:key', affectation.recupereaffaud)
router.get('/histo', affectation.histo)
router.delete('/dell/:id', affectation.deletehisto);
router.post('/addform', affectation.addformpro)
router.delete('/dellf/:id', affectation.deleteformpro);

router.post('/addcon', affectation.addformcont)
router.delete('/dellcon/:id', affectation.deleteformco);

router.post('/addexp', affectation.addexp)
router.delete('/dellexp/:id', affectation.deleteexp);

router.post('/addtcom', affectation.addtcom)
router.delete('/delltcom/:id', affectation.deletetcom);



module.exports= router