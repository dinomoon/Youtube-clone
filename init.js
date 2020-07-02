import app from "./app";
import "./db";
import "./models/Video";
import "./models/Comment";
import "./models/User";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, console.log(`Listening on http://localhost:${PORT}`));
