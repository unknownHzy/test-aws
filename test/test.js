const assert = require("assert");
const axios = require("axios");
const server = require('../server')

const BASE_URL = 'http://localhost:9999'
const callAPI = async (url, method, body) => {
    try {
        const options = {
            url: `${BASE_URL}/${url}`,
            method,
            data: body,
            timeout: 120000,
            headers: {},
        }
        const response = await axios(options);
        const data = response.data;
        return data;
    } catch (error) {
        console.log("Error (Call API): ", error);
    }
};

after(function () {
    setTimeout(() => {
        process.exit();
    }, 100);
});

describe('api', function () {
    it('respond with an array of users', async function () {
        console.debug('just debug')
        const data = await callAPI('api/v1/users', 'get', {})
        console.log('user list test', data)
        assert.equal(1, data.length)
    });
});