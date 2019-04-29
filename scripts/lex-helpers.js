//////////////////////////////////////////////////////////////////////////
//                                                                      //
//  This file is generated with aws-lex/gen/gen-aws-lex-helpers.js      //
//                                                                      //
//            Fri Mar 15 2019 15:50:46 GMT-0300 (-03)                   //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


endpoint.CreateBotVersion = function(name, body) {

	var path = "/bots/"+name+"/versions";
	var reqParams = {};

	return endpoint._httpPost({
		path: path,
		params: reqParams,
		body: body,
		endpoint: 'models'
	});
};

endpoint.CreateIntentVersion = function(name, body) {

	var path = "/intents/"+name+"/versions";
	var reqParams = {};

	return endpoint._httpPost({
		path: path,
		params: reqParams,
		body: body,
		endpoint: 'models'
	});
};

endpoint.CreateSlotTypeVersion = function(name, body) {

	var path = "/slottypes/"+name+"/versions";
	var reqParams = {};

	return endpoint._httpPost({
		path: path,
		params: reqParams,
		body: body,
		endpoint: 'models'
	});
};

endpoint.DeleteBot = function(name) {

	var path = "/bots/"+name;
	var reqParams = {};

	return endpoint._httpDelete({
		path: path,
		params: reqParams,
		endpoint: 'models'
	});
};

endpoint.DeleteBotAlias = function(botName, name) {

	var path = "/bots/"+botName+"/aliases/"+name;
	var reqParams = {};

	return endpoint._httpDelete({
		path: path,
		params: reqParams,
		endpoint: 'models'
	});
};

endpoint.DeleteBotChannelAssociation = function(botName, aliasName, name) {

	var path = "/bots/"+botName+"/aliases/"+aliasName+"/channels/"+name;
	var reqParams = {};

	return endpoint._httpDelete({
		path: path,
		params: reqParams,
		endpoint: 'models'
	});
};

endpoint.DeleteBotVersion = function(name, version) {

	var path = "/bots/"+name+"/versions/"+version;
	var reqParams = {};

	return endpoint._httpDelete({
		path: path,
		params: reqParams,
		endpoint: 'models'
	});
};

endpoint.DeleteIntent = function(name) {

	var path = "/intents/"+name;
	var reqParams = {};

	return endpoint._httpDelete({
		path: path,
		params: reqParams,
		endpoint: 'models'
	});
};

endpoint.DeleteIntentVersion = function(name, version) {

	var path = "/intents/"+name+"/versions/"+version;
	var reqParams = {};

	return endpoint._httpDelete({
		path: path,
		params: reqParams,
		endpoint: 'models'
	});
};

endpoint.DeleteSlotType = function(name) {

	var path = "/slottypes/"+name;
	var reqParams = {};

	return endpoint._httpDelete({
		path: path,
		params: reqParams,
		endpoint: 'models'
	});
};

endpoint.DeleteSlotTypeVersion = function(name, version) {

	var path = "/slottypes/"+name+"/version/"+version;
	var reqParams = {};

	return endpoint._httpDelete({
		path: path,
		params: reqParams,
		endpoint: 'models'
	});
};

endpoint.DeleteUtterances = function(botName, userId) {

	var path = "/bots/"+botName+"/utterances/"+userId;
	var reqParams = {};

	return endpoint._httpDelete({
		path: path,
		params: reqParams,
		endpoint: 'models'
	});
};

endpoint.GetBot = function(name, versionoralias) {

	var path = "/bots/"+name+"/versions/"+versionoralias;
	var reqParams = {};

	return endpoint._httpGet({
		path: path,
		params: reqParams,
		endpoint: 'models'
	});
};

endpoint.GetBotAlias = function(botName, name) {

	var path = "/bots/"+botName+"/aliases/"+name;
	var reqParams = {};

	return endpoint._httpGet({
		path: path,
		params: reqParams,
		endpoint: 'models'
	});
};

endpoint.GetBotAliases = function(botName, requestParameters) {

	var path = "/bots/"+botName+"/aliases/";
	var reqParams = requestParameters || {};

	return endpoint._httpGet({
		path: path,
		params: reqParams,
		endpoint: 'models'
	});
};

endpoint.GetBotChannelAssociation = function(botName, aliasName, name) {

	var path = "/bots/"+botName+"/aliases/"+aliasName+"/channels/"+name;
	var reqParams = {};

	return endpoint._httpGet({
		path: path,
		params: reqParams,
		endpoint: 'models'
	});
};

endpoint.GetBotChannelAssociations = function(botName, aliasName, requestParameters) {

	var path = "/bots/"+botName+"/aliases/"+aliasName+"/channels/";
	var reqParams = requestParameters || {};

	return endpoint._httpGet({
		path: path,
		params: reqParams,
		endpoint: 'models'
	});
};

endpoint.GetBots = function(requestParameters) {

	var path = "/bots/";
	var reqParams = requestParameters || {};

	return endpoint._httpGet({
		path: path,
		params: reqParams,
		endpoint: 'models'
	});
};

