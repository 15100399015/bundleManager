/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import axios, { AxiosRequestConfig } from "axios";
import { message } from "antd";
import { Result, AxiosResultType, HttpMethod, ApiResult } from "@/types";

const instance = axios.create({
  baseURL: "",
  timeout: 10000,
  headers: { "Content-Type": "application/json;charset=utf-8" },
  withCredentials: true,
});

instance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

function doGet<T>(
  url: string,
  params: any = {},
  config: AxiosRequestConfig = {}
): Promise<AxiosResultType<Result<T>>> {
  return instance.get(url, {
    params,
    ...config,
  });
}

function doPost<T>(
  url: string,
  data: any = {},
  config: AxiosRequestConfig = {}
): Promise<AxiosResultType<Result<T>>> {
  return instance.post(url, data, {
    ...config,
  });
}

function doPut<T>(
  url: string,
  data: any = {},
  config: AxiosRequestConfig = {}
): Promise<AxiosResultType<Result<T>>> {
  return instance.put(url, data, {
    ...config,
  });
}

function doDelete<T>(
  url: string,
  data: any = {},
  config: AxiosRequestConfig = {}
): Promise<AxiosResultType<Result<T>>> {
  return instance.delete(url, {
    data,
    ...config,
  });
}

function doRequest<T>(
  method: HttpMethod,
  url: string,
  data: any = {},
  config: AxiosRequestConfig = {}
): Promise<ApiResult<T>> {
  let response: Promise<AxiosResultType<Result<T>>>;
  switch (method) {
    case "get":
      response = doGet(url, data, config);
      break;
    case "post":
      response = doPost(url, data, config);
      break;
    case "put":
      response = doPut(url, data, config);
      break;
    case "delete":
      response = doDelete(url, data, config);
      break;
    default:
      response = doGet(url, data, config);
      break;
  }

  return new Promise<ApiResult<T>>((resolve, reject) => {
    response
      .then((res) => {
        const { message: msg, code, data } = res.data;
        if (code === 0) {
          resolve({
            ok: true,
            data: data,
          });
        } else {
          message.warning(msg);
          resolve({
            ok: false,
            message: msg,
          });
        }
      })
      .catch((err) => {
        const errText = JSON.stringify(err);
        message.warning(errText);
        reject(err);
      });
  });
}

const service = {
  get: <T>(url: string, params: any = {}, config: AxiosRequestConfig = {}) =>
    doRequest<T>("get", url, params, config),
  post: <T>(url: string, data: any = {}, config: AxiosRequestConfig = {}) =>
    doRequest<T>("post", url, data, config),
  put: <T>(url: string, data: any = {}, config: AxiosRequestConfig = {}) =>
    doRequest<T>("put", url, data, config),
  delete: <T>(url: string, data: any = {}, config: AxiosRequestConfig = {}) =>
    doRequest<T>("delete", url, data, config),
};

export default service;
