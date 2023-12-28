import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private url:String = "http://localhost:5200/api/recipes";

  constructor(private http:HttpClient) { }

  getAllRecipes(){
    return this.http.get<Recipe[]>(this.url+"/");
  }

  getSingleRecipe(id:String){
    return this.http.get<Recipe>(this.url+"/"+id);
  }

  createRecipe(recipe:Recipe){
    return this.http.post<unknown>(this.url+"/", recipe);
  }

  deleteRecipe(id:string){
    return this.http.delete<unknown>(this.url+"/"+id);
  }

  updateRecipe(id:string, recipe:Recipe){
    return this.http.put<unknown>(this.url+"/"+id, recipe);
  }

}
