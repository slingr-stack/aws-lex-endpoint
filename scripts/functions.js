////////////////////////////////////////////////////////////////////////////
//                                                                        //
//             This file was generated with "slingr-helpgen"              //
//                                                                        //
//               For more info, check the following links:                //
//             https://www.npmjs.com/package/slingr-helpgen               //
//           https://github.com/slingr-stack/slingr-helpgen               //
//                                                                        //
////////////////////////////////////////////////////////////////////////////

endpoint.bots = {};

endpoint.bots.versions = {};

endpoint.intents = {};

endpoint.intents.versions = {};

endpoint.slottypes = {};

endpoint.slottypes.versions = {};

endpoint.bots.aliases = {};

endpoint.bots.aliases.channels = {};

endpoint.slottypes.version = {};

endpoint.bots.utterances = {};

endpoint.builtins = {};

endpoint.builtins.intents = {};

endpoint.builtins.slottypes = {};

endpoint.exports = {};

endpoint.imports = {};

endpoint.bots.versions.$LATEST = {};

endpoint.intents.versions.$LATEST = {};

endpoint.slottypes.versions.$LATEST = {};

endpoint.bot = {};

endpoint.bot.alias = {};

endpoint.bot.alias.user = {};

endpoint.bot.alias.user.content = {};

endpoint.bot.alias.user.text = {};

