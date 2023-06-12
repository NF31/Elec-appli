const express = require('express')
const router = express.Router()

const aproposController = require('../controller/apropos')
const contactController = require('../controller/contact')
const indexController = require('../controller/index')
const servicesController = require('../controller/services')
const avisController = require('../controller/avis')


router.get('/', indexController.getIndex)
router.post('/', indexController.postIndex)

router.get('/apropos', aproposController.getApropos)
router.post('/apropos', aproposController.postApropos)

router.get('/contact', contactController.getContact)
router.post('/contact', contactController.postContact)

router.get('/services', servicesController.getServices)
router.post('/services', servicesController.postServices)

router.get('/avis', avisController.getAvis)
router.post('/avis', avisController.postAvis)

module.exports = router