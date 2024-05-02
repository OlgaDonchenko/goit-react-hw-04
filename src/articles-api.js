import axios from "axios";
axios.defaults.baseURL = "https://api.unsplash.com/";
const API_KEY = "QFHtF_jB1XddBPCXNzRt9Lx9WIqL3MYsBWr77V6XOsI";
const perPage = 18;
export async function findImage(inputValue, page) {
  const response = await axios.get(`/search/photos/?client_id=${API_KEY}`, {
    params: {
      query: "${inputValue}",
      page: page,
      perPage: perPage,
      orientation: "landscape",
    },
  });
  return response.data;
}
