import axios from "axios";

const url = "http://localhost:3001/persons";

export const createPerson = (personObject) => {
  const req = axios.post(url, personObject);
  return req.then((res) => res.data);
};

export const getAll = () => {
  const req = axios.get(url);
  return req.then((res) => res.data);
};

export const update = (id, newObject) => {
  const req = axios.put(`${url}/${id}`, newObject);
  return req.then((res) => res.data);
};

export const deletePerson = (id) => {
  return axios.delete(`${url}/${id}`);
};
