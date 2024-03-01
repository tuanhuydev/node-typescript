import { readHome } from './src/nodejs/file';
import * as http from "http";

const server = http.createServer((req, res) => {
	readHome.then((data) => {
		console.log('data', data);
		res.setHeader('Content-Type', 'text/html');
		return res.end(data);
	});
});
server.listen(3000, () => { console.log('Server is running on port 3000') });
