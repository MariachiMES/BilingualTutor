const Mongoose = require('mongoose')

const userSchema = new Mongoose.Schema({
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
    phone_number: {
        type: String,
        required: false,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    address1: {
        type: String,
        required: false,
        trim: true,
    }, 
    address2: {
        type: String,
        required: false,
        trim: true,
    }, 
    city: {
        type: String, 
        required: false,
        trim: true,
    },
    state: {
        type: String,
        required: false,
        trim: true,
    },
    zip: {
        type: String,
        required: false,
        trim: true,
    },
    is_Carla: {
        type: Boolean,
        required: true,
        default: false,
    },
    is_in_good_standing: {
        type: Boolean,
        required: true,
        default: true
    },

    children: [
        {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'Student',
    },
],
    payments: [{
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'Payments',
    },
],


})

const User = Mongoose.model('User', userSchema)

module.exports = User