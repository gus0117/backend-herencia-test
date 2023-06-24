const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
    dni: { type:Number, required:true},
    nombre: { type:String, required:true},
    apellido: { type:String, required:true}
}, { discriminatorKey: 'tipo' })

module.exports = mongoose.model('User', UserSchema);