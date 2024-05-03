const { Schema, model} = require('mongoose')


const userTable = Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
})

module.exports = model('user_collection', userTable)