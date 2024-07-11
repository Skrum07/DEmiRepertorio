import path from "path";
import { agregarCancionQueries } from "../models/queries.js";
const __dirname = path.resolve();

export const home = (req, res) => {
    res.sendFile(__dirname + "/views/index.html")    
};


export const agregarCancion = async(req, res) => {
    const { titulo, artista, tono } = req.body;
    const datos = [titulo, artista, tono];
    const cancion = await agregarCancionQueries(datos);
    res.send(cancion);
}