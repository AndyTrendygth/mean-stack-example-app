import * as dotenv from "dotenv"
import express from "express"
import { connectToMongoDb } from "./database"
import { error } from "console";
import { recipeRouter } from "./recipe.routes";

dotenv.config();

const {CONNECTION_URI, EXPRESS_PORT} = process.env;

if (!CONNECTION_URI) {
    console.error("Missing connection URI in .env");
    process.exit(1);
}

if (!EXPRESS_PORT) {
    console.error("Missing express port in .env");
    process.exit(1);
}

connectToMongoDb(CONNECTION_URI)
.then(()=>{
    const app = express();
    const cors=require('cors');
    app.use(cors({
        origin: 'http://localhost:4200', // Replace with your Angular app's URL
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
    }));
    app.use("/api/recipes", recipeRouter);
    app.listen(EXPRESS_PORT,()=>{
        console.log(`Server running on localhost:${EXPRESS_PORT}`);
    })
})
.catch(error=> console.error(error));