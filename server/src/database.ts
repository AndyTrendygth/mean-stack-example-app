import * as mongodb from "mongodb";
import { Recipe } from "./recipe";

export const collections: {
    recipes?: mongodb.Collection<Recipe>;
}={};

export async function connectToMongoDb(uri:string) {
    const client = new mongodb.MongoClient(uri);
    await client.connect();
    
    const db = client.db("test");
 
    const recipesCollection = db.collection<Recipe>("recipes");
    collections.recipes = recipesCollection;
}