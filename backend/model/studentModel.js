const { Schema, model} = require('mongoose')

const studentTable = Schema({
    fname: {type: String, required: true},
    lname: {type: String, required: true},
    course:  {type: String, required: true},
    yearlevel: {type: String, required: true},
    status: {type: String, required: true},
    email:{type: String, required: true},
    password:{type: String, required: true}

})

module.exports = model('student_collection', studentTable)