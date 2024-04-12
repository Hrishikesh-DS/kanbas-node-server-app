import express from 'express';
import Lab5 from './Lab5.js';
import cors from "cors";
import mongoose from "mongoose";
import CourseRoutes from './Kanbas/Courses/routes.js';
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from './Kanbas/Assignments/routes.js';
import UserRoutes from "./Kanbas/Users/routes.js";
import session from "express-session";
import "dotenv/config";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/kanbas';
mongoose.connect(CONNECTION_STRING);

const app = express();
// app.set('trust proxy', 1);
app.use(
    cors({
        credentials: true,
        origin: 'https://assignment-6--heroic-crisp-da7720.netlify.app'
    })
);
const sessionOptions = {
    secret: process.env.SESSION_SECRET || 'AWZPH5450Q',
    resave: false,
    saveUninitialized: false,
    proxy: true,
    cookie: {
        sameSite: 'none',
        secure: true,
        domain: "kanbas-node-server-app-a6-iwky.onrender.com"
    }
};


app.use(session(sessionOptions));


app.use(express.json());
ModuleRoutes(app);
AssignmentRoutes(app);
Lab5(app);
CourseRoutes(app);
UserRoutes(app);
app.listen(process.env.PORT || 4000);