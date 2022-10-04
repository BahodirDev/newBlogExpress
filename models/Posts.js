const { Schema, model } = require("mongoose")

const PostScheme = new Schema({
    title:String,
    post:String,
    // auth:{
    //     type:Schema.Types.ObjectId,
    //     ref:'Author'
    // }
});

module.exports = model('Posts',PostScheme);