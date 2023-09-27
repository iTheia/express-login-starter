


class validatePassword {

    constructor(userPassword,Joi) {
        this.userPassword = userPassword
        this.Joi = Joi
        this.passwordSchema
    }

    _configuration() {
        this.passwordSchema = this.Joi.string()
            .min(6)
            .max(12)
            .pattern(new RegExp('^[a-zA-Z0-9!@#$%^&*()_+\\-=\\[\\]{};:\'"|,.?<>\\/\\\\]{3,30}$'))
    }

    validatePassword() {

        this._configuration()

        const { error, value } = this.passwordSchema.validate(this.userPassword)


        if (error) {
            return(`Password validation error: ${error.details[0].message}`)
        } else {
            return(`valid password: ${value}`)
        }
    }
}


module.exports = validatePassword