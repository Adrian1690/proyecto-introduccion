import * as recipesRoute from './recipes';

export const recipes = recipesRoute;

export const list = (req, res) => {

    req.models.list(result => {
        res.json(result);
    });
}