import * as mongodb from "mongodb"

export interface Ingredient {
    name: string;
    quantity: number;
    unit: number;
    _id?: mongodb.ObjectId;
}