const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  priority: { type: Number, required: true },
});

module.exports = mongoose.model('Task', TaskSchema);
