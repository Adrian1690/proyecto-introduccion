export const list =  (req, res, next) => {
    console.log(req.models.Recipe);
    
    req.models.Recipe.list( (error, recipes) => {
        if (error) return next(error);
        res.send({recipes});
    });
};

export const add = (req, res, next) => {
    if (!req.body.recipe) return next(new Error('No recipe payload.'));
    let recipe = req.body.recipe;//
    
    req.models.Recipe.create(recipe, function(error, response) {
      if (error) return next(error);
      res.send(response);
    });
};