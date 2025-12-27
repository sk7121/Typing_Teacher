const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const records_schema = new Schema({
    date: {
        type: Date,
        default: Date.now,
    },
    data: {
        type: Number,
        required: true,
    },
});

const userSchema = new Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email_id: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone_no: {
        type: Number,
        required: true,
    },

    records: [records_schema],

});

const User = mongoose.model("User", userSchema);

module.exports = User;