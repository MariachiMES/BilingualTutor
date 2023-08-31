const Mongoose = require('mongoose')

const studentSchema = new Mongoose.Schema({
    firstName: {
        type: String, 
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    pronouns: {
        type: String,
        required: false,
        trim: true,
    },
    gender: {
        type: String,
        required: true,
        trim: true,
    },
    nickname: {
        type: String,
        required: true,
        trim: true,
    },
    parent: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    tutor: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Student = Mongoose.model('Student', studentSchema)

module.exports = Student