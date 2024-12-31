var express = require('express');
var app = require('express');
var router = express.Router();
var dbConn  = require('../../config/db.config');


router.get('/location', function(req, res, next) {      
    dbConn.query('SELECT * FROM locatoons',function(err,rows)     {
        if(err) {
            throw err 
        } else {
            return res.data
        }
    });
});



app.post("/location", async (req, res) => {
    try {
      const { id, name, latitude, longitude } = req.body;
      const [{ insertId }] = await connection.promise().query(
        `INSERT INTO locatoons (id, name, latitude, longitude) 
            VALUES (?, ?,?)`,
        [name, address, country]
      );
      res.status(202).json({
        message: "User Created",
      });
    } catch (err) {
      res.status(500).json({
        message: err,
      });
    }
  });