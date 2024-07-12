import { text } from "express";
import { pool } from "../config/db.js";

const agregarCancionQueries = async (datos) => {
    try {
        const sql = {
            text: "INSERT INTO canciones  (titulo, artista, tono) VALUES ($1, $2, $3) returning *",
            values: datos,
        };
        const response = await pool.query(sql);
        if(response.rowCount > 0) {
            return response.rows[0]
        } else {
            return throwError('La cancion no se pudo agregar')
        }
    } catch (err) {
        console.error("Error al agregar la calncion:", err);
        throw err;
    }
};

const getSongsQuery = async () => {
    try {
        const query = { text: "SELECT * FROM canciones" };
        const result = await pool.query(query);
        if(result.rowCount > 0) {
            return result.rows;
        } else {
            return throwError("Canciones no fueron encontradas")
        }
        return result.rows;
    } catch (error) {
        console.log("code:" + error.code + "\nMessage: " + error);
    }
};

const editSongQuery = async (titulo, artista, tono , id) => {
    try {
        const query = {
            text: "UPDATE canciones SET titulo = $1, artista = $2, tono = $3, WHERE id = $4 RETURNING *",
            values: [titulo, artista, tono, id],
        };
        const result = await pool.query(query);
        if (result.rowCount > 0) {
            return result.rows;
        } else {
            return throwError("Cancion no fue editada")
        }

    } catch (error) {
        console.log("code:" + error.code + "\nMessage: " + error);
    }
};

export { agregarCancionQueries, getSongsQuery, editSongQuery }