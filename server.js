const express = require('express');
const app = express();
app.use(express.json()); // so we can read JSON in requests

const mongoose = require('mongoose');

// Simple route
app.get('/', (req, res) => {
  res.send('Task Calculator API is running!');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
mongoose.set('debug', true);
const taskRoutes = require('./routes/tasks');
app.use('/tasks', taskRoutes);
mongoose
  .connect('')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });
