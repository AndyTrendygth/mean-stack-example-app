import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private url:String = "http://localhost:5200";
  //private recipes$: Subject<Recipe[]> = new Subject

  constructor(private http:HttpClient) { }
}
