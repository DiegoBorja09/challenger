const { generos } = require("../models")

class genero {

    async create(data) {
        try {
            const gen = await generos.create({
                nombre: data.nombre,
                imagen: data.imagen
            })

            return {
                created: true,
                gen
            }
        } catch (error) {
            return error
        }
    }

    async updategen(data) {
        try {
            const datanew = generos.update({
                nombre: data.nombre,
                imagen: data.imagen
            },{
            where: {
                    id: data.id
                }
            })
             return {
                update: true,
                data
            }
        } catch (error) {
            return error
        }

    }

    async delete(id){
        try {
            const gen =await generos.destroy({
                where:{
                    id:id
                }
            })
            
            return {
                succes:true,
                message:"registro eliminado"
            }

        } catch (error) {
            return error.message
        }
    }

    async getByid(id) {
        try {
            const gen = await generos.findOne({
                where: {
                    id: id
                }
            })
            return gen
        } catch (error) {
            return error
        }
    }

    async get() {
        try {
            const gen = await generos.findAll({
                
            })
            return {
                gen
            }
        } catch (error) {
            return error
        }
    }



} module.exports = genero