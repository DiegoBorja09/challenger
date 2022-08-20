const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
require("dotenv").config()
const User = require("./users")
const jwtSecret = process.env.JWT_SECRET


class Auth {
    async login(data) {
        const { email, password } = data

        const userServ = new User()
        const user = await userServ.getByEmail(email)

        if (user && await this.#compare(password, user.password)) {
            return this.#getUserData(user)
        }

        return {
            success: false,
            errors: ["Las credenciales son incorrectas"]
        }

    }

    async signup(data) {

        try {


            if (data && data.password) {
                data.password = await this.#encrypt(data.password)
            }
            const userServ = new User()
            const result = await userServ.create(data)
            if (result.created) {
                return this.#getUserData(result.user)

            }
        } catch (error) {
            return {
                success: false,
                errors: "Campos invalidos"
            }
        }
        return this.#getUserData(result.user)

    }







    #createToken(payload) {
        const token = jwt.sign(payload, jwtSecret, {
            expiresIn: '7d'
        })
        return token
    }


    async #encrypt(string) {
        try {
            const salt = await bcrypt.genSalt()
            const hash = await bcrypt.hash(string, salt)

            return hash
        } catch (error) {
            console.log(error)
        }
    }

    async #compare(string, hash) {
        try {
            return await bcrypt.compare(string, hash)
        } catch (error) {
            return false
        }
    }

    #getUserData(user) {
        const userData = {
            id: user.id,
            name: user.name,
            email: user.email

        }

        const token = this.#createToken(userData)
        return {
            success: true,
            user: userData,
            token
        }
    }

} module.exports = Auth