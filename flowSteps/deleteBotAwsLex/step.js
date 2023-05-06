step.deleteBotAwsLex = function (inputs) {

	var inputsLogic = {
		name : inputs.name || ""
	};

	var options = {
		path: "/bots/"+inputsLogic.name,
	}


	return endpoint._delete(options);
}