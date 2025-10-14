import 'dotenv/config'
import express from 'express';
import rotasAutenticadas from './rotas/rotas-autenticadas.js';
import rotasNaoAutenticadas from './rotas/rotas-nao-autenticadas.js';
import Auth from './middleware/auth.js';

const app = express();
app.use(express.json());


app.use(rotasNaoAutenticadas)
app.use(Auth)
app.use(rotasAutenticadas);

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});