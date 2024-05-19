// app.js
import express from 'express';
import morgan from "morgan";
import { getAllExperiencesRoute, getExperienceRoute } from './routes/experienciasRoutes.js';
import { createReservaRoute, getReservaByIdRoute } from './routes/reservasRoutes.js';

const app = express();
const port = 3002;

app.use(express.json());
app.use(morgan('dev'));

app.get('/experiencias', getAllExperiencesRoute);
app.get('/experiencia/:id', getExperienceRoute);
app.post('/reserva', createReservaRoute);
app.get('/reservas/:id', getReservaByIdRoute);


app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
