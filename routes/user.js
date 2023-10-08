const express = require("express");
const router = express.Router();

const userController = new (require('../controller/user'))()

router.get('/users', async (req, res) => {
    const users = await userController.getUsers()
    console.log('controllers', users)
    res.send(users)
})

module.exports = router