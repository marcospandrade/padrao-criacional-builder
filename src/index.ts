import express from 'express';
import { UserRoutes } from './routes/user.routes';

const app = express();

app.use(express.json());

app.use(UserRoutes);

app.listen(3000, () => console.log('Server is running!!'));
