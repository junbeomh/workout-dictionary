/*
 * Copyright 2010-2016 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

var apigClientFactory = {};
apigClientFactory.newClient = function (config) {
    var apigClient = { };
    if(config === undefined) {
        config = {
            accessKey: '',
            secretKey: '',
            sessionToken: '',
            region: '',
            apiKey: undefined,
            defaultContentType: 'application/json',
            defaultAcceptType: 'application/json'
        };
    }
    if(config.accessKey === undefined) {
        config.accessKey = '';
    }
    if(config.secretKey === undefined) {
        config.secretKey = '';
    }
    if(config.apiKey === undefined) {
        config.apiKey = '';
    }
    if(config.sessionToken === undefined) {
        config.sessionToken = '';
    }
    if(config.region === undefined) {
        config.region = 'us-east-1';
    }
    //If defaultContentType is not defined then default to application/json
    if(config.defaultContentType === undefined) {
        config.defaultContentType = 'application/json';
    }
    //If defaultAcceptType is not defined then default to application/json
    if(config.defaultAcceptType === undefined) {
        config.defaultAcceptType = 'application/json';
    }

    
    // extract endpoint and path from url
    var invokeUrl = 'https://r6wf0fkeq7.execute-api.us-west-2.amazonaws.com/prod';
    var endpoint = /(^https?:\/\/[^\/]+)/g.exec(invokeUrl)[1];
    var pathComponent = invokeUrl.substring(endpoint.length);

    var sigV4ClientConfig = {
        accessKey: config.accessKey,
        secretKey: config.secretKey,
        sessionToken: config.sessionToken,
        serviceName: 'execute-api',
        region: config.region,
        endpoint: endpoint,
        defaultContentType: config.defaultContentType,
        defaultAcceptType: config.defaultAcceptType
    };

    var authType = 'NONE';
    if (sigV4ClientConfig.accessKey !== undefined && sigV4ClientConfig.accessKey !== '' && sigV4ClientConfig.secretKey !== undefined && sigV4ClientConfig.secretKey !== '') {
        authType = 'AWS_IAM';
    }

    var simpleHttpClientConfig = {
        endpoint: endpoint,
        defaultContentType: config.defaultContentType,
        defaultAcceptType: config.defaultAcceptType
    };

    var apiGatewayClient = apiGateway.core.apiGatewayClientFactory.newClient(simpleHttpClientConfig, sigV4ClientConfig);
    
    
    
    apigClient.getexcercisesGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        console.log('HERE');
        console.log(params);
        console.log(params['Authorization']);

        apiGateway.core.utils.assertParametersDefined('eyJraWQiOiJwRlNGSVE3WWVRaEhpbHNtZWRXeVwveEdHQnRkU2lDdVNCblVHQjVmWllrcz0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiNnB4UHpBMGhGR1R2MmppSjJOQ1hZUSIsInN1YiI6IjU1OTlkY2FhLTcyNjMtNDg0Zi1hN2FlLTg5NDQ0N2M3Yzc0MiIsImNvZ25pdG86Z3JvdXBzIjpbInVzLXdlc3QtMl9KaUVaaW4xVGlfR29vZ2xlIl0sImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0yLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMl9KaUVaaW4xVGkiLCJjb2duaXRvOnVzZXJuYW1lIjoiZ29vZ2xlXzEwNzY3MDQ1ODE0Nzc5ODM4NTI0MCIsIm5vbmNlIjoid0w2TzZKTWNuOXpCdnZOY1lSVldlNURjN0ZaUm94NFRGcld0S0NsdEJ1dWNMYkQtZ3Y0VkZFX0dzVHZrdU55bDBPbFJzc1hJenktVVcxYVdoOXhUVDNaUWJwam5zRHptWExvWlhYZ2gxNzItel9DMXlneFZDYjZOaFRjRXIzYmYtV1NEQjdQc0JWdDA2QVJvSElTdzNjTUVTSEM0YURNSDdueTYwajNRcllRIiwiYXVkIjoiNnA1b3BrM3JocGQzM2oyMDBzZTk4dGV1MWgiLCJpZGVudGl0aWVzIjpbeyJ1c2VySWQiOiIxMDc2NzA0NTgxNDc3OTgzODUyNDAiLCJwcm92aWRlck5hbWUiOiJHb29nbGUiLCJwcm92aWRlclR5cGUiOiJHb29nbGUiLCJpc3N1ZXIiOm51bGwsInByaW1hcnkiOiJ0cnVlIiwiZGF0ZUNyZWF0ZWQiOiIxNjA2MjkxNTA5MDQ0In1dLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTYwNjQzMzgxOCwiZXhwIjoxNjA2NDM3NDE4LCJpYXQiOjE2MDY0MzM4MTgsImVtYWlsIjoianVuYmVvbWg5NEBnbWFpbC5jb20ifQ.YYfE8SYb8xceQhriOeLzFbK7aAIfFPf3UT8OkewRPtCh77ilIOx2TzaUk9Z0aX77C1rKXLUgE0cAgoopUzRGZvCA1YNtbcUl9dZ-GJhHUkI8vkshQQGwq31AvxjgI4nuRkPQV60UPDLjABtygg45CP-thqVf7KgZj-XW-UmBm7At2OWYxdP_ArXa9BABbmHHEeXvAk1XF3ThP0-l_1g7gDfbtinxlYjZg_Kxaz-Uk0MWlKOep8-PEhX5cpU7QHZIgtLL5hNNGUWYOC0autHK2dSiRN8UyuyaHItAWlb1-tmJWYB0F8vd8himjAnrY5pVRmjuaEkze6BCnNe9ORrXIw');
        
        var getexcercisesGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/getexcercises').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['Authorization']),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(getexcercisesGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.getexcercisesOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var getexcercisesOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/getexcercises').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(getexcercisesOptionsRequest, authType, additionalParams, config.apiKey);
    };
    

    return apigClient;
};
