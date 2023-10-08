const { Sequelize } = require('sequelize');
const router = require('./routes/user')

const DATABASE = 'test';
const USERNAME = 'root';
const PASSWORD = 'root';

const sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
}); // Example for sqlite

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
const PORT = 9999;
const HOST = '0.0.0.0';

// App
const app = express();

app.use('/api/v1', router)

app.get('/api/v1/health-check', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, HOST, () => {
    console.log(`\x1b[32mRunning on http://${HOST}:${PORT}\x1b[0m`);
});

sequelize.authenticate()
    .then((() => {
        console.log('\x1b[32mConnection has been established successfully.\x1b[0m');
    }))
    .catch(e => {
        console.error(e)
        console.error('DB connection error:', e.message);
    })





