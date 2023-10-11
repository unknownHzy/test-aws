const {User} = require('../models')

module.exports = class UserService {
    async getUsers() {
        console.log('start call the UserService')
        const data = await User.findAll({ raw: true })
        console.log('UserService getUsers', data)
        return data
    }
}
