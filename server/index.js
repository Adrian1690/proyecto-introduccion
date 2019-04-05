import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import * as routes from './routes';
import * as models from './models';
import mongoose from 'mongoose';

const dbUrl = process.env.MONGOHQ_URL || 'mongodb://localhost:27017/recipe';
mongoose.connect(dbUrl, {useNewUrlParser:true});
const db = mongoose.connection;
db.once('open', function() {
    console.log('connected to mongooo')
});

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

app.get('/recipes', routes.recipes.list);

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});