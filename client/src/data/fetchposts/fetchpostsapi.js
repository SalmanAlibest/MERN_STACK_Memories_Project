import axios from "axios";
const url = "http://localhost:5000/posts";
const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "*",
  "Access-Control-Max-Age": "1728000",
  "Access-Control-Allow-Credentials": "true",
  "Access-Control-Allow-Headers":
    "Origin, X-Requested-With, Content-Type, Accept, Authorization",
};

export const fetchPost = async () =>
  await axios.get(url, {
    headers: headers,
  });

export const updatePost = async (id) => {
  return id;
};
