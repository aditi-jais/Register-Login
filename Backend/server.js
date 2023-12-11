const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

// MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "register",
});




// API Endpoints

// Example Signup Endpoint
app.post('/signup', (req, res) => {

  // Perform validation and insert into the database
  const sql = "INSERT INTO userinfo (`username`, `email`, `password`) VALUES (?)";
  const value=[
    req.body.name,
    req.body.email,
    req.body.password
  ]
  devicePixelRatio.query(sql,[values],(err,data)=>{
    if(err){
        return res.json("Error");
    }
    return res.json(data);
  })
});

// // Example Login Endpoint
// app.post('/api/login', (req, res) => {
//   const { email, password } = req.body;

//   // Perform validation and check credentials in the database
//   const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
//   db.query(sql, [email, password], (err, result) => {
//     if (err) {
//       console.error('MySQL query error:', err);
//       res.status(500).json({ error: 'Internal Server Error' });
//     } else if (result.length === 0) {
//       res.status(401).json({ error: 'Invalid email or password' });
//     } else {
//       const user = result[0];
//       res.status(200).json({ message: 'Login successful', user });
//     }
//   });
// });


app.listen(8081, ()=>{
    console.log("Listening");
})
