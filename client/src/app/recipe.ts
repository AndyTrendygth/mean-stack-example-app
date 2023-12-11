import { Ingredient } from "./ingredient";

export interface Recipe {
    title?: string;
    description?: string;
    category?: "breakfast" | "main course" | "snack" | "dessert";
    ingredients?: Ingredient[];
    instructions?: string;
    _id?: string;
}
