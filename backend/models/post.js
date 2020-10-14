const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title : { type : String , required : true},
    msg : { type : String, required : true},
    date : { type : Date, required : true},
    publisher : { type : String, required : true}
});

module.exports = mongoose.model('Post', postSchema);