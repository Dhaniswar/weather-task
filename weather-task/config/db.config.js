var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    user: "john",
    password: "test@123",
    database: "weatherdb",
    port: process.env.PORT || 8080,
    dialect: "postgres",

});


connection.connect((error) => {
  if(!error) {
    console.log(error);
  }
  else {
    console.log('Database Connected Successfully..!!');
  }
});



