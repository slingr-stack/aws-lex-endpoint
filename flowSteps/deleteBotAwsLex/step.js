step.deleteBotAwsLex = function (inputs) {

	var inputsLogic = {
		botName : inputs.botName || ""
	};

	var options = {
		path: "/bots/"+inputsLogic.botName,
	}


	return endpoint._delete(options);
}