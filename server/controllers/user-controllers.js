const {User} = require('../models')

const {signToken} = require('../utils/auth')

module.exports = {
    async getSingleUser({user = null, params}, res) {
        const foundUser = await User.findOne({
            $or: [{_id: user ? user.id : params.id}, {username: params.username}]
        })

        if (!foundUser) {
            return res.status(400).json({message: 'cannot find the user damnit'})
        }
        res.json(foundUser)
        console.log(foundUser)
    },

    async createUser({body}, res) {
        const user = await User.create(body)

        if (!user) {
            return res.status(400).json({message: 'cannot find this user'})
        }
            const correctPw = await user.isCorrectPassword(body.password)

            if (!correctPw){
                return res.status(400).json({message: 'no.  not going to work.  wrong password'})
            }
        }
    }
