step.getBotVersionAwsLex = function (inputs) {

	var inputsLogic = {
		name : inputs.name || "",
		versionoralias: inputs.versionoralias || ""
	};

	var options = {
		path: "/bots/"+inputsLogic.name+"/versions/"+inputsLogic.versionoralias,
	}


	return endpoint._get(options);
}