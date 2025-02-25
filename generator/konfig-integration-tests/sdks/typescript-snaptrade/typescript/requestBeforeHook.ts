import { Configuration } from "./configuration";
import { AxiosRequestConfig } from "axios";

export function requestBeforeHook(request: {
  requestBody?: any;
  queryParameters: Record<string, any>;
  path: string;
  requestConfig: AxiosRequestConfig;
  configuration?: Configuration;
  pathTemplate: string;
  httpMethod: string;
  [key: string]: any;
}): void {
  const { queryParameters } = request;
  queryParameters["timestamp"] = Math.round(
    new Date().getTime() / 1000
  ).toString();
}
