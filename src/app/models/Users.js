const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Users = new Schema({
    userName : {type: String, require : true},
    password: {type: String, require: true},
})


module.exports = mongoose.model("Users",Users);