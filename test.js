const mysql = require('mysql');
require('dotenv').config();


const connection = mysql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: process.env["DB_USER"],

  // Be sure to update with your own MySQL password!
  password: process.env["DB_PASSWORD"],
  database: process.env["DB_NAME"],
});

const asd = () => {
    connection.query('select * from firstSite_db.patients', (err, res) => {
      //if (err) throw err;
      res.forEach(({ id, first_name, last_name, email, phone_number, date_of_birth }) => {
        console.log(`${id} | ${first_name} | ${last_name} | ${email} | ${phone_number} | ${date_of_birth}`);
      });
      console.log('-----------------------------------');
    });
  };
  
  console.log(asd())
