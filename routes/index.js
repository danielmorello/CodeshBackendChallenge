const express = require('express');
const covidcasesController = require('../controller/covidcases');
const databaseController = require('../controller/database');

const router = express.Router();
router.get('/', covidcasesController.welcome);
router.get('/dates', covidcasesController.getAllDates);
router.get('/cases/:date/count', covidcasesController.countByDate);
router.get('/cases/:date/cumulative', covidcasesController.cumulativeByDate);
router.post('/covidcases', covidcasesController.createCovidcase);
router.post('/database', databaseController.createDatabase);
router.delete('/covidcases/:id', covidcasesController.deleteCovidcase);
router.get('/covidcases', covidcasesController.getAllCovidcase);

module.exports = router;
