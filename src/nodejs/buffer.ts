const buffer = Buffer.from('Hello, World!');
const emptyBuffer = Buffer.alloc(10);

const hamBurgerBuffer = Buffer.from("🍔");

for (const byte of hamBurgerBuffer) {
	console.log(byte.toString(16));
}

console.log(buffer.toString());
console.log(emptyBuffer.toString());
/////////////////////////////////////////
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
	const { query } = url.parse(req.url, true);
	const date = query.year + " " + query.month;

	res.setHeader('Content-Type', 'text/html');
	res.end(date)
});

server.listen(3000);