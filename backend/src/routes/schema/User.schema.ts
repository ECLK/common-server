const Joi = require('@hapi/joi');
import { Request, Response, NextFunction } from 'express';
import { HTTP400Error } from '../../utils/httpErrors';


/**
 * URL pattern parameter value validation
 */
const URL_SCHEMA = Joi.object().keys({
    userId: Joi.number().required()
});

export const checkUrlSchema = (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = Joi.validate(req.params, URL_SCHEMA);
    if (error != null) {
        throw new HTTP400Error(error.details[0].message);
    } else {
        next();
    }
}


/**
 * POST data validations
 */
const POST_SCHEMA = Joi.object().keys({
    firstName: Joi.string().min(3).required(),
    lastName: Joi.string().min(3).required(),
    isActive: Joi.boolean().required()
});

export const checkPostDataSchema = (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = Joi.validate(req.body, POST_SCHEMA);
    if (error != null) {
        throw new HTTP400Error(error.details[0].message);
    } else {
        next();
    }
}
