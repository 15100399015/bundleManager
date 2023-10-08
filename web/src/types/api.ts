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

// 经过处理后再业务代码中拿到的接口结结构类型
export interface ApiResult<T> {
  ok: boolean;
  data?: T;
  message?: string;
}

// 自定义返回结构类型
export interface Result<T> {
  code: number;
  message?: string;
  data: T;
}

export interface AxiosResultType<T> {
  status: number;
  statusText: string;
  data: T;
}

export type HttpMethod = "get" | "post" | "put" | "delete";
