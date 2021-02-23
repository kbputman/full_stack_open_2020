import axios from "axios";
const baseUrl = "/api/blogs";

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = async (newObject) => {
  const config = {
    headers: { Authorization: token },
  };

  console.log(`adding blog with authorization: ${config}`);
  const response = await axios.post(baseUrl, newObject, config);
  return response.data;
};

const change = async (newObject, blogId) => {
  const config = {
    headers: { Authorization: token },
  };

  const blogUrl = `${baseUrl}/${blogId}`;

  const response = await axios.put(blogUrl, newObject, config);
  return response.data;
};

const remove = async (blogId) => {
  const config = {
    headers: { Authorization: token },
  };

  const blogUrl = `${baseUrl}/${blogId}`;

  const response = await axios.delete(blogUrl, config);
  return response.data;
};

export default { getAll, setToken, create, change, remove };
