const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    cusine: {
        required: true,
        type: String
    },
    description:{
        required:true,
        type:String
    },
     img:
    {
        data: Buffer,
        contentType: String
    }
})
dataSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('Data', dataSchema)