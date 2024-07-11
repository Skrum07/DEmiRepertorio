import express from "express";
import router from "./routes/router.js";

const app = express();

const PORT = process.env.PORT || 3000;


//Midelwares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes
app.use("/", router); 

app.listen(PORT, () => console.log(`Server running on port http://localhost:3000`));