import express, { Request, Response } from 'express';
import * as path from 'path';

const app = express();

const publicDirectoryPath = path.resolve(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

app.get('/', (req: Request, res: Response) => {
    res.send('Hello world');
});

export default app;
