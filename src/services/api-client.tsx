import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "479e82834186476a9fa0a4e93253512a",
  },
});
