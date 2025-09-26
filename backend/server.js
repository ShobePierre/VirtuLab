const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'virtulab',
});


db.connect(err => {
    if (err) throw err;
    console.log('MySQL Connected...');
})


//Register
app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const query = `INSERT INTO users (username, email, password) VALUES (?,?,?)`;
    db.query(query, [username, email, hashedPassword], (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(200).send({message: 'User Registered'});
    });
});

// Login
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    
    const query = `SELECT * FROM users WHERE email = ?`;
    db.query(query, [email], async (err, result) => {
      if (err) return res.status(500).send(err);
      if (result.length === 0) return res.status(400).send({ message: 'User not found' });
  
      const user = result[0];
      const isMatch = await bcrypt.compare(password, user.password);
  
      if (!isMatch) return res.status(400).send({ message: 'Invalid Credentials' });
  
      const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1h' });
      res.status(200).send({ token, user: { username: user.username, email: user.email } });
    });
  });


app.listen(5000, () => {
    console.log('Server running on port 5000');
  });


