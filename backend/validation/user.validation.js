const Joi = require('joi');

const userSchema = Joi.object({
    firstName: Joi.string().min(1).required(),
    lastName: Joi.string().min(1).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
    dateOfBirth: Joi.date().required(),
    skills: Joi.any().default([]),
    image: Joi.string().optional(),
});

module.exports = userSchema;