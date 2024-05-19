// app.js
import express from 'express';
import morgan from "morgan";
import { experienciasRoute, experienciaRoute } from './routes/experienciasRoutes.js';

const app = express();
const port = 3002;

app.use(express.json());
app.use(morgan('dev'));

app.get('/experiencias', experienciasRoute);
app.get('/experiencia/:id', experienciaRoute);


app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
