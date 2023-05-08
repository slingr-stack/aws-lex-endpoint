step.createBotVersionAwsLex = function (inputs) {

	var inputsLogic = {
		checksum :  inputs.checksum || "",
		botName : inputs.botName || ""
	};

	var options = {
		path: "/bots/"+inputsLogic.botName+"/versions",
		body: {
			checksum :  inputsLogic.checksum || ""
		}
	}

	return endpoint._post(options);
}