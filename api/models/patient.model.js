const conn = require('../db')

conn.connect((err) => 
{
    if (err) throw err;
      console.log(err);
      
    console.log("Mysql Connected...");
    
});

const get_all_patient = async () => 
{
    let results = [];

    try 
    {
        let sql = 'SELECT * FROM `patient`'
        let results = await conn.awaitQuery(sql);

        return JSON.stringify({ status: 200, error: null, response: results });
        
    } catch (err) 
    {
        return JSON.stringify({ status: 500, error: err, response: results });
    
    }
    
}

module.exports =
{
    get_all_patient
}

  