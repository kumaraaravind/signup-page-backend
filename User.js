const mongoose = require("mongoose")

const usersSchema = new mongoose.Schema({
    fullname : String,
    name : String,
    email : String,
    password : String,
    resetPassword : String
});
module.exports = mongoose.model("user",usersSchema);
