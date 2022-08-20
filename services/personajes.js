const { personaje,movies } = require("../models")

class Personajes {

    async create(data) {
        try {
            const per = await personaje.create({
                nombre: data.nombre,
                imagen: data.imagen,
                edad: data.edad,
                peso: data.peso,
                historia: data.historia
            })

            return {
                created: true,
                per
            }
        } catch (error) {
            return error
        }
    }


    async updateper(data) {
        try {
            const datanew = personaje.update({
                nombre: data.nombre,
                imagen: data.imagen,
                edad: data.edad,
                peso: data.peso,
                historia: data.historia
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
            const per =await personaje.destroy({
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
            const per = await personaje.findOne({
                where: {
                    id: id
                }
            })
            return per
        } catch (error) {
            return error
        }
    }
    async get() {
        try {
            const per = await personaje.findAll({
                attributes: ['imagen', 'nombre']
            })
            return {
                per
            }
        } catch (error) {
            return error
        }
    }

    async getByname(name) {
        try {
            const per = await personaje.findAll({
                where: {
                    nombre: name
                }
            })
            return per
        } catch (error) {
            return error
        }
    }
    async getByedad(edad) {
        try {
            const per = await personaje.findAll({
                where: {
                    edad: edad
                }
            })
            return per
        } catch (error) {
            return error
        }
    }

    async getBypeso(peso) {
        try {
            const per = await personaje.findAll({
                where: {
                    peso: peso
                }
            })
            return per
        } catch (error) {
            return error
        }
    }

    async getBymovies(id) {
        try {
            const per = await movies.findAll({
                where: {
                    id: id
                },
                include:[
                    {model:personaje}
                ]
            })
            return per
        } catch (error) {
            return error
        }
    }

    async getBydetalle(id) {
        try {
            const per = await personaje.findAll({
                where: {
                    id: id
                },
                include:[
                    {model:movies}
                ]
            })
            return per
        } catch (error) {
            return error
        }
    }

} module.exports = Personajes