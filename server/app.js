// app.js
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

// Import and use other route modules here, e.g.:
// const authRoutes = require('./routes/authRoutes');
// app.use('/api/auth', authRoutes);

module.exports = app;
