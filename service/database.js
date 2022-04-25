const fs = require('fs');
const databaseDAO = require('../dao/database');

class DatabaseService {
    
    createDatabase() {
        const covidCasesJson = readCSVFile('assets/covid-variants.csv');

        function readCSVFile(filepath){
    
            const data = fs.readFileSync(filepath, 'utf8')
            const jsonRaw = csvJSON(data);

            return jsonRaw;
        }

        function csvJSON(csv){
            var lines=csv.split("\n");  
            var result = [];    
            var headers=lines[0].split(","); 
  
            for(var i=1;i<lines.length;i++){  
                var obj = {};
                var currentline=lines[i].split(",");
  
                for(var j=0;j<headers.length;j++){
                    obj[headers[j]] = currentline[j];
                }
  
                result.push(obj);  
            }
  
            return result;
        }

        covidCasesJson.forEach(item => {
            const { location, date, variant, num_sequences, perc_sequences, num_sequences_total } = item;    
            return databaseDAO.createDatabase(location, date, variant, num_sequences, perc_sequences, num_sequences_total);
        });
    }
}

module.exports = new DatabaseService();
