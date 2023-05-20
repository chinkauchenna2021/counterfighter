
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'counterfighter'
});
 
connection.connect();
const checkedDrugs = (req, res) => {
    connection.query('SELECT * FROM counterfightertable WHERE id=?', ['1'], function (err, result, fields) {
        if (err) {
            console.log(err)
        }
         console.log(result)
    })
        

}

module.exports = {
    checkedDrugs
}
