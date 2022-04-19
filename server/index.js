const express = require("express");
const app = express();

const mysql=require('mysql');
// const db=mysql.createPool({
//     host:'localhost',
//     user:'root',
//     password:'test1234',
//     connectionLimit:10
// })

// app.get("/", (req, res) => {
//     const sqlInsert=`INSERT INTO cruddatabase.movie_reviews (movieName, movieReview) VALUES ('Company Inc', 'Highway 37')`;
//     db.query(sqlInsert,(err,result)=>{
//         res.send("Hello");

//     })
// });
// var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "test1234",
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = `INSERT INTO cruddatabase.movie_reviews (movieName, movieReview) VALUES ('Company Inc', 'Highway 37')`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});

app.listen(3001, () => {
  console.log("Running");
});
