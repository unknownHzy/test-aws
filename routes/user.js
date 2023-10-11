const express = require("express");
const router = express.Router();

const userController = new (require('../controller/user'))()

router.get('/users', async (req, res) => {
    console.log('start call the router')
    const users = await userController.getUsers()
    console.log('controllers', users)
    res.send(users)
})

module.exports = router