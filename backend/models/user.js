const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
        maxlength: 20,
        match: /^[a-zA-Z0-9_\-!@#$%^&*()+=<>?{}]+$/,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate: {
            validator: function (v) {
                return /^\d{10}$/g.test(v);
            },
            message: props => `${props.value} is not a valid phone number! Please enter a 10-digit number without spaces or special characters.`,
        },
    },
    password: {
        type: String,
        required: true,
        minlength: 4,
    },
})


const UserList = mongoose.model("user", userSchema);

module.exports = UserList;