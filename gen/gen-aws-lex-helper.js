var fs = require('fs');

var FILE_NAME = "lex-helpers.js";
var CODE = '';
var SRC_USR = '';

var API = [
    {name: 'CreateBotVersion', path: '/bots/:name/versions', method: 'POST', endpoint: 'models'},
    {name: 'CreateIntentVersion', path: '/intents/:name/versions', method: 'POST', endpoint: 'models'},
    {name: 'CreateSlotTypeVersion', path: '/slottypes/:name/versions', method: 'POST', endpoint: 'models'},
    {name: 'DeleteBot', path: '/bots/:name', method: 'DELETE', endpoint: 'models'},
    {name: 'DeleteBotAlias', path: '/bots/:botName/aliases/:name', method: 'DELETE', endpoint: 'models'},
    {name: 'DeleteBotChannelAssociation', path: '/bots/:botName/aliases/:aliasName/channels/:name', method: 'DELETE', endpoint: 'models'},
    {name: 'DeleteBotVersion', path: '/bots/:name/versions/:version', method: 'DELETE', endpoint: 'models'},
    {name: 'DeleteIntent', path: '/intents/:name', method: 'DELETE', endpoint: 'models'},
    {name: 'DeleteIntentVersion', path: '/intents/:name/versions/:version', method: 'DELETE', endpoint: 'models'},
    {name: 'DeleteSlotType', path: '/slottypes/:name', method: 'DELETE', endpoint: 'models'},
    {name: 'DeleteSlotTypeVersion', path: '/slottypes/:name/version/:version', method: 'DELETE', endpoint: 'models'},
    {name: 'DeleteUtterances', path: '/bots/:botName/utterances/:userId', method: 'DELETE', endpoint: 'models'},
    {name: 'GetBot', path: '/bots/:name/versions/:versionoralias', method: 'GET', endpoint: 'models'},
    {name: 'GetBotAlias', path: '/bots/:botName/aliases/:name', method: 'GET', endpoint: 'models'},
    {name: 'GetBotAliases', path: '/bots/:botName/aliases/', method: 'GET', params: true, endpoint: 'models'},
    {name: 'GetBotChannelAssociation', path: '/bots/:botName/aliases/:aliasName/channels/:name', method: 'GET', endpoint: 'models'},
    {name: 'GetBotChannelAssociations', path: '/bots/:botName/aliases/:aliasName/channels/', method: 'GET', params: true, endpoint: 'models'},
    {name: 'GetBots', path: '/bots/', method: 'GET', params: true, endpoint: 'models'},
    {name: 'GetBotVersions', path: '/bots/:name/versions/', method: 'GET', params: true, endpoint: 'models'},
    {name: 'GetBuiltinIntent', path: '/builtins/intents/:signature', method: 'GET', endpoint: 'models'},
    {name: 'GetBuiltinIntents', path: '/builtins/intents/', method: 'GET', params: true, endpoint: 'models'},
    {name: 'GetBuiltinSlotTypes', path: '/builtins/slottypes/', method: 'GET', params: true, endpoint: 'models'},
    {name: 'GetExport', path: '/exports/', method: 'GET', params: true, endpoint: 'models'},
    {name: 'GetImport', path: '/imports/:importId', method: 'GET', endpoint: 'models'},
    {name: 'GetIntent', path: '/intents/:name/versions/:version', method: 'GET', endpoint: 'models'},
    {name: 'GetIntents', path: '/intents/', method: 'GET', endpoint: 'models'},
    {name: 'GetIntentVersions', path: '/intents/:name/versions/', method: 'GET', params: true, endpoint: 'models'},
    {name: 'GetSlotType', path: '/slottypes/:name/versions/:version', method: 'GET', endpoint: 'models'},
    {name: 'GetSlotTypes', path: '/slottypes/', method: 'GET', params: true, endpoint: 'models'},
    {name: 'GetSlotTypeVersions', path: '/slottypes/:name/versions/', method: 'GET', params: true, endpoint: 'models'},
    {name: 'GetUtterancesView', path: '/bots/:botname/utterances', method: 'GET', params: true, endpoint: 'models'},
    {name: 'PutBot', path: '/bots/:name/versions/$LATEST', method: 'PUT', endpoint: 'models'},
    {name: 'PutBotAlias', path: '/bots/:botName/aliases/:name', method: 'PUT', endpoint: 'models'},
    {name: 'PutIntent', path: '/intents/:name/versions/$LATEST', method: 'PUT', endpoint: 'models'},
    {name: 'PutSlotType', path: '/slottypes/:name/versions/$LATEST', method: 'PUT', endpoint: 'models'},
    {name: 'StartImport', path: '/imports/', method: 'POST', endpoint: 'models'},
    {name: 'PostText', path: '/bot/:botName/alias/:botAlias/user/:userId/content', method: 'POST', endpoint: 'runtime'},
    //{name: 'PostContent', path: '/bot/:botName/alias/:botAlias/user/:userId/text', method: 'POST', attr: ['sessionAttributes', 'requestAttributes', 'contentType', 'accept'], endpoint: 'runtime'},
];

