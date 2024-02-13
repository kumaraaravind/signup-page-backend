const mongoose = require("mongoose");
mongoose.connect('mongodb://0.0.0.0:27017/clientdata')
.then(()=> console.log('db connected'))
.catch((e)=> console.log(e))
