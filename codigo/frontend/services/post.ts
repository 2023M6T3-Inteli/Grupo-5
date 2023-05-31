import axios from "@/utils/axios";

const API_URL = "http://localhost:5500";

const PostService = {
  create: async (data: any) => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    };

    try {
      const response = await axios.post(`${API_URL}/post`, data, config);

      return response;
    } catch (err) {
      return err;
    }
  },
  findById: async (id: string) => {
    try {
      const response = await axios.get(`${API_URL}/post/${id}`);

      return response;
    } catch (err) {
      return err;
    }
  },
  findAll: async () => {
    try {
      const response = await axios.get(`${API_URL}/post`)
      return response
    }
    catch (error: any) {
      return error
    }
  },
};

export default PostService;
