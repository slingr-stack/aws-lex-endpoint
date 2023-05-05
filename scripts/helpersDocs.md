# Javascript API

The Javascript API of the aws-lex endpoint has three pieces:

- **HTTP requests**: These allow to make regular HTTP requests.
- **Shortcuts**: These are helpers to make HTTP request to the API in a more convenient way.
- **Additional Helpers**: These helpers provide additional features that facilitate or improves the endpoint usage in SLINGR.

## HTTP requests
You can make `POST`,`DELETE`,`GET`,`PUT` requests to the [aws-lex API](API_URL_HERE) like this:
```javascript
var response = app.endpoints.aws-lex.post('/bot/:botName/alias/:botAlias/user/:userId/text', body)
var response = app.endpoints.aws-lex.post('/bot/:botName/alias/:botAlias/user/:userId/text')
var response = app.endpoints.aws-lex.delete('/slottypes/:name')
var response = app.endpoints.aws-lex.get('/bots/:name/versions')
var response = app.endpoints.aws-lex.put('/slottypes/:name/versions/$LATEST', body)
var response = app.endpoints.aws-lex.put('/slottypes/:name/versions/$LATEST')
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
app.endpoints.aws-lex.bots.versions.post(name, body)
```
---
* API URL: '/intents/:name/versions'
* HTTP Method: 'POST'
```javascript
app.endpoints.aws-lex.intents.versions.post(name, body)
```
---
* API URL: '/slottypes/:name/versions'
* HTTP Method: 'POST'
```javascript
app.endpoints.aws-lex.slottypes.versions.post(name, body)
```
---
* API URL: '/imports'
* HTTP Method: 'POST'
```javascript
app.endpoints.aws-lex.imports.post(body)
```
---
* API URL: '/bot/:botName/alias/:botAlias/user/:userId/content'
* HTTP Method: 'POST'
```javascript
app.endpoints.aws-lex.bot.alias.user.content.post(botName, botAlias, userId, body)
```
---
* API URL: '/bot/:botName/alias/:botAlias/user/:userId/text'
* HTTP Method: 'POST'
```javascript
app.endpoints.aws-lex.bot.alias.user.text.post(botName, botAlias, userId, body)
```
---
* API URL: '/bots/:name'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.aws-lex.bots.delete(name)
```
---
* API URL: '/bots/:botName/aliases/:name'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.aws-lex.bots.aliases.delete(botName, name)
```
---
* API URL: '/bots/:botName/aliases/:aliasName/channels/:name'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.aws-lex.bots.aliases.channels.delete(botName, aliasName, name)
```
---
* API URL: '/bots/:name/versions/:version'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.aws-lex.bots.versions.delete(name, version)
```
---
* API URL: '/intents/:name'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.aws-lex.intents.delete(name)
```
---
* API URL: '/intents/:name/versions/:version'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.aws-lex.intents.versions.delete(name, version)
```
---
* API URL: '/slottypes/:name'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.aws-lex.slottypes.delete(name)
```
---
* API URL: '/slottypes/:name/version/:version'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.aws-lex.slottypes.version.delete(name, version)
```
---
* API URL: '/bots/:botName/utterances/:userId'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.aws-lex.bots.utterances.delete(botName, userId)
```
---
* API URL: '/bots/:name/versions/:versionoralias'
* HTTP Method: 'GET'
```javascript
app.endpoints.aws-lex.bots.versions.get(name)
```
---
* API URL: '/bots/:name/versions'
* HTTP Method: 'GET'
```javascript
app.endpoints.aws-lex.bots.versions.get()
```
---
* API URL: '/bots/:botName/aliases/:name'
* HTTP Method: 'GET'
```javascript
app.endpoints.aws-lex.bots.aliases.get(botName)
```
---
* API URL: '/bots/:botName/aliases'
* HTTP Method: 'GET'
```javascript
app.endpoints.aws-lex.bots.aliases.get()
```
---
* API URL: '/bots/:botName/aliases/:aliasName/channels/:name'
* HTTP Method: 'GET'
```javascript
app.endpoints.aws-lex.bots.aliases.channels.get(botName, aliasName)
```
---
* API URL: '/bots/:botName/aliases/:aliasName/channels'
* HTTP Method: 'GET'
```javascript
app.endpoints.aws-lex.bots.aliases.channels.get(botName)
```
---
* API URL: '/bots'
* HTTP Method: 'GET'
```javascript
app.endpoints.aws-lex.bots.get()
```
---
* API URL: '/builtins/intents/:signature'
* HTTP Method: 'GET'
```javascript
app.endpoints.aws-lex.builtins.intents.get()
```
---
* API URL: '/builtins/intents'
* HTTP Method: 'GET'
```javascript
app.endpoints.aws-lex.builtins.intents.get()
```
---
* API URL: '/builtins/slottypes'
* HTTP Method: 'GET'
```javascript
app.endpoints.aws-lex.builtins.slottypes.get()
```
---
* API URL: '/exports'
* HTTP Method: 'GET'
```javascript
app.endpoints.aws-lex.exports.get()
```
---
* API URL: '/imports/:importId'
* HTTP Method: 'GET'
```javascript
app.endpoints.aws-lex.imports.get(importId)
```
---
* API URL: '/intents/:name/versions/:version'
* HTTP Method: 'GET'
```javascript
app.endpoints.aws-lex.intents.versions.get(name)
```
---
* API URL: '/intents/:name/versions'
* HTTP Method: 'GET'
```javascript
app.endpoints.aws-lex.intents.versions.get()
```
---
* API URL: '/intents'
* HTTP Method: 'GET'
```javascript
app.endpoints.aws-lex.intents.get()
```
---
* API URL: '/slottypes/:name/versions/:version'
* HTTP Method: 'GET'
```javascript
app.endpoints.aws-lex.slottypes.versions.get(name)
```
---
* API URL: '/slottypes/:name/versions'
* HTTP Method: 'GET'
```javascript
app.endpoints.aws-lex.slottypes.versions.get()
```
---
* API URL: '/slottypes'
* HTTP Method: 'GET'
```javascript
app.endpoints.aws-lex.slottypes.get()
```
---
* API URL: '/bots/:botname/utterances'
* HTTP Method: 'GET'
```javascript
app.endpoints.aws-lex.bots.utterances.get(botname)
```
---
* API URL: '/bots/:name/versions/$LATEST'
* HTTP Method: 'PUT'
```javascript
app.endpoints.aws-lex.bots.versions.$LATEST.put(name, body)
```
---
* API URL: '/bots/:botName/aliases/:name'
* HTTP Method: 'PUT'
```javascript
app.endpoints.aws-lex.bots.aliases.put(botName, name, body)
```
---
* API URL: '/intents/:name/versions/$LATEST'
* HTTP Method: 'PUT'
```javascript
app.endpoints.aws-lex.intents.versions.$LATEST.put(name, body)
```
---
* API URL: '/slottypes/:name/versions/$LATEST'
* HTTP Method: 'PUT'
```javascript
app.endpoints.aws-lex.slottypes.versions.$LATEST.put(name, body)
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

*MANUALLY ADD THE DOCUMENTATION OF THESE FLOW STEPS HERE...*


</details>

## Additional Helpers
*MANUALLY ADD THE DOCUMENTATION OF THESE HELPERS HERE...*