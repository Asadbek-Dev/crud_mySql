const express = require("express");
const app = express();

const mysql=require('mysql');
const db=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'maktab40',
    database:'cruddatabase'
})

app.get("/", (req, res) => {
    const sqlInsert="SELECT * FROM cruddatabase.movie_reviews;"
    db.query(sqlInsert,(err,result)=>{
        res.send("Hello");

    })
});

app.listen(3001, () => {
  console.log("Running");
});
