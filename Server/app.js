import express from "express";
import bodyParser from "body-parser";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import session from 'express-session';
import dotenv from 'dotenv';
import mainModel from "./Model/mainModel.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 5000;
const Model=new mainModel();
// Middleware to parse JSON bodies
app.use(express.json());
app.use(bodyParser.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

app.post("/Login", async(req, res) => {
    try {
        const {Email,Password}=req.body;
        const result=await Model.getStd({Email,Password});
        res.status(200).json({ message: 'Login successful' });
        // Handle login logic here
    } catch (err) {
        // Handle errors here
        console.log("error in /Login route:", err);
        res.status(500).json({ message: err, error: err });
    }
});

app.post("/SignUp", async (req, res) => {
    try {
        const {Email,UserName,Password}=req.body;
        const result=await Model.setStd({Email,UserName,Password});
        res.status(200).json({ message: 'Sign up successful' });
    } catch (err) {
        // Handle errors here
        console.log("error in /SignUp route:", err.message);
        res.status(500).json({ message: 'Sign up failed', error: err.message });
    }
});

app.listen(port, () => {
    console.log("Listening on port " + port);
});
