const express = require('express')
const  router = express.Router()
const config = require("./../config.json");

const Client  = require('../Controllers/ClientController');



router.post('/login', Client.login)
router.post('/add', Client.add)
router.get('/showw', Client.recupererclient)
router.get('/showC', Client.recuperercliente)
router.delete('/dell/:id', Client.deleteSCLIById);
router.put('/upcli/:id', Client.updateCLI);
router.get('/searchcli/:id', Client.searchCLI);



module.exports= router