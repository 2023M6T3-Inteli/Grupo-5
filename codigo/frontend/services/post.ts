import axios from "@/utils/axios";

const PostService = {
    findById: async (id: string) => {
        try {
            const response = await axios.get(`/post/${id}`);

            return response;
        } catch (err) {
            return err;
        }
    },

    findAll: async () => {
        try {
            const response = await axios.get("/post");

            return response;
        } catch (err) {
            return err;
        }
    }
}

export default PostService;