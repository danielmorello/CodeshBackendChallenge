const databaseService = require('../service/database');

class DatabaseController {
    
    async createDatabase(req, res) {
        try{
            await databaseService.createDatabase();

            res.status(201).json('deu certo');
        } catch(err){

            console.error(err);
        }

    }
}

module.exports = new DatabaseController();