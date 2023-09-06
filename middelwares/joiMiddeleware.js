import joi from 'joi'

const user = joi.object({
    name: joi.string().required().min(3),
    email: joi.string().email().required(),
    password: joi.string().required().min(8),
    tc: joi.boolean().required()
})

const myValidation = {
    user
}

export default myValidation;