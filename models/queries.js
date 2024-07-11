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

export { agregarCancionQueries }