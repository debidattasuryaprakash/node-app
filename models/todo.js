const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    type:{
        type:String,
    },
    todo:{
        type:String,
    }
});

const Todo = mongoose.model('Contact',todoSchema);

module.exports = Todo;