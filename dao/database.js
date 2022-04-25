const db = require('../db/db');

class DatabaseDAO {
    
    async createDatabase(location, date, variant, num_sequences, perc_sequences, num_sequences_total) {
        await db('covidcases').insert({
            location,
            date,
            variant,
            num_sequences,
            perc_sequences,
            num_sequences_total,
        })
    }
}

module.exports = new DatabaseDAO();