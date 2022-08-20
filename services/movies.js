const { movies,personaje } = require("../models")

class movie {

    async create(data) {
        try {
            const mov = await movies.create({
                imagen: data.imagen,
                titulo: data.titulo,
                fecha: data.fecha,
                calificacion: data.calificacion,
                idgenero: data.idgenero
            })

            return {
                created: true,
                mov
            }
        } catch (error) {
            return error
        }
    }

    async updatemov(data) {
        try {
            const datanew = movies.update({
                imagen: data.imagen,
                titulo: data.titulo,
                fecha: data.fecha,
                calificacion: data.calificacion,
                idgenero: data.idgenero
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
            const mov =await movies.destroy({
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
            const mov = await movies.findOne({
                where: {
                    id: id
                }
            })
            return mov
        } catch (error) {
            return error
        }
    }

    async get() {
        try {
            const mov = await movies.findAll({
                attributes: ['imagen', 'titulo','fecha']
            })
            return {
                mov
            }
        } catch (error) {
            return error
        }
    }

    async getBydetalle(id) {
        try {
            const mov = await movies.findAll({
                where: {
                    id: id
                },
                include:[
                    {model:personaje}
                ]
            })
            return mov
        } catch (error) {
            return error
        }
    }

    async getBytitulo(titulo) {
        try {
            const mov = await movies.findAll({
                where: {
                    titulo: titulo
                }
            })
            return mov
        } catch (error) {
            return error
        }
    }

    async getBygenero(id) {
        try {
            const mov = await movies.findAll({
                where: {
                    idgenero: id
                }
            })
            return mov
        } catch (error) {
            return error
        }
    }

    async getorder(order) {
        try {
            const mov = await movies.findAll({
                attributes: ['imagen', 'titulo','fecha'],
                order: [["fecha", order]],
                
            })
            return mov
            
        } catch (error) {
            return error
        }
    }







} module.exports = movie