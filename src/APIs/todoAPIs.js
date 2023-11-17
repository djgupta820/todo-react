import axios from "axios"
import {TODO_API_SERVER} from "../../src/Constants"

export default class TodoAPI{
    static getAllTodo(){
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.get(TODO_API_SERVER)
                resolve(response.data)
            } catch (error) {
                reject(error)
            }
        })
    }

    static removeTodo(id){
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.delete(`${TODO_API_SERVER}/${id}`)
                resolve(response.data)
            } catch (error) {
                reject(error)
            }
        })
    }

    static addNewTodo(todo){
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.post(TODO_API_SERVER, todo)
                resolve(response.data)
            } catch (error) {
                reject(error)
            }
        })
    }
}