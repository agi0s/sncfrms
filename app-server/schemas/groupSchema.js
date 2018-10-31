const mongoose = require('mongoose');

const { Schema } =  mongoose;

const groupSchema = new Schema ({
    name: String,
    city: String
});

module.exports = mongoose.model("Group", groupSchema);
