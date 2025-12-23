require("dotenv").config();
const db = require("./db");

const express = require('express');
const cors = require('cors');
const studentRoutes = require('./routes/students');

const app = express();
app.use(cors());
app.use(express.json());

app.use("/students", studentRoutes);

// Simple test route
app.get('/', (req, res) => {
  res.send('Backend is working!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
