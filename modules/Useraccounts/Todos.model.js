const Mongoose = require('mongoose');

// 1. Create Schema - What your data looks like
const TodoSchema = Mongoose.Schema({
    name: { type: String, required: [true, "Required field"] },
    description: { type: String, required: [true, "Required field"] },
    isCompleted: { type: Boolean, default: false },
    type:  { type: String, enum: ['personal', 'professional'], required: [true, 'Required field'] },
});

// 2. Create Model - What you can perform with the schema
module.exports = Mongoose.model('todos', TodoSchema)