endpoint.GetBotVersions = function(name, requestParameters) {

	var path = "/bots/"+name+"/versions/";
	var reqParams = requestParameters || {};

	return endpoint._httpGet({
		path: path,
		params: reqParams,
		endpoint: 'models'
	});
};

endpoint.GetBuiltinIntent = function(signature) {

	var path = "/builtins/intents/"+signature;
	var reqParams = {};

	return endpoint._httpGet({
		path: path,
		params: reqParams,
		endpoint: 'models'
	});
};

endpoint.GetBuiltinIntents = function(requestParameters) {

	var path = "/builtins/intents/";
	var reqParams = requestParameters || {};

	return endpoint._httpGet({
		path: path,
		params: reqParams,
		endpoint: 'models'
	});
};

endpoint.GetBuiltinSlotTypes = function(requestParameters) {

	var path = "/builtins/slottypes/";
	var reqParams = requestParameters || {};

	return endpoint._httpGet({
		path: path,
		params: reqParams,
		endpoint: 'models'
	});
};

endpoint.GetExport = function(requestParameters) {

	var path = "/exports/";
	var reqParams = requestParameters || {};

	return endpoint._httpGet({
		path: path,
		params: reqParams,
		endpoint: 'models'
	});
};

endpoint.GetImport = function(importId) {

	var path = "/imports/"+importId;
	var reqParams = {};

	return endpoint._httpGet({
		path: path,
		params: reqParams,
		endpoint: 'models'
	});
};

endpoint.GetIntent = function(name, version) {

	var path = "/intents/"+name+"/versions/"+version;
	var reqParams = {};

	return endpoint._httpGet({
		path: path,
		params: reqParams,
		endpoint: 'models'
	});
};

endpoint.GetIntents = function() {

	var path = "/intents/";
	var reqParams = {};

	return endpoint._httpGet({
		path: path,
		params: reqParams,
		endpoint: 'models'
	});
};

endpoint.GetIntentVersions = function(name, requestParameters) {

	var path = "/intents/"+name+"/versions/";
	var reqParams = requestParameters || {};

	return endpoint._httpGet({
		path: path,
		params: reqParams,
		endpoint: 'models'
	});
};

endpoint.GetSlotType = function(name, version) {

	var path = "/slottypes/"+name+"/versions/"+version;
	var reqParams = {};

	return endpoint._httpGet({
		path: path,
		params: reqParams,
		endpoint: 'models'
	});
};

endpoint.GetSlotTypes = function(requestParameters) {

	var path = "/slottypes/";
	var reqParams = requestParameters || {};

	return endpoint._httpGet({
		path: path,
		params: reqParams,
		endpoint: 'models'
	});
};

endpoint.GetSlotTypeVersions = function(name, requestParameters) {

	var path = "/slottypes/"+name+"/versions/";
	var reqParams = requestParameters || {};

	return endpoint._httpGet({
		path: path,
		params: reqParams,
		endpoint: 'models'
	});
};

endpoint.GetUtterancesView = function(botname, requestParameters) {

	var path = "/bots/"+botname+"/utterances";
	var reqParams = requestParameters || {};

	return endpoint._httpGet({
		path: path,
		params: reqParams,
		endpoint: 'models'
	});
};

endpoint.PutBot = function(name, body) {

	var path = "/bots/"+name+"/versions/$LATEST";
	var reqParams = {};

	return endpoint._httpPut({
		path: path,
		params: reqParams,
		body: body,
		endpoint: 'models'
	});
};

endpoint.PutBotAlias = function(botName, name, body) {

	var path = "/bots/"+botName+"/aliases/"+name;
	var reqParams = {};

	return endpoint._httpPut({
		path: path,
		params: reqParams,
		body: body,
		endpoint: 'models'
	});
};

endpoint.PutIntent = function(name, body) {

	var path = "/intents/"+name+"/versions/$LATEST";
	var reqParams = {};

	return endpoint._httpPut({
		path: path,
		params: reqParams,
		body: body,
		endpoint: 'models'
	});
};

endpoint.PutSlotType = function(name, body) {

	var path = "/slottypes/"+name+"/versions/$LATEST";
	var reqParams = {};

	return endpoint._httpPut({
		path: path,
		params: reqParams,
		body: body,
		endpoint: 'models'
	});
};

endpoint.StartImport = function(body) {

	var path = "/imports/";
	var reqParams = {};

	return endpoint._httpPost({
		path: path,
		params: reqParams,
		body: body,
		endpoint: 'models'
	});
};

endpoint.PostText = function(botName, botAlias, userId, body) {

	var path = "/bot/"+botName+"/alias/"+botAlias+"/user/"+userId+"/content";
	var reqParams = {};

	return endpoint._httpPost({
		path: path,
		params: reqParams,
		body: body,
		endpoint: 'runtime'
	});
};


