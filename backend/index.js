import express from "express";
import cors from "cors";
import dbase from "./config/Database.js";
import Routes from "./routes/Routes.js";
import Users from "./models/UserModel.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();
const app = express();

try {
    await dbase.authenticate();
    console.log('Database tersambung...');
    await Users.sync();
} catch (error) {
    console.error(error);
}

app.use(cookieParser());
app.use(cors({ credentials:true, origin:"http://localhost:3000" }));
app.use(express.json());
app.use(Routes);

app.listen(5000, ()=> console.log('Server up and running on port 5000...'));