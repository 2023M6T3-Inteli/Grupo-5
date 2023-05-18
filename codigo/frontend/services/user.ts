import axios from "@/utils/axios"

const UserService = {
  findByID: async (id: String) => {
    try {
      const response = await axios.get(`/user/${id}`)
      return response
    }
    catch (error: any) {
      return error
    }
  },
  findAll: async () => {
    try {
      const response = await axios.get(`/user`)
      return response
    }
    catch (error: any) {
      return error
    }
  }
}

export default UserService