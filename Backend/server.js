const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "register",
});


app.post('/signup', (req, res) => {
  // Check if the email or username already exists
  const checkDuplicateSql = "SELECT * FROM userinfo WHERE `email` = ? OR `username` = ?";
  const checkDuplicateValues = [req.body.email, req.body.username];

  db.query(checkDuplicateSql, checkDuplicateValues, (checkErr, checkData) => {
    if (checkErr) {
      return res.json("Error");
    }

    if (checkData.length > 0) {
      // Data already exists
      return res.json("DataExists");
    }

    // If no duplicate, proceed with the insertion
    const insertSql = "INSERT INTO userinfo (`username`, `email`, `password`) VALUES (?)";
    const insertValues = [
      req.body.username,
      req.body.email,
      req.body.password
    ];

    db.query(insertSql, [insertValues], (insertErr, insertData) => {
      if (insertErr) {
        return res.json("Error");
      }

      return res.json("Success");
    });
  });
});





app.post('/login', (req, res) => {

  // Perform validation and insert into the database
  const sql = "SELECT * FROM userinfo WHERE `email` = ?";
  db.query(sql, [req.body.email], (err, data) => {
    if (err) {
      return res.json("Error");
    }

    if (data.length > 0) {
      // If email exists in the database
      const storedPassword = data[0].password;
      if (storedPassword === req.body.password) {
        // Passwords match
        return res.json("Success");
      } else {
        // Password does not match
        return res.json("PasswordMismatch");
      }
    }

  })
  // username here
  // Perform validation and insert into the database
  const sql1 = "SELECT * FROM userinfo WHERE `username` = ?";
  db.query(sql1, [req.body.email], (err1, data1) => {
    if (err1) {
      return res.json("Error");
    }

    if (data1.length > 0) {
      // If email exists in the database
      const storedPassword = data1[0].password;
      if (storedPassword === req.body.password) {
        // Passwords match
        return res.json("Success");
      } else {
        // Password does not match
        return res.json("PasswordMismatch");
      }
    }
    else {
      // Username not found in the database
      return res.json("Fail");
    }

  })



}
);


app.listen(8081, () => {
  console.log("Listening");
})
