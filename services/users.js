const { User} = require("../models")

class Users{

    async getByEmail(email){
        try {
            const user =await User.findOne({
                where:{
                    email:email
                }
            })
            return user
        } catch (error) {
            return error
        }
    }

    async create(data){
       try {
        const user= await User.create({
            name:data.name,
            email:data.email,
              password:data.password
            })

            return {
                created:true,
                user
            }
       } catch (error) {
        return error
       }
    }



}

module.exports = Users