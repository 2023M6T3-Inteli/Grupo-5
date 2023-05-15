import axios from "axios"

const PORT = 5500;
const HOST = 'localhost';
// const API_URL = ``
const API_URL = `http://${HOST}:${PORT}`

const UserService = {
  findByID: async (id: String) => {
    try {
      const response = await axios.get(`${API_URL}/user/${id}`)
      return response
    }
    catch (error: any) {
      return error
    }
  },
  findAll: async () => {
    try {
      const response = await axios.get(`${API_URL}/user`)
      return response
    }
    catch (error: any) {
      return error
    }
  }
}

export default UserService