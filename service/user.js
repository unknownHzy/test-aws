const {User} = require('../models')

module.exports = class UserService {
    async getUsers() {
        const data = await User.findAll({ raw: true })
        console.log(data)
        return data
    }
}
