# coding: utf-8

"""
    python-invalid-response API

    A simple API based for testing python-invalid-response.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

from dataclasses import dataclass
import typing_extensions
import urllib3
from pydantic import RootModel
from python_invalid_response.request_before_hook import request_before_hook
import json
from urllib3._collections import HTTPHeaderDict

from python_invalid_response.api_response import AsyncGeneratorResponse
from python_invalid_response import api_client, exceptions
from datetime import date, datetime  # noqa: F401
import decimal  # noqa: F401
import functools  # noqa: F401
import io  # noqa: F401
import re  # noqa: F401
import typing  # noqa: F401
import typing_extensions  # noqa: F401
import uuid  # noqa: F401

import frozendict  # noqa: F401

from python_invalid_response import schemas  # noqa: F401

from python_invalid_response.model.dict_instead_of_list_or_scalar import DictInsteadOfListOrScalar as DictInsteadOfListOrScalarSchema

from python_invalid_response.type.dict_instead_of_list_or_scalar import DictInsteadOfListOrScalar

from ...api_client import Dictionary
from python_invalid_response.pydantic.dict_instead_of_list_or_scalar import DictInsteadOfListOrScalar as DictInsteadOfListOrScalarPydantic

SchemaFor200ResponseBodyApplicationJson = DictInsteadOfListOrScalarSchema


@dataclass
class ApiResponseFor200(api_client.ApiResponse):
    body: DictInsteadOfListOrScalar


@dataclass
class ApiResponseFor200Async(api_client.AsyncApiResponse):
    body: DictInsteadOfListOrScalar


_response_for_200 = api_client.OpenApiResponse(
    response_cls=ApiResponseFor200,
    response_cls_async=ApiResponseFor200Async,
    content={
        'application/json': api_client.MediaType(
            schema=SchemaFor200ResponseBodyApplicationJson),
    },
)
_all_accept_content_types = (
    'application/json',
)


class BaseApi(api_client.Api):

    def _dict_instead_of_list_or_scalar_mapped_args(
        self,
    ) -> api_client.MappedArgs:
        args: api_client.MappedArgs = api_client.MappedArgs()
        return args

    async def _adict_instead_of_list_or_scalar_oapg(
        self,
        skip_deserialization: bool = True,
        timeout: typing.Optional[typing.Union[float, typing.Tuple]] = None,
        accept_content_types: typing.Tuple[str] = _all_accept_content_types,
        stream: bool = False,
        **kwargs,
    ) -> typing.Union[
        ApiResponseFor200Async,
        api_client.ApiResponseWithoutDeserializationAsync,
        AsyncGeneratorResponse,
    ]:
        """
        :param skip_deserialization: If true then api_response.response will be set but
            api_response.body and api_response.headers will not be deserialized into schema
            class instances
        """
        used_path = path.value
    
        _headers = HTTPHeaderDict()
        # TODO add cookie handling
        if accept_content_types:
            for accept_content_type in accept_content_types:
                _headers.add('Accept', accept_content_type)
        method = 'get'.upper()
        request_before_hook(
            resource_path=used_path,
            method=method,
            configuration=self.api_client.configuration,
            path_template='/dict-instead-of-list-or-scalar',
            auth_settings=_auth,
            headers=_headers,
        )
    
        response = await self.api_client.async_call_api(
            resource_path=used_path,
            method=method,
            headers=_headers,
            auth_settings=_auth,
            timeout=timeout,
            **kwargs
        )
    
        if stream:
            if not 200 <= response.http_response.status <= 299:
                body = (await response.http_response.content.read()).decode("utf-8")
                raise exceptions.ApiStreamingException(
                    status=response.http_response.status,
                    reason=response.http_response.reason,
                    body=body,
                )
    
            async def stream_iterator():
                """
                iterates over response.http_response.content and closes connection once iteration has finished
                """
                async for line in response.http_response.content:
                    if line == b'\r\n':
                        continue
                    yield line
                response.http_response.close()
                await response.session.close()
            return AsyncGeneratorResponse(
                content=stream_iterator(),
                headers=response.http_response.headers,
                status=response.http_response.status,
                response=response.http_response
            )
    
        response_for_status = _status_code_to_response.get(str(response.http_response.status))
        if response_for_status:
            api_response = await response_for_status.deserialize_async(
                                                    response,
                                                    self.api_client.configuration,
                                                    skip_deserialization=skip_deserialization
                                                )
        else:
            # If response data is JSON then deserialize for SDK consumer convenience
            is_json = api_client.JSONDetector._content_type_is_json(response.http_response.headers.get('Content-Type', ''))
            api_response = api_client.ApiResponseWithoutDeserializationAsync(
                body=await response.http_response.json() if is_json else await response.http_response.text(),
                response=response.http_response,
                round_trip_time=response.round_trip_time,
                status=response.http_response.status,
                headers=response.http_response.headers,
            )
    
        if not 200 <= api_response.status <= 299:
            raise exceptions.ApiException(api_response=api_response)
    
        # cleanup session / response
        response.http_response.close()
        await response.session.close()
    
        return api_response


    def _dict_instead_of_list_or_scalar_oapg(
        self,
        skip_deserialization: bool = True,
        timeout: typing.Optional[typing.Union[float, typing.Tuple]] = None,
        accept_content_types: typing.Tuple[str] = _all_accept_content_types,
        stream: bool = False,
    ) -> typing.Union[
        ApiResponseFor200,
        api_client.ApiResponseWithoutDeserialization,
    ]:
        """
        :param skip_deserialization: If true then api_response.response will be set but
            api_response.body and api_response.headers will not be deserialized into schema
            class instances
        """
        used_path = path.value
    
        _headers = HTTPHeaderDict()
        # TODO add cookie handling
        if accept_content_types:
            for accept_content_type in accept_content_types:
                _headers.add('Accept', accept_content_type)
        method = 'get'.upper()
        request_before_hook(
            resource_path=used_path,
            method=method,
            configuration=self.api_client.configuration,
            path_template='/dict-instead-of-list-or-scalar',
            auth_settings=_auth,
            headers=_headers,
        )
    
        response = self.api_client.call_api(
            resource_path=used_path,
            method=method,
            headers=_headers,
            auth_settings=_auth,
            timeout=timeout,
        )
    
        response_for_status = _status_code_to_response.get(str(response.http_response.status))
        if response_for_status:
            api_response = response_for_status.deserialize(
                                                    response,
                                                    self.api_client.configuration,
                                                    skip_deserialization=skip_deserialization
                                                )
        else:
            # If response data is JSON then deserialize for SDK consumer convenience
            is_json = api_client.JSONDetector._content_type_is_json(response.http_response.headers.get('Content-Type', ''))
            api_response = api_client.ApiResponseWithoutDeserialization(
                body=json.loads(response.http_response.data) if is_json else response.http_response.data,
                response=response.http_response,
                round_trip_time=response.round_trip_time,
                status=response.http_response.status,
                headers=response.http_response.headers,
            )
    
        if not 200 <= api_response.status <= 299:
            raise exceptions.ApiException(api_response=api_response)
    
        return api_response


class DictInsteadOfListOrScalarRaw(BaseApi):
    # this class is used by api classes that refer to endpoints with operationId fn names

    async def adict_instead_of_list_or_scalar(
        self,
        **kwargs,
    ) -> typing.Union[
        ApiResponseFor200Async,
        api_client.ApiResponseWithoutDeserializationAsync,
        AsyncGeneratorResponse,
    ]:
        args = self._dict_instead_of_list_or_scalar_mapped_args(
        )
        return await self._adict_instead_of_list_or_scalar_oapg(
            **kwargs,
        )
    
    def dict_instead_of_list_or_scalar(
        self,
    ) -> typing.Union[
        ApiResponseFor200,
        api_client.ApiResponseWithoutDeserialization,
    ]:
        """  """
        args = self._dict_instead_of_list_or_scalar_mapped_args(
        )
        return self._dict_instead_of_list_or_scalar_oapg(
        )

class DictInsteadOfListOrScalar(BaseApi):

    async def adict_instead_of_list_or_scalar(
        self,
        validate: bool = False,
        **kwargs,
    ) -> DictInsteadOfListOrScalarPydantic:
        raw_response = await self.raw.adict_instead_of_list_or_scalar(
            **kwargs,
        )
        if validate:
            return RootModel[DictInsteadOfListOrScalarPydantic](raw_response.body).root
        return api_client.construct_model_instance(DictInsteadOfListOrScalarPydantic, raw_response.body)
    
    
    def dict_instead_of_list_or_scalar(
        self,
        validate: bool = False,
    ) -> DictInsteadOfListOrScalarPydantic:
        raw_response = self.raw.dict_instead_of_list_or_scalar(
        )
        if validate:
            return RootModel[DictInsteadOfListOrScalarPydantic](raw_response.body).root
        return api_client.construct_model_instance(DictInsteadOfListOrScalarPydantic, raw_response.body)


class ApiForget(BaseApi):
    # this class is used by api classes that refer to endpoints by path and http method names

    async def aget(
        self,
        **kwargs,
    ) -> typing.Union[
        ApiResponseFor200Async,
        api_client.ApiResponseWithoutDeserializationAsync,
        AsyncGeneratorResponse,
    ]:
        args = self._dict_instead_of_list_or_scalar_mapped_args(
        )
        return await self._adict_instead_of_list_or_scalar_oapg(
            **kwargs,
        )
    
    def get(
        self,
    ) -> typing.Union[
        ApiResponseFor200,
        api_client.ApiResponseWithoutDeserialization,
    ]:
        """  """
        args = self._dict_instead_of_list_or_scalar_mapped_args(
        )
        return self._dict_instead_of_list_or_scalar_oapg(
        )

