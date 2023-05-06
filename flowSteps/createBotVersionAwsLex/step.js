step.createBotVersionAwsLex = function (inputs) {

	var inputsLogic = {
		checksum :  inputs.checksum || "",
		name : inputs.name || ""
	};

	var options = {
		path: "/bots/"+inputsLogic.name+"/versions",
		body: {
			checksum :  inputsLogic.checksum || ""
		}
	}

	return endpoint._post(options);
}