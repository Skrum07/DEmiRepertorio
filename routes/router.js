import express from "express";
import { home, agregarCancion } from "../controllers/controller.js"
const router = express.Router();

router.get("/", home);

router.post('/cancion', agregarCancion);

router.get('*', (req, res) => {
    
    res.send('404 - PAge not found')
});

export default router;