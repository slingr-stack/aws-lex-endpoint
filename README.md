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

# Javascript API

The Javascript API of the awsLex endpoint has three pieces:

- **HTTP requests**: These allow to make regular HTTP requests.
- **Shortcuts**: These are helpers to make HTTP request to the API in a more convenient way.
- **Additional Helpers**: These helpers provide additional features that facilitate or improves the endpoint usage in SLINGR.

## HTTP requests
You can make `POST`,`DELETE`,`GET`,`PUT` requests to the [awsLex API](API_URL_HERE) like this:
```javascript
var response = app.endpoints.awsLex.post('/imports', body)
var response = app.endpoints.awsLex.post('/imports')
var response = app.endpoints.awsLex.delete('/intents/:name')
var response = app.endpoints.awsLex.get('/slottypes')
var response = app.endpoints.awsLex.put('/bots/:name/versions/$LATEST', body)
var response = app.endpoints.awsLex.put('/bots/:name/versions/$LATEST')
```

Please take a look at the documentation of the [HTTP endpoint](https://github.com/slingr-stack/http-endpoint#javascript-api)
for more information about generic requests.

## Shortcuts

Instead of having to use the generic HTTP methods, you can (and should) make use of the helpers provided in the endpoint:
<details>
    <summary>Click here to see all the helpers</summary>

<br>

* API URL: '/bots/:name/versions'
* HTTP Method: 'POST'
```javascript
app.endpoints.awsLex.bots.versions.post(name, body)
```
---
* API URL: '/intents/:name/versions'
* HTTP Method: 'POST'
```javascript
app.endpoints.awsLex.intents.versions.post(name, body)
```
---
* API URL: '/slottypes/:name/versions'
* HTTP Method: 'POST'
```javascript
app.endpoints.awsLex.slottypes.versions.post(name, body)
```
---
* API URL: '/imports'
* HTTP Method: 'POST'
```javascript
app.endpoints.awsLex.imports.post(body)
```
---
* API URL: '/bot/:botName/alias/:botAlias/user/:userId/content'
* HTTP Method: 'POST'
```javascript
app.endpoints.awsLex.bot.alias.user.content.post(botName, botAlias, userId, body)
```
---
* API URL: '/bot/:botName/alias/:botAlias/user/:userId/text'
* HTTP Method: 'POST'
```javascript
app.endpoints.awsLex.bot.alias.user.text.post(botName, botAlias, userId, body)
```
---
* API URL: '/bots/:name'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.awsLex.bots.delete(name)
```
---
* API URL: '/bots/:botName/aliases/:name'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.awsLex.bots.aliases.delete(botName, name)
```
---
* API URL: '/bots/:botName/aliases/:aliasName/channels/:name'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.awsLex.bots.aliases.channels.delete(botName, aliasName, name)
```
---
* API URL: '/bots/:name/versions/:version'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.awsLex.bots.versions.delete(name, version)
```
---
* API URL: '/intents/:name'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.awsLex.intents.delete(name)
```
---
* API URL: '/intents/:name/versions/:version'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.awsLex.intents.versions.delete(name, version)
```
---
* API URL: '/slottypes/:name'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.awsLex.slottypes.delete(name)
```
---
* API URL: '/slottypes/:name/version/:version'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.awsLex.slottypes.version.delete(name, version)
```
---
* API URL: '/bots/:botName/utterances/:userId'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.awsLex.bots.utterances.delete(botName, userId)
```
---
* API URL: '/bots/:name/versions/:versionoralias'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsLex.bots.versions.get(name)
```
---
* API URL: '/bots/:name/versions'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsLex.bots.versions.get()
```
---
* API URL: '/bots/:botName/aliases/:name'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsLex.bots.aliases.get(botName)
```
---
* API URL: '/bots/:botName/aliases'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsLex.bots.aliases.get()
```
---
* API URL: '/bots/:botName/aliases/:aliasName/channels/:name'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsLex.bots.aliases.channels.get(botName, aliasName)
```
---
* API URL: '/bots/:botName/aliases/:aliasName/channels'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsLex.bots.aliases.channels.get(botName)
```
---
* API URL: '/bots'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsLex.bots.get()
```
---
* API URL: '/builtins/intents/:signature'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsLex.builtins.intents.get()
```
---
* API URL: '/builtins/intents'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsLex.builtins.intents.get()
```
---
* API URL: '/builtins/slottypes'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsLex.builtins.slottypes.get()
```
---
* API URL: '/exports'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsLex.exports.get()
```
---
* API URL: '/imports/:importId'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsLex.imports.get(importId)
```
---
* API URL: '/intents/:name/versions/:version'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsLex.intents.versions.get(name)
```
---
* API URL: '/intents/:name/versions'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsLex.intents.versions.get()
```
---
* API URL: '/intents'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsLex.intents.get()
```
---
* API URL: '/slottypes/:name/versions/:version'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsLex.slottypes.versions.get(name)
```
---
* API URL: '/slottypes/:name/versions'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsLex.slottypes.versions.get()
```
---
* API URL: '/slottypes'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsLex.slottypes.get()
```
---
* API URL: '/bots/:botname/utterances'
* HTTP Method: 'GET'
```javascript
app.endpoints.awsLex.bots.utterances.get(botname)
```
---
* API URL: '/bots/:name/versions/$LATEST'
* HTTP Method: 'PUT'
```javascript
app.endpoints.awsLex.bots.versions.$LATEST.put(name, body)
```
---
* API URL: '/bots/:botName/aliases/:name'
* HTTP Method: 'PUT'
```javascript
app.endpoints.awsLex.bots.aliases.put(botName, name, body)
```
---
* API URL: '/intents/:name/versions/$LATEST'
* HTTP Method: 'PUT'
```javascript
app.endpoints.awsLex.intents.versions.$LATEST.put(name, body)
```
---
* API URL: '/slottypes/:name/versions/$LATEST'
* HTTP Method: 'PUT'
```javascript
app.endpoints.awsLex.slottypes.versions.$LATEST.put(name, body)
```
---

</details>

## Flow Step

As an alternative option to using scripts, you can make use of Flows and Flow Steps specifically created for the endpoint:
<details>
    <summary>Click here to see the Flow Steps</summary>

<br>



### Generic Flow Step

Generic flow step for full use of the entire endpoint and its services.

<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>URL (Method)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            This is the http method to be used against the endpoint. <br>
            Possible values are: <br>
            <i><strong>POST,DELETE,GET,PUT</strong></i>
        </td>
    </tr>
    <tr>
        <td>URL (Path)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            The url to which this endpoint will send the request. This is the exact service to which the http request will be made. <br>
            Possible values are: <br>
            <i><strong>/bots/{name}/versions<br>/intents/{name}/versions<br>/slottypes/{name}/versions<br>/imports<br>/bot/{botName}/alias/{botAlias}/user/{userId}/content<br>/bot/{botName}/alias/{botAlias}/user/{userId}/text<br>/bots/{name}<br>/bots/{botName}/aliases/{name}<br>/bots/{botName}/aliases/{aliasName}/channels/{name}<br>/bots/{name}/versions/{version}<br>/intents/{name}<br>/intents/{name}/versions/{version}<br>/slottypes/{name}<br>/slottypes/{name}/version/{version}<br>/bots/{botName}/utterances/{userId}<br>/bots/{name}/versions/{versionoralias}<br>/bots/{name}/versions<br>/bots/{botName}/aliases/{name}<br>/bots/{botName}/aliases<br>/bots/{botName}/aliases/{aliasName}/channels/{name}<br>/bots/{botName}/aliases/{aliasName}/channels<br>/bots<br>/builtins/intents/{signature}<br>/builtins/intents<br>/builtins/slottypes<br>/exports<br>/imports/{importId}<br>/intents/{name}/versions/{version}<br>/intents/{name}/versions<br>/intents<br>/slottypes/{name}/versions/{version}<br>/slottypes/{name}/versions<br>/slottypes<br>/bots/{botname}/utterances<br>/bots/{name}/versions/$LATEST<br>/bots/{botName}/aliases/{name}<br>/intents/{name}/versions/$LATEST<br>/slottypes/{name}/versions/$LATEST<br></strong></i>
        </td>
    </tr>
    <tr>
        <td>Headers</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom http header for the request.
        </td>
    </tr>
    <tr>
        <td>Query Params</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom query params for the http call.
        </td>
    </tr>
    <tr>
        <td>Body</td>
        <td>json</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            A payload of data can be sent to the server in the body of the request.
        </td>
    </tr>
    <tr>
        <td>Event</td>
        <td>dropDown</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used to define event after the call. <br>
            Possible values are: <br>
            File Downloaded, Callback
        </td>
    </tr>
    <tr>
        <td>Callback data</td>
        <td>textarea</td>
        <td>no</td>
        <td> - </td>
        <td> Event is Callback </td>
        <td>
            This is an object you can send that you will get back when the function is processed.
        </td>
    </tr>
    <tr>
        <td>Callbacks</td>
        <td>Script</td>
        <td>no</td>
        <td> - </td>
        <td> Event is Callback </td>
        <td>
            This is a map where you can listen for different function
        </td>
    </tr>
    <tr>
        <td>Override Settings</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td>Always</td>
        <td></td>
    </tr>
    <tr>
        <td>Follow Redirect</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Indicates that the resource has to be downloaded into a file instead of returning it in the response.</td>
    </tr>
    <tr>
        <td>Download</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>If true the method won't return until the file has been downloaded, and it will return all the information of the file.</td>
    </tr>
    <tr>
        <td>File name</td>
        <td>text</td>
        <td>no</td>
        <td></td>
        <td> overrideSettings </td>
        <td>If provided, the file will be stored with this name. If empty the file name will be calculated from the URL.</td>
    </tr>
    <tr>
        <td>Full response</td>
        <td> boolean </td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Include extended information about response</td>
    </tr>
    <tr>
        <td>Connection Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 5000 </td>
        <td> overrideSettings </td>
        <td>Connect timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    <tr>
        <td>Read Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 60000 </td>
        <td> overrideSettings </td>
        <td>Read timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>


</details>

For more information about how shortcuts or flow steps works, and how they are generated, take a look at the [slingr-helpgen tool](https://github.com/slingr-stack/slingr-helpgen).

## Additional Flow Step


<details>
    <summary>Click here to see the Customs Flow Steps</summary>

<br>



### Custom Flow Steps Name

Description of Custom Flow Steps

### Create Bot Version

Creates a new version of the bot based on the $LATEST version. If the $LATEST version of this resource hasn't changed since you created the last version, Amazon Lex doesn't create a new version. It returns the last created version.

<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Bot Name</td>
        <td>text</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            The name of the bot. The name is case sensitive.
        </td>
    </tr>
    <tr>
        <td>Checksum</td>
        <td>text</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Identifies a specific revision of the $LATEST version of the bot. If you specify a checksum and the $LATEST version of the bot has a different checksum, a PreconditionFailedException exception is returned and Amazon Lex doesn't publish a new version. If you don't specify a checksum, Amazon Lex publishes the $LATEST version.
        </td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>


### Delete Bot

Deletes all versions of the bot, including the $LATEST version. To delete a specific version of the bot, use the DeleteBotVersion operation. The DeleteBot operation doesn't immediately remove the bot schema. Instead, it is marked for deletion and removed later.
<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Bot Name</td>
        <td>text</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            The name of the bot. The name is case sensitive.
        </td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>


### Get Bot Version

Returns metadata information for a specific bot. You must provide the bot name and the bot version or alias.

<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Bot Name</td>
        <td>text</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            The name of the bot. The name is case sensitive.
        </td>
    </tr>
    <tr>
        <td>Version or alias</td>
        <td>text</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            The version or alias of the bot.
        </td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>

</details>

## Additional Helpers
*MANUALLY ADD THE DOCUMENTATION OF THESE HELPERS HERE...*

## About SLINGR

SLINGR is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about SLINGR](https://slingr.io)

## License

This endpoint is licensed under the Apache License 2.0. See the `LICENSE` file for more details.
