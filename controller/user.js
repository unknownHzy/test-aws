const userService = new (require('../service/user'))()

module.exports = class UserController {
    async getUsers() {
        console.log('start call the UserController')
        return await userService.getUsers()
    }
}