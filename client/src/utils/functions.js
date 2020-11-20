import axios from "axios";
export const sendMemory = async (data) => {
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

  await axios.post(url, data, {
    headers: headers,
  });
};
export const updateMemory = async (data) => {
  const url = `http://localhost:5000/posts/${data?._id}`;
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Max-Age": "1728000",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  };
  console.log(data);
  await axios.patch(url, data, {
    headers: headers,
  });
};

export const deleteMemory = async (id) => {
  const url = `http://localhost:5000/posts/${id}`;
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Max-Age": "1728000",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  };
  await axios.delete(url, {
    headers: headers,
  });
};
