import axios from "axios";
import { getToken } from "./helper";

const SERVER_URL = "http://localhost:5150";

const register = userInfo => axios.post(`${SERVER_URL}/register`, userInfo);
const login = userInfo => axios.post(`${SERVER_URL}/login`, userInfo);
const getSecret = uid =>
  axios.get(`${SERVER_URL}/secret/${uid}`, {
    headers: { authorization: `Bearer ${getToken()}` }
  });
const makeMap = uid => axios.post(`${SERVER_URL}/makemap/${uid}`, {
  headers: { authorization: `Bearer ${getToken()}` }
});
const saveMap = (uid,map) => axios.post(`${SERVER_URL}/savemap/${uid}`, {
  headers: { authorization: `Bearer ${getToken()}`, map: map }
});
const getMaps = (uid,map) => axios.get(`${SERVER_URL}/getmaps/${uid}`, {
  headers: { authorization: `Bearer ${getToken()}`}
});
const getMap = mapid => axios.get(`${SERVER_URL}/getmap/${mapid}`, {
  headers: { authorization: `Bearer ${getToken()}`}
});
const api = {
  register,
  login,
  getSecret,
  makeMap,
  saveMap,
  getMaps,
  getMap
};
export default api;
