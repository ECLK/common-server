const Joi = require('@hapi/joi');
import { Request, Response, NextFunction } from 'express';
import { HTTP400Error } from '../../utils/httpErrors';

const URL_SCHEMA = Joi.object().keys({
    id: Joi.number().required()
});

export const checkUrlSchema = (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = Joi.validate(req.params, URL_SCHEMA);
    if (error != null) {
        throw new HTTP400Error(error.details[0].message);
    } else {
        next();
    }
}
