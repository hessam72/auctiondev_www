import axios from "axios";
import * as Uri from "./enum/uri_api";
const instance = axios.create({
  //   withCredentials: true,
  baseURL: Uri.BASEApi,
  responseType: "json",
  headers: {
    Authorization: localStorage.getItem("auth")
      ? "Bearer " + JSON.parse(localStorage.getItem("auth")).token
      : null,
  },
  //   transformRequest: [
  //     function (data, headers, t) {
  //       // Do whatever you want to transform the data
  //       console.info("transformRequest", data);
  //       return data;
  //     },
  //   ],

  //   // `transformResponse` allows changes to the response data to be made before
  //   // it is passed to then/catch
  //   transformResponse: [
  //     function (data) {
  //       // Do whatever you want to transform the data
  //       console.log("transformResponse", data);
  //       return data;
  //     },
  //   ],
});
// instance.defaults.timeout = 5000;

export default {
  axios,
  get: instance.get,
  post: instance.post,
  put: instance.put,
  patch: instance.patch,
  delete: instance.delete,
};

export { Uri };
