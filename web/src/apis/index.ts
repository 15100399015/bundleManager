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

import ApiService from "./service";
import { BundleQueryParamsType } from "./types/req";
import { BundleDeleteResponseType, BundleQueryResponseType } from "./types/res";

export const bundle = {
  list: (params: BundleQueryParamsType) => {
    return ApiService.get<BundleQueryResponseType>("/api/bundle/list", params);
  },
  delete: (id: number) => {
    return ApiService.delete<BundleDeleteResponseType>("/api/bundle/delete", {
      id,
    });
  },
  checkLastVersion: (name: string) => {
    return ApiService.post<BundleDeleteResponseType>(
      "/api/bundle/checkLastVersion",
      { name }
    );
  },
};

const Apis = {
  bundle,
};

export default Apis;
