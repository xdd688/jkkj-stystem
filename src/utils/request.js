import axios from "axios";
import store from "@/store";
// 开发环境           生产环境          测试环境
// development      production       production
// npm run dev      npm run build    npm run build
const isDev = process.env.NODE_ENV == "development";
const request = axios.create({
  baseURL: "http://192.168.1.110:8081",
  timeout: 60000,
});
// let loading = null;
// 添加请求拦截器
request.interceptors.request.use(function (config) {
    console.log(store);
    
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
request.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});



function ajax(config) {
  //   const loading = ElLoading.service({
  //     lock: true,
  //     text: "数据加载中。。。",
  //     background: "rgba(0, 0, 0, 0.3)",
  //   });
  //   loading.close();

  const { url = "", method = "GEt", data = {}, headers = {} } = config;
  switch (method.toUpperCase()) {
    case "GET":
      // get 请求配置，params 请求参数
      return request.get(url, { params: data });

    case "POST":
      // 判断当前请求提交的是表单数据
      if (headers["content-type"] == "application/x-www-form-urlencoded") {
        // 数据进行序列化，格式化一下数据
        const obj = new URLSearchParams();
        for (const key in data) {
          obj.append(key, data[key]);
        }
        return request.post(url, obj, { headers });
      }

      // 判断当前请求提交的是文件数据
      if (headers["content-type"] == "multipart/form-data") {
        const obj = new FormData();
        for (const key in data) {
          obj.append(key, data[key]);
        }
        return request.post(url, obj, { headers });
      }

      // 判断当前请求提交的是 JSON 数据
      return request.post(url, data);

    case "DELETE":
      // 删除数据
      return request.delete(url, { data });

    case "PUT":
      // 修改数据
      return request.put(url, data);

    case "PATCH":
      // 更新局部资源
      return request.patch(url, data);

    default:
      // 如果前面都不是
      return request.request(config);
  }
}
export default ajax;