endpoint.bots.versions.post = function(name, httpOptions) {
    if (!name) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [name].');
        return;
    }
    var url = parse('/bots/:name/versions', [name]);
    sys.logs.debug('[awsLex] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.intents.versions.post = function(name, httpOptions) {
    if (!name) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [name].');
        return;
    }
    var url = parse('/intents/:name/versions', [name]);
    sys.logs.debug('[awsLex] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.slottypes.versions.post = function(name, httpOptions) {
    if (!name) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [name].');
        return;
    }
    var url = parse('/slottypes/:name/versions', [name]);
    sys.logs.debug('[awsLex] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.bots.delete = function(name, httpOptions) {
    if (!name) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [name].');
        return;
    }
    var url = parse('/bots/:name', [name]);
    sys.logs.debug('[awsLex] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.bots.aliases.delete = function(botName, name, httpOptions) {
    if (!botName || !name) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [botName,name].');
        return;
    }
    var url = parse('/bots/:botName/aliases/:name', [botName, name]);
    sys.logs.debug('[awsLex] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.bots.aliases.channels.delete = function(botName, aliasName, name, httpOptions) {
    if (!botName || !aliasName || !name) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [botName,aliasName,name].');
        return;
    }
    var url = parse('/bots/:botName/aliases/:aliasName/channels/:name', [botName, aliasName, name]);
    sys.logs.debug('[awsLex] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.bots.versions.delete = function(name, version, httpOptions) {
    if (!name || !version) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [name,version].');
        return;
    }
    var url = parse('/bots/:name/versions/:version', [name, version]);
    sys.logs.debug('[awsLex] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.intents.delete = function(name, httpOptions) {
    if (!name) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [name].');
        return;
    }
    var url = parse('/intents/:name', [name]);
    sys.logs.debug('[awsLex] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.intents.versions.delete = function(name, version, httpOptions) {
    if (!name || !version) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [name,version].');
        return;
    }
    var url = parse('/intents/:name/versions/:version', [name, version]);
    sys.logs.debug('[awsLex] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.slottypes.delete = function(name, httpOptions) {
    if (!name) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [name].');
        return;
    }
    var url = parse('/slottypes/:name', [name]);
    sys.logs.debug('[awsLex] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.slottypes.version.delete = function(name, version, httpOptions) {
    if (!name || !version) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [name,version].');
        return;
    }
    var url = parse('/slottypes/:name/version/:version', [name, version]);
    sys.logs.debug('[awsLex] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.bots.utterances.delete = function(botName, userId, httpOptions) {
    if (!botName || !userId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [botName,userId].');
        return;
    }
    var url = parse('/bots/:botName/utterances/:userId', [botName, userId]);
    sys.logs.debug('[awsLex] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.bots.versions.get = function(name, versionoralias, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 2:
			url = parse('/bots/:name/versions/:versionoralias', [name, versionoralias]);
			break;
		case 1:
			url = parse('/bots/:name/versions', [name]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[awsLex] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.bots.aliases.get = function(botName, name, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 2:
			url = parse('/bots/:botName/aliases/:name', [botName, name]);
			break;
		case 1:
			url = parse('/bots/:botName/aliases', [botName]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[awsLex] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.bots.aliases.channels.get = function(botName, aliasName, name, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 3:
			url = parse('/bots/:botName/aliases/:aliasName/channels/:name', [botName, aliasName, name]);
			break;
		case 2:
			url = parse('/bots/:botName/aliases/:aliasName/channels', [botName, aliasName]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[awsLex] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.bots.get = function(httpOptions) {
    var url = parse('/bots');
    sys.logs.debug('[awsLex] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.builtins.intents.get = function(signature, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/builtins/intents/:signature', [signature]);
			break;
		case 0:
			url = parse('/builtins/intents');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[awsLex] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.builtins.slottypes.get = function(httpOptions) {
    var url = parse('/builtins/slottypes');
    sys.logs.debug('[awsLex] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.exports.get = function(httpOptions) {
    var url = parse('/exports');
    sys.logs.debug('[awsLex] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.imports.get = function(importId, httpOptions) {
    if (!importId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [importId].');
        return;
    }
    var url = parse('/imports/:importId', [importId]);
    sys.logs.debug('[awsLex] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.intents.versions.get = function(name, version, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 2:
			url = parse('/intents/:name/versions/:version', [name, version]);
			break;
		case 1:
			url = parse('/intents/:name/versions', [name]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[awsLex] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.intents.get = function(httpOptions) {
    var url = parse('/intents');
    sys.logs.debug('[awsLex] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.slottypes.versions.get = function(name, version, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 2:
			url = parse('/slottypes/:name/versions/:version', [name, version]);
			break;
		case 1:
			url = parse('/slottypes/:name/versions', [name]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[awsLex] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.slottypes.get = function(httpOptions) {
    var url = parse('/slottypes');
    sys.logs.debug('[awsLex] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.bots.utterances.get = function(botname, httpOptions) {
    if (!botname) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [botname].');
        return;
    }
    var url = parse('/bots/:botname/utterances', [botname]);
    sys.logs.debug('[awsLex] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.bots.versions.$LATEST.put = function(name, httpOptions) {
    if (!name) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [name].');
        return;
    }
    var url = parse('/bots/:name/versions/$LATEST', [name]);
    sys.logs.debug('[awsLex] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.bots.aliases.put = function(botName, name, httpOptions) {
    if (!botName || !name) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [botName,name].');
        return;
    }
    var url = parse('/bots/:botName/aliases/:name', [botName, name]);
    sys.logs.debug('[awsLex] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.intents.versions.$LATEST.put = function(name, httpOptions) {
    if (!name) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [name].');
        return;
    }
    var url = parse('/intents/:name/versions/$LATEST', [name]);
    sys.logs.debug('[awsLex] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.slottypes.versions.$LATEST.put = function(name, httpOptions) {
    if (!name) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [name].');
        return;
    }
    var url = parse('/slottypes/:name/versions/$LATEST', [name]);
    sys.logs.debug('[awsLex] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.imports.post = function(httpOptions) {
    var url = parse('/imports');
    sys.logs.debug('[awsLex] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.bot.alias.user.content.post = function(botName, botAlias, userId, httpOptions) {
    if (!botName || !botAlias || !userId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [botName,botAlias,userId].');
        return;
    }
    var url = parse('/bot/:botName/alias/:botAlias/user/:userId/content', [botName, botAlias, userId]);
    sys.logs.debug('[awsLex] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.bot.alias.user.text.post = function(botName, botAlias, userId, httpOptions) {
    if (!botName || !botAlias || !userId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [botName,botAlias,userId].');
        return;
    }
    var url = parse('/bot/:botName/alias/:botAlias/user/:userId/text', [botName, botAlias, userId]);
    sys.logs.debug('[awsLex] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

////////////////////////////////////
// Public API - Generic Functions //
////////////////////////////////////

endpoint.get = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options, callbackData, callbacks);
};

endpoint.post = function(url, httpOptions, callbackData, callbacks) {
    options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options, callbackData, callbacks);
};

endpoint.put = function(url, httpOptions, callbackData, callbacks) {
    options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options, callbackData, callbacks);
};

endpoint.patch = function(url, httpOptions, callbackData, callbacks) {
    options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options, callbackData, callbacks);
};

endpoint.delete = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options, callbackData, callbacks);
};

endpoint.head = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._head(options, callbackData, callbacks);
};

endpoint.options = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._options(options, callbackData, callbacks);
};

endpoint.utils = {};
            
endpoint.utils.parseTimestamp = function(dateString) {
    if (!dateString) {
        return null;
    }
    var dt = dateString.split(/[: T\-]/).map(parseFloat);
    return new Date(dt[0], dt[1] - 1, dt[2], dt[3] || 0, dt[4] || 0, dt[5] || 0, 0);
};

endpoint.utils.formatTimestamp = function(date) {
    if (!date) {
        return null;
    }
    var pad = function(number) {
        var r = String(number);
        if ( r.length === 1 ) {
            r = '0' + r;
        }
        return r;
    };
    return date.getUTCFullYear()
        + '-' + pad( date.getUTCMonth() + 1 )
        + '-' + pad( date.getUTCDate() )
        + 'T' + pad( date.getUTCHours() )
        + ':' + pad( date.getUTCMinutes() )
        + ':' + pad( date.getUTCSeconds() )
        + '.' + String( (date.getUTCMilliseconds()/1000).toFixed(3) ).slice( 2, 5 )
        + 'Z';
};

///////////////////////
//  Private helpers  //
///////////////////////

var mergeJSON = function (json1, json2) {
    const result = {};
    var key;
    for (key in json1) {
        if(json1.hasOwnProperty(key)) result[key] = json1[key];
    }
    for (key in json2) {
        if(json2.hasOwnProperty(key)) result[key] = json2[key];
    }
    return result;
}

var concatQuery = function (url, key, value) {
    return url + ((!url || url.indexOf('?') < 0) ? '?' : '&') + key + "=" + value;
};

var checkHttpOptions = function (url, options) {
    options = options || {};
    if (!!url) {
        if (isObject(url)) {
            // take the 'url' parameter as the options
            options = url || {};
        } else {
            if (!!options.path || !!options.params || !!options.body) {
                // options contains the http package format
                options.path = url;
            } else {
                // create html package
                options = {
                    path: url,
                    body: options
                }
            }
        }
    }
    return options;
};

var isObject = function (obj) {
    return !!obj && stringType(obj) === '[object Object]'
};

var stringType = Function.prototype.call.bind(Object.prototype.toString);

var parse = function (str) {
    try {
        if (arguments.length > 1) {
            var args = arguments[1], i = 0;
            return str.replace(/(:(?:\w|-)+)/g, () => {
                if (typeof (args[i]) != 'string') throw new Error('Invalid type of argument: [' + args[i] + '] for url [' + str + '].');
                return args[i++];
            });
        } else {
            if (str) {
                return str;
            }
            throw new Error('No arguments nor url were received when calling the helper. Please check it\'s definition.');
        }
    } catch (err) {
        sys.logs.error('Some unexpected error happened during the parse of the url for this helper.')
        throw err;
    }
}