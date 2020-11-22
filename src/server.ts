import express, { json, request, response } from 'express';
import path from 'path';
import 'express-async-errors';
import cors from 'cors';

//Handlers
import errorHandler from './errors/handler'

//DB connection
import './database/connection';
import routes from './routes'

const app = express();

//Cors (allow access from differente domains)
app.use(cors());

app.use(express.json());

// query:   http://localhost:3333/users?search=diego   Usado para uma busca
// route:   http://localhost:3333/users/1              Buscar um identificador
// body:    Corpo com conteúdo da mensage

//Routes
app.use(routes);

//Images
app.use('/uploads', express.static(path.join(__dirname, "..", 'uploads')));

//Handler
app.use(errorHandler);

//Status test
app.get('/status', (request,response) => {
    response.json({
        "status": "201",
        "message": "Hello from Happy app"
    });
})

app.listen(3333);

