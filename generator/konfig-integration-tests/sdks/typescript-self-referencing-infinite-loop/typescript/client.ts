/*
typescript-self-referencing-infinite-loop API

A simple API based for testing typescript-self-referencing-infinite-loop.

The version of the OpenAPI document: 1.0.0
Contact: support@example.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import { AxiosRequestConfig } from "axios";
import {
  TestApi,
} from "./api";
import { Configuration, ConfigurationParameters } from "./configuration";
import { TypescriptSelfReferencingInfiniteLoopClientCustom } from "./client-custom";

export class TypescriptSelfReferencingInfiniteLoopClient extends TypescriptSelfReferencingInfiniteLoopClientCustom {
  readonly test: TestApi;

  constructor(configurationParameters: ConfigurationParameters) {
    super(configurationParameters);
    const configuration = new Configuration(configurationParameters);
    this.test = new TestApi(configuration);
  }

}
