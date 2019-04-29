endpoint.testing = function(text) {

    var requestParameters = {
        text: text
    };

    return endpoint._httpGet(requestParameters);
};
