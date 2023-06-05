const moment = require('moment/moment');
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const posts = new Schema({
    title :{
        type: String,
        required : true,  
        minLength: 25     
    },

    text :{
        type: String,
        required : true,
        minLength: 40 
    },

    create_at:{ 
    type: Date,
    default: Date.now,
    get:function(createAt){
        return moment(createAt).format('DD/MM/YYYY, h:mm:ss a')
    }
    }
}, {timestamps: true})


module.exports = mongoose.model('Feeds', posts)
