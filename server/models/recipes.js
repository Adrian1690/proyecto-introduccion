import mongoose from "mongoose";

var recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    chef: {
        type: String,
        required: true,
    },
    description: {
        type: String
    }
});

recipeSchema.static({
    list: function (callback) {
        this.find({}, null, { sort: { _id: -1 } }, callback);
    }
})

export default mongoose.model('Recipe', recipeSchema, 'recipes');
