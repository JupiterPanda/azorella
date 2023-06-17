import { body } from "express-validator";

export const registerValidation = [
    body('email').isEmail(),
    body('password').isLength({min: 5}),
    body('fullName').isLength({min: 3}),
    body('phoneNumber').isLength({min: 10}),
];

export const loginValidation = [
    body('email').isEmail(),
];

export const serviceCreateValidation = [
    body('title').isString(),
    body('price').isNumeric(),
    body('desc').isString(),
];

export const orderCreateValidation = [
    body('numGuests').isNumeric(),
    body('arrivalDate').isDate(),
    body('departureDate').isDate(),
];

export const houseCreateValidation = [
    body('lockDate').isObject(),
    body('maxNumGuests').isNumeric(),
    body('desc').isString(),
];