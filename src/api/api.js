import { TOKEN } from "./config";
import axios from "axios";
const API_ROUTE = `https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?token=${TOKEN}`;

// Get All Messages

export const getAllMessages = async () => {
  const { data } = await axios.get(API_ROUTE);
  return data;
}

// Post Message

export const postMessage = async (message) => {
  const { data } = await axios.post(API_ROUTE, {
    message: message.message,
    author: message.author
  })
  return data;
}