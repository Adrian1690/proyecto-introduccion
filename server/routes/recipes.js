export const list =  (req, res, next) => {
    req.models.Recipe.list( (error, recipes) => {
        if (error) return next(error);
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