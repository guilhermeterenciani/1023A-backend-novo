import 'dotenv/config'
import express from 'express';
import rotas from './rotas.js';
import { NextFunction,Request,Response } from "express";

const app = express();
app.use(express.json());

//Explicando o que é um middleware

function Middleware(req:Request,res:Response,next:NextFunction){
    return res.status(401).json({mensagem:"Você não tem permissão para acessar esse recurso!"})
}
app.use(Middleware)
app.use(rotas);

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});