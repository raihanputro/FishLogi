import express from 'express';
import cors from 'cors';

import fishRoutes from './routes/fishRoutes.js';

const App = express();

App.use(cors());
App.use(express.json());

App.use('/fishes', fishRoutes);

App.listen(5000, () => console.log(`Server berjalan pada http://localhost/5000`));