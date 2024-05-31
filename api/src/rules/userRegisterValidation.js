import { body } from 'express-validator';

export const userRegisterValidationRules = () => {
    return [
        body('firstName').notEmpty().withMessage('First name is required.'),
        body('lastName').notEmpty().withMessage('Last name is required.'),
        body('email').isEmail().withMessage('Invalid email address.'),
        body('password')
            .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long.')
            .matches(/[a-z]/).withMessage('Password must contain at least one lowercase letter.')
            .matches(/[A-Z]/).withMessage('Password must contain at least one uppercase letter.')
            .matches(/[0-9]/).withMessage('Password must contain at least one number.')
            .matches(/[^a-zA-Z0-9]/).withMessage('Password must contain at least one special character.')
    ];
};