function test() {
	return function() {
		console.log("This is mocking function");
	}
}


class Logging {
	constructor() {}
	
	// @test()
	make() {
		console.log("Make Log")
	}
}

const logService = new Logging();

logService.make();