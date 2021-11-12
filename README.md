---
title: AWS Lex
keywords: 
last_updated: March 15, 2019
tags: []
summary: "Detailed description of the API of the AWS Lex endpoint."
---

## Overview

The AWS Lex endpoint has the following features:
 
- Authentication
- Automatic signing of request
- Helpers to use the REST API

Please make sure you take a look at the documentation from AWS Lex as features are based on its API:

- [API Reference](https://docs.aws.amazon.com/lex/latest/dg/API_Reference.html)

## Quick start

First of all you will need to create an instance for AWS Lex. Once you have created it and the
endpoint is configured, you can start interact with the API.

After you configure the key and secret you can use the helpers to list bots like this: 

```js
var res = app.endpoints.awsLex.GetBots();
log(res);
```

Or adding a bot alias:

```js
var res = app.endpoints.proxy.PutBotAlias("Bot", "botalias", {"botVersion": "$LATEST"});
log(res);
```

Or removing bot alias:

```js
var res = app.endpoints.proxy.DeleteBotAlias("Bot", "botalias");
log(res);
```

## Configuration

In order to configure the endpoint, you previously need to have an AWS account and an instance
created for AWS Lex.

### AWS Access Key

The access key. Make sure the user has access to your AWS Connect instance.

### AWS Secret Access Key

The secret access key. Make sure the user has access to your AWS Connect instance.

### Region

The region where your AWS Lex instance was created. For example `us-east-1`.


## Javascript API

### REST API shortcuts

You can make use of the shortcuts provided in the endpoint. These shortcuts follow these rules:

- **Path variables become method parameters**: if the method has variables in the path, they will become parameters for 
  the method. For example `GET ~/bots/:botName/aliases/:name` will become 
  `endpoint.awsLex.DeleteBotAlias(botName, name);`.
- **Additional parameters or body are sent in the last param as JSON**: if the method accepts more parameters or it 
  allows to send a body, that will be sent in the last parameter. For example the method `POST ~/bots/:name/versions` 
  supports many query parameters, so it will become `endpoint.awsLex.CreateBotVersion(name, body)`.
  
Here are some URLs of the REST API and their corresponding shortcut:

The endpoint provides methods to access all methods in the [REST API](https://docs.aws.amazon.com/lex/latest/dg/API_Reference.html).
Here is a list of the available methods in the API, but you should check AWS Lex documentation for more information:

```js
endpoint.awsLex.CreateBotVersion(name, body);
endpoint.awsLex.CreateIntentVersion(name, body);
endpoint.awsLex.CreateSlotTypeVersion(name, body);
endpoint.awsLex.DeleteBot(name);
endpoint.awsLex.DeleteBotAlias(botName, name);
endpoint.awsLex.DeleteBotChannelAssociation(botName, aliasName, name);
endpoint.awsLex.DeleteBotVersion(name, version);
endpoint.awsLex.DeleteIntent(name);
endpoint.awsLex.DeleteIntentVersion(name, version);
endpoint.awsLex.DeleteSlotType(name);
endpoint.awsLex.DeleteSlotTypeVersion(name, version);
endpoint.awsLex.DeleteUtterances(botName, userId);
endpoint.awsLex.GetBot(name, versionoralias);
endpoint.awsLex.GetBotAlias(botName, name);
endpoint.awsLex.GetBotAliases(botName, requestParameters);
endpoint.awsLex.GetBotChannelAssociation(botName, aliasName, name);
endpoint.awsLex.GetBotChannelAssociations(botName, aliasName, requestParameters);
endpoint.awsLex.GetBots(requestParameters);
endpoint.awsLex.GetBotVersions(name, requestParameters);
endpoint.awsLex.GetBuiltinIntent(signature);
endpoint.awsLex.GetBuiltinIntents(requestParameters);
endpoint.awsLex.GetBuiltinSlotTypes(requestParameters);
endpoint.awsLex.GetExport(requestParameters);
endpoint.awsLex.GetImport(importId);
endpoint.awsLex.GetIntent(name, version);
endpoint.awsLex.GetIntents();
endpoint.awsLex.GetIntentVersions(name, requestParameters);
endpoint.awsLex.GetSlotType(name, version);
endpoint.awsLex.GetSlotTypes(requestParameters);
endpoint.awsLex.GetSlotTypeVersions(name, requestParameters);
endpoint.awsLex.GetUtterancesView(botname, requestParameters);
endpoint.awsLex.PutBot(name, body);
endpoint.awsLex.PutBotAlias(botName, name, body);
endpoint.awsLex.PutIntent(name, body);
endpoint.awsLex.PutSlotType(name, body);
endpoint.awsLex.StartImport(body);
endpoint.awsLex.PostText(botName, botAlias, userId, body);
```

## About SLINGR

SLINGR is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about SLINGR](https://slingr.io)

## License

This endpoint is licensed under the Apache License 2.0. See the `LICENSE` file for more details.
