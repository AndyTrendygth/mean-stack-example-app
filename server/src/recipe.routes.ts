import * as express from "express";
import * as mongodb from "mongodb";
import { collections } from "./database";

export const recipeRouter = express.Router();
recipeRouter.use(express.json());

recipeRouter.get("/", async (_req, res) => {
    try {
        const recipes = await collections.recipes.find({}).toArray();
        res.status(200).send(recipes);
    } catch (error) {
        res.status(500).send(error.message);
    }       
});

recipeRouter.get("/:id",async (req, res) => {
    try {
        const id = req?.params.id;
        const recipe = await collections.recipes.findOne({_id: new mongodb.ObjectId(id)});

        if (recipe) {
            res.status(200).send(recipe)
        } else {
            res.status(404).send(`No recipe with id: ${id}`);
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});