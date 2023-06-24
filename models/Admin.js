const mongoose = require('mongoose');
const user = require('./user');

const { Schema } = mongoose;

const AdminSchema = new Schema({
    legajo: { type:Number, required:true}
})

module.exports = user.discriminator('Admin', AdminSchema);