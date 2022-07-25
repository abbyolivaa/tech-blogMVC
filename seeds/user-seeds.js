const { User } = require('../models');

const userData = [{
        username: 'abby',
        password: 'lol123'

    },
    {
        username: 'carl',
        password: 'lol123'
    },
    {
        username: 'john',
        password: 'lol123'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;