export const list = (req, res) => {

    req.models.list(result => {
        res.json(result);
    });
}