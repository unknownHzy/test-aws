const { Sequelize } = require('sequelize');
const router = require('./routes/user')
require('dotenv').config();

const DATABASE = process.env.DB_DATABASE;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const host = process.env.DB_HOST

const sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, {
    host,
    dialect: 'mysql'
}); // Example for sqlite

console.log('DB config', DATABASE, USERNAME, PASSWORD, host)

/*(async function a() {
    try {
        await sequelize.authenticate();
        console.log('\x1b[32mConnection has been established successfully.\x1b[0m');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})()*/

const express = require('express');

// Constants
const PORT = process.env.PORT;
// const HOST = 'localhost';

// App
const app = express();

app.use('/api/v1', router)

app.get('/api/v1/health-check', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`\x1b[32mRunning on port:${PORT}\x1b[0m`);
});

sequelize.authenticate()
    .then((() => {
        console.log('\x1b[32mConnection has been established successfully.\x1b[0m');
    }))
    .catch(e => {
        console.error(e)
        console.error('DB connection error:', e.message);
    })





