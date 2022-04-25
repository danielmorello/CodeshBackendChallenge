const db = require('../db/db');

class CovidcasesDAO {
    async welcome() {
        const mes = ('Backend Challenge 2021 🏅 - Covid Daily Cases');
        return mes;
    }

    async getAllDates() {
        const dates = await db('covidcases').select('date').groupBy('date');

        return dates;
    }

    async countByDate(date) {
        const countByDate = await db('covidcases').where('date', date).distinct('location', 'variant').orderBy('location');

        return countByDate;
    }

    async cumulativeByDate(date) {
        const cumulativeByDate = await db('covidcases').where('date', date).distinct('location', 'variant','num_sequences').orderBy('location');

        return cumulativeByDate;
    }

    async createCovidcase(location, date, variant, num_sequences, perc_sequences, num_sequences_total) {
        await db('covidcases').insert({
            location,
            date,
            variant,
            num_sequences,
            perc_sequences,
            num_sequences_total,
        })
    }

    async deleteCovidcase(id) {
        await db('covidcases').where('id', id).del();
    }

    async getAllCovidcase() {
        const allCases = await db('covidcases').select();

        return allCases;
    }
}

module.exports = new CovidcasesDAO();