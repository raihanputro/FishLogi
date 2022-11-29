import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import fishRoutes from './routes/fishRoutes.js';
import usersRoutes from './routes/fishRoutes.js'

dotenv.config();

const App = express();

App.use(cors());
App.use(express.json());

App.use('/fishes', fishRoutes);
App.use('/users', usersRoutes);

App.use(bodyParser.json({ limit: "30mb", extended: true }));
App.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

const PORT = process.env.PORT;

try {
    App.listen(PORT, () => console.log(`Server berjalan pada http://localhost/${PORT}`));
} catch (error) {
    console.log(`${error}, tidak dapat terhubung!`);
}

