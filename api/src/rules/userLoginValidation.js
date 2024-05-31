import { body } from 'express-validator';

export const userLoginValidationRules = () => {
    return [
        body('email').isEmail().withMessage('Invalid email address.'),
        body('password').notEmpty().withMessage('Password is required.')
    ];
}