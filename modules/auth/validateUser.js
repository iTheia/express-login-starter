
class validateUser {

    constructor(NameUser, Joi) {
        this.NameUser = NameUser
        this.Joi = Joi
        this.userSchema
    }

    _configuration() {
        this.userSchema = this.Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required()
    }

    validate() {

        this._configuration()

        const { error, value } = this.userSchema.validate(this.NameUser)


        if (error) {
            return (`user validation error: ${error.details[0].message}`)
        } else {
            return (`valid user: ${value}`)
        }
    }
}