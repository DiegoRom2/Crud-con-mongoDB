import { MongoClient, ObjectId } from 'mongodb'

const client = new MongoClient('mongodb://root:12345678@localhost:27017/')
const pizzasDb = () => client.db('pizzeria').collection('pizzas')

const sleep = (ms) => new Promise(r => setTimeout(r, ms))

/**
 * Regresa una lista de las pizzas
 * @returns []
 */
export async function obtenerTodasLasPizzasAsync(){
    const pizzas = await pizzasDb().find().toArray()
    return pizzas
}

/**
 * Regresa una pizza por su ID buscado o undefined si no lo encuentra
 * @param {*} id 
 */
export async function obtenerPizzaPorIdAsync(id){
    const pizza = await pizzasDb().findOne({ _id: new ObjectId(id) })
    return pizza ?? undefined
}

/**
 * 
 * @param {*} pizza 
 * @returns {int}
 */
export async function agregarPizzaAsync(pizza){
    await sleep(1000)
    const { insertedId: id } = await pizzasDb().insertOne(pizza)
    return id
}

export async function actualizarPizzaAsync(id, pizza){
    await pizzasDb().updateOne({ _id: new ObjectId(id) }, { $set: pizza })
}

export async function eliminarPizzaAsync(id){
    await pizzasDb().deleteOne({ _id: new ObjectId(id) })
}