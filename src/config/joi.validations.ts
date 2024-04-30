import * as Joi from 'joi';

export const JoiVAlidationSchema = Joi.object({
    MONGODB       : Joi.required(),
    DBNAME        : Joi.required(),
    PORT          : Joi.number().default(3000),
    DEFAULT_LIMIT : Joi.number().default(6)
})