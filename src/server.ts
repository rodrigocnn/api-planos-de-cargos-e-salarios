import 'reflect-metadata';
import express, { Response,  Request, NextFunction } from 'express'
import "../src/config/container"
import { routes } from "./routes"
import { AppError } from './shared/errors/AppError';

const app = express()

app.use(express.json())
app.use(routes)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({ message: err.message });
    }

    return res.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`,
    });
});

app.listen(3000, ()=> console.log("Server is running"))