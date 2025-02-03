import axios from 'axios';

const BaseURL = axios.create({
  // baseURL: "https://my-backend-ecommerce.vercel.app/",
  baseURL: `${process.env.NEXT_PUBLIC_Backend_URL}`,
});
export default BaseURL;