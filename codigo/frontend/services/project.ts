import axios from "@/utils/axios"

const API_URL = "localhost:3001/project"

const ProjectService = {
  findByID: async (id: String) => {
    try {
      const response = await axios.get(`${API_URL}/Project/${id}`)
      return response
    }
    catch (error: any) {
      return error
    }
  },

  findAll: async () => {
    try {
      const response = await axios.get(`${API_URL}/Project`)
      return response
    }
    catch (error: any) {
      return error
    }
  },
  create: async (data: any) => {
    const config = {
      // headers: {
      //   "Authorization": `Bearer ${cookie.load("token")}`
      // }
    }

    try {
      const response = await axios.post(`${API_URL}/Project/create`, data, config)
      return response
    }
    catch (error: any) {
      return error.response.data
    }
  },
  edit: async (data: any) => {
    try {
      const response = await axios.put(`${API_URL}/Project/update/${data.projectId}`, data)
      return response
    }
    catch (error: any) {
      return error.response.data
    }
  },
  delete: async (id: string) => {
    try {
      const response = await axios.delete(`${API_URL}/Project/delete/${id}`)
      return response
    }
    catch (error: any) {
      return error.response.data
    }
  },
  // filter: async (data: any) => {
  //   const config = {
  //     headers: {
  //       "Authorization": `Bearer ${cookie.load("token")}`
  //     }
  //   }

  //   try {
  //     const response = await axios.post(`${API_URL}/Project/filter`, data, config)
  //     return response
  //   }
  //   catch (error: any) {
  //     return error.response.data
  //   }
  // },
  approve: async (token: string, status: string) => {
    try {
      const response = await axios.put(`${API_URL}/Project/approve/${token}`, {
        status: status,
        feedback: ""
      })
      return response
    }
    catch (error: any) {
      return error.response.data
    }
  },
  reprove: async (token: string, status: string, feedback: string) => {
    try {
      const response = await axios.put(`${API_URL}/Project/approve/${token}`, {
        status: status,
        feedback: feedback
      })
      return response
    }
    catch (error: any) {
      return error.response.data
    }
  },
  // finish: async (id: string) => {
  //   const config = {
  //     headers: {
  //       "Authorization": `Bearer ${cookie.load("token")}`
  //     }
  //   }

  //   try {
  //     const response = await axios.put(`${API_URL}/Project/Finalize/${id}`, {}, config)
  //     return response
  //   }
  //   catch (error: any) {
  //     return error.response.data
  //   }
  // }
}

export default ProjectService