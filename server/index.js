import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import * as routes from './routes';
import * as models from './models';

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: 1}));
app.use(cors());

app.use((req, res, next) => {
    req.models = models;
    return next();
})

app.get("/", (req, res) => {
    res.send('Hello Adrian');
});

app.get("/json", routes.list);

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});