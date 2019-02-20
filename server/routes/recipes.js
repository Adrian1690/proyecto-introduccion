export const list = (req, res) => {
    req.models.recipes.list(result => {
        res.json(result);
    });
}