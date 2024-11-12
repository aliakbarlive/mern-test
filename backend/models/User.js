const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    skills:{type: [String], required: true, default: []},
    image: { type: String, required: true },
}, { timestamps: true, versionKey: false });

userSchema.index({ email: 1 }, { unique: true });

module.exports = mongoose.model('User', userSchema);