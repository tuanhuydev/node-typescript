function testDecorator() {
	return function() {
		console.log("This is mocking function");
	}
}


class Logging {
	constructor() {}
	
	// @testDecorator()
	make() {
		console.log("Make Log")
	}
}

const logService = new Logging();

logService.make();