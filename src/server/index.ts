import * as express from 'express';
import { join } from 'path';
import { readFileSync } from 'fs';

const PORT = process.env.PORT || 4000;
const app = express();

app.get('*', (req, res) => {
	res.send('Hello world');
});

console.log(process.env.NODE_ENV);

app.listen(PORT, () => {
	console.log(`listening on http://localhost:${PORT}`);
});