var checkParams = function(path) {
    return path
        .split("/")
        .filter(p => p.startsWith(":"))
        .map(p => p.substring(1))
        .join(", ");
};

var replacePath = function(path) {
    return path
        .split("/")
        .map((e, i , arr) => arr.length == i+1 && !e.startsWith(":") ? e + '"' : e)
        .map(e => e.startsWith(":") ? '"+' + e.substring(1) + '+"' : e)
        .join("/")
        .replace(/\+\"$/, '');
};

var makeEndpointsHelpers = function () {

    for (var i in API) {
        var apiInfo = API[i];
        var actionName = apiInfo.name;

        var params = checkParams(apiInfo.path);
        var path = replacePath(apiInfo.path);

        var methodFn = "_httpGet";
        switch (apiInfo.method) {
            case 'POST':
                methodFn = '_httpPost';
                break;
            case 'PUT':
                methodFn = '_httpPut';
                break;
            case 'DELETE':
                methodFn = '_httpDelete';
                break;
        }

        var reqParams = "{}";
        if(apiInfo.params) {
            params += params.trim() ==="" ? "": ", ";
            params += "requestParameters";
            reqParams = "requestParameters || {}";
        }

        if(apiInfo.method === 'POST' || apiInfo.method === 'PUT') {
            params += params.trim() ==="" ? "": ", ";
            params += "body";
        }

        var functionName = `endpoint.${actionName} = function(${params}) {\n\n`;
        functionName += `\tvar path = "${path};\n`;
        functionName += `\tvar reqParams = ${reqParams};\n\n`;
        functionName += `\treturn endpoint.${methodFn}({\n`;
        functionName += `\t\tpath: path,\n`;
        functionName += `\t\tparams: reqParams,\n`;
        if(apiInfo.method === 'POST' || apiInfo.method === 'PUT') {
            functionName += `\t\tbody: body,\n`;
        }
        functionName += `\t\tendpoint: '${apiInfo.endpoint}'\n`;
        functionName += `\t});\n`;
        functionName += `};\n\n`;

        CODE += functionName;

    }


    var MESSAGE = '//////////////////////////////////////////////////////////////////////////\n';
    MESSAGE += '//                                                                      //\n';
    MESSAGE += '//  This file is generated with aws-lex/gen/gen-aws-lex-helpers.js      //\n';
    MESSAGE += '//                                                                      //\n';
    MESSAGE += '//            ' + new Date() + '                   //\n';
    MESSAGE += '//                                                                      //\n';
    MESSAGE += '//////////////////////////////////////////////////////////////////////////\n';

    CODE = MESSAGE + '\n\n' + CODE + '\n' + SRC_USR;

};

makeEndpointsHelpers();

fs.writeFile("../scripts/" + FILE_NAME, CODE, function (err) {
    if (err) {
        return console.error(err);
    }

    console.info('Generator has run successfully!');
});
