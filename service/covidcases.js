const covidcaseDAO = require('../dao/covidcases');

class CovidcasesService {
    welcome() {
        return covidcaseDAO.welcome();
    }

    getAllDates() {
        return covidcaseDAO.getAllDates();
    }

    countByDate(reqParams) {
        const date = reqParams.date;

        return covidcaseDAO.countByDate(date);
    }

    cumulativeByDate(reqParams) {
        const date = reqParams.date;

        return covidcaseDAO.cumulativeByDate(date);
    }

    createCovidcase(covidcaseDto) {
        const { location, date, variant, num_sequences, perc_sequences, num_sequences_total } = covidcaseDto;
        return covidcaseDAO.createCovidcase(location, date, variant, num_sequences, perc_sequences, num_sequences_total);
    }

    deleteCovidcase(reqParams) {
        const id = reqParams.id;

        return covidcaseDAO.deleteCovidcase(id);
    }

    getAllCovidcase() {
        return covidcaseDAO.getAllCovidcase();
    }
}

module.exports = new CovidcasesService();
