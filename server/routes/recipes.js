export const list =  (req, res, next) => {
    req.models.Recipe.list( (error, recipes) => {
        if (error) return next(error);
        
        // test porpuses
        /*
        const response = [
            {"_id":"5e864bc6055eeea75656692f","title":"Recipe22","category":"category2","chef":"chef2","description":"description2"},
            {"_id":"5ca6a7f5002f14ba7e2a86f2","title":"Recipe1","category":"category1","chef":"chef1","description":"description1"}
        ]
        res.send({recipes: response});
        */
        
        res.send({recipes});
    });
};

export const add = (req, res, next) => {
    if (!req.body) return next(new Error('No recipe payload.'));
    let recipe = req.body;//
    req.models.Recipe.create(recipe, function(error, response) {
      if (error) return next(error);
      res.send(response);
    });
};

/**
 * Edit recipe
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
export const edit = (req, res, next) => {
    if (!req.params.id) return next(new Error('No Recipe ID.'));
    req.models.Recipe.findById(req.params.id, (error, recipe) => {
      if (error) return next(error);
      recipe.update({$set: req.body}, (error, count, raw) => {
        if (error) return next(error);
        res.send({affectedCount: count});
      })
    });
    // req.models.Article.findByIdAndUpdate(req.params.id, {$set: req.body.article}, function(error, doc) {
      // if (error) return next(error);
      // res.send(doc);
    // });
};

export const remove = (req, res, next) => {
    if (!req.params.id) return next(new Error('No recipe ID.'));
    req.models.Recipe.findById(req.params.id, function(error, recipe) {
      if (error) return next(error);
      if (!recipe) return next(new Error('recipe not found'));
      recipe.remove(function(error, doc){
        if (error) return next(error);
        res.send(doc);
      });
    });
    // req.models.Article.findByIdAndRemove(req.params.id, function(error, doc) {
      // if (error) return next(error);
      // res.send(doc);
    // });
};