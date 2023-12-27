import * as express from "express";
import * as mongodb from "mongodb";
import { collections } from "./database";
import {Recipe} from "./recipe";

export const recipeRouter = express.Router();
recipeRouter.use(express.json());

recipeRouter.get("/", async (_req, res) => {
    try {
        const recipes = await collections.recipes.find({}).toArray();
        res.status(200).send(recipes);
    } catch (error) {
        res.status(500).json({error: error.message});
    }       
});

recipeRouter.get("/:id",async (req, res) => {
    try {
        const id = req?.params.id;
        const recipe = await collections.recipes.findOne({_id: new mongodb.ObjectId(id)});

        if (recipe) {
            res.status(200).send(recipe)
        } else {
            res.status(404).json({error: `No recipe with id: ${id}`});
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

recipeRouter.post("/", async (req, res)=>{
    try {
        const recipeToInsert:Recipe = req.body;
        const insertedRecipe = await collections.recipes.insertOne(recipeToInsert);
        if(insertedRecipe.acknowledged) {
            res.status(201).send(insertedRecipe)
        } else {
            res.status(500).json({error: "Failed to create recipe."});
        }
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

recipeRouter.delete("/:id", async (req,res)=>{
    try {
        const id:string = req?.params.id;
        const deletedRecipe = await collections.recipes.deleteOne({_id:new mongodb.ObjectId(id)});

        if(deletedRecipe.deletedCount>0){
            res.status(202).send(deletedRecipe);
        } else if (deletedRecipe.deletedCount==0){
            res.status(404).json({error: "No recipe with id " + id});
        }
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

recipeRouter.put("/:id", async(req,res)=>{
    try {
        const id:string = req?.params.id;
        const recipeWithChanges:Recipe = req.body;
        const updatedRecipe = await collections.recipes.updateOne({_id:new mongodb.ObjectId(id)}, {$set: recipeWithChanges});

        if (updatedRecipe.matchedCount>0 && updatedRecipe.modifiedCount>0){
            res.status(200).send(updatedRecipe);
        } else if (updatedRecipe.matchedCount==0){
            res.status(404).json({error: "No recipe with id " + id});
        } else if (updatedRecipe.matchedCount>0 && updatedRecipe.modifiedCount==0){
            res.status(304).send(updatedRecipe);
        }
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});