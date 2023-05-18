import axios from "@/utils/axios"

const ProjectService = {
  findByID: async (id: String) => {
    try {
      const response = await axios.get(`/project/${id}`)
      return response
    }
    catch (error: any) {
      return error
    }
  },

  findAll: async () => {
    try {
      const response = await axios.get(`/project`)
      return response
    }
    catch (error: any) {
      return error
    }
  }
}

export default ProjectService