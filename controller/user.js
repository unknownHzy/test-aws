const userService = new (require('../service/user'))()

module.exports = class UserController {
    async getUsers() {
        return await userService.getUsers()
    }
}