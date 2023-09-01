const Mongoose = require('mongoose')

const paymentSchema = new Mongoose.Schema({
    amount: {
        type: String,
        required: true,
        dateTime: Date,
        user: {
            type: Mongoose.Schema.Types.ObjectId,
            ref: 'User'

        },},
        student: {
            type: Mongoose.Schema.Types.ObjectId,
            ref: 'Student'
        }

    }
)

const Payment = Mongoose.model('Payment', paymentSchema)
 
module.exports = Payment