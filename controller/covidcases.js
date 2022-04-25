const covidcasesService = require('../service/covidcases');

class CovidcasesController {
    async welcome(req, res) {
        try{
            const mes = await covidcasesService.welcome();

            res.status(200).json(mes);
        } catch(err){

            console.error(err);
        }
    }

    async getAllDates(req, res) {
        try{
            const dates = await covidcasesService.getAllDates();

            res.status(200).json(dates);
        } catch(err){

            console.error(err);
        }
    }

    async countByDate(req, res) {
        try{
            const countByDate = await covidcasesService.countByDate(req.params);

            res.status(200).json(countByDate);
        } catch(err){

            console.error(err);
        }
    }

    async cumulativeByDate(req, res) {
        try{
            const cumulativeByDate = await covidcasesService.cumulativeByDate(req.params);

            res.status(200).json(cumulativeByDate);
        } catch(err){

            console.error(err);
        }
    }

    async createCovidcase(req, res) {
        try{
            await covidcasesService.createCovidcase(req.body);

            res.status(201).json('deu certo');
        } catch(err){

            console.error(err);
        }

    }

    async deleteCovidcase(req, res) {
        try{
            await covidcasesService.deleteCovidcase(req.params);

            res.status(201).json('apagou');
        } catch(err) {

            console.error(err);
        }
    }

    async getAllCovidcase(req, res) {
        try{
            const allCases = await covidcasesService.getAllCovidcase();

            res.status(201).json(allCases);

        } catch(err) {

            console.error(err);
        }
    }
}

module.exports = new CovidcasesController();