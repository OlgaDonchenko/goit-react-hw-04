import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchImages = async (query, page) => {
  const response = await axios.get("/search/photos", {
    params: {
      client_id: "QFHtF_jB1XddBPCXNzRt9Lx9WIqL3MYsBWr77V6XOsI",
      query: query,
      page: page,
      per_page: 12,
      orientation: "landscape",
    },
  });
  return response.data.results;
};
