import express from "express";
import router from "./routes";
import cors from 'cors'

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

const port = 3131;

app.listen(port, () => {
    console.log('Server is running on port: ' + port)
})
