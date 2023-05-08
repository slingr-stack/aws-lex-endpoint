step.getBotVersionAwsLex = function (inputs) {

	var inputsLogic = {
		botName : inputs.botName || "",
		versionoralias: inputs.versionoralias || ""
	};

	var options = {
		path: "/bots/"+inputsLogic.botName+"/versions/"+inputsLogic.versionoralias,
	}


	return endpoint._get(options);
}