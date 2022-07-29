import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import dbase from "./config/Database.js";
import cors from "cors";
import Routes from "./routes/Routes.js"

dotenv.config();
const app = express();

try {
    await dbase.authenticate();
    console.log('==== Database connected...====');
} catch (error) {
    console.log(error);
}
app.use(cors({ origin:'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json());
app.use(Routes);

app.listen(5000, ()=> console.log('=== Server up and running on port 5000... ==='));