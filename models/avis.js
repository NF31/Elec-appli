const mongoose = require('mongoose')
const validator = require('validator')

const avisSchema = new mongoose.Schema({
    nom: {
        type:String,
        required: [true, 'Veuillez entrer un nom'],
        trim: true,
        vaildate: {
            validator: function (v){
                return /^(?=.*\d).{2,25}$/.test(v);
            },
            message: 'Le nom doit contenir entre 2 et 25 charactères'
        },
    },
    prenom: {
        type:String,
        required: [true, 'Veuillez entrer un nom'],
        trim: true,
        vaildate: {
            validator: function (v){
                return /^(?=.*\d).{2,15}$/.test(v);
            },
            message: 'Le nom doit contenir entre 2 et 15 charactères'
        },
    },
    email: {
        type: String,
        required: [true, 'veuillez entrer votre Email'],
        unique: true,
        validate: [validator.isEmail, 'Email invalide'],
        lowercase: true,
    },
    stars: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    }


}, {timestamps: true})

const Avis = mongoose.model('Avis', avisSchema, 'avis')
module.exports = Avis;