// Abstract Factory Pattern
interface DatabaseFactory {
	createConnection(): ConnectionHandler;
	buildQuery(): QueryBuilderHandler;
}

interface ConnectionHandler {
	connect(): void;
}

interface QueryBuilderHandler {
	build(query: string): string;
}

class MongoConnection implements ConnectionHandler {
	connect(): void {
		console.log("Connect to MongoDB");
	}
}

class MongoQueryBuilder implements QueryBuilderHandler {
	build(query: string): string {
		return "MongoDB build " + query;
	}
}

class MySQLConnection implements ConnectionHandler {
	connect(): void {
		console.log("Connect to MySQL");
	}
}

class MySQLQueryBuilder implements QueryBuilderHandler {
	build(query: string): string {
		return "MySQL build " + query;
	}
}

// Factory

class MongoFactory implements DatabaseFactory {
	buildQuery(): QueryBuilderHandler {
		return new MongoQueryBuilder();
	}
	createConnection(): ConnectionHandler {
		return new MongoConnection();
	}
}


class MySQLFactory implements DatabaseFactory {
	buildQuery(): QueryBuilderHandler {
		return new MySQLQueryBuilder();
	}
	createConnection(): ConnectionHandler {
		return new MySQLConnection();
	}
}




















class Application {
	private connectionHandler: ConnectionHandler;
	private queryBuilderHandler: QueryBuilderHandler;









	constructor(factory: DatabaseFactory) {
		this.connectionHandler = factory.createConnection();
		this.queryBuilderHandler = factory.buildQuery();
	}

	run(query: string) {
		this.connectionHandler.connect();
		const builtQuery: string = this.queryBuilderHandler.build(query);
		console.log("Run ", builtQuery);
	}
}


const mongoFactory = new MongoFactory();
const mongoApp = new Application(mongoFactory);

mongoApp.run("Select * from users");

const mySQLFactory = new MySQLFactory();
const mySQLApp = new Application(mySQLFactory);

mySQLApp.run("Select * from users");
