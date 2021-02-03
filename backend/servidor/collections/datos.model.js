var mongoose = require('mongoose');

const DatosSchema = new mongoose.Schema({
    _id: {
        type: String,
    },
    name: {
        first: {type: String},
        last: {type: String},
    },
    user: {
        type: String,
    },
    latitud: {
        type: String,
    },
    longitud: {
        type: String,
    },
    tags: {
        type: Array,
        default: []
    },
    company: {
        type: String,
    },
});

module.exports = mongoose.model('datos', DatosSchema, "datos");