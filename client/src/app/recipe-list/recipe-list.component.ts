import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit{
  recipes:Recipe[] = [];

  constructor(private recipeService:RecipeService){}

  ngOnInit(): void {
    this.loadRecipes();
  }

  private loadRecipes(){
    this.recipeService.getAllRecipes().subscribe(res => {
      this.recipes = res;
    })
  }

  public deleteRecipe(id:string|undefined){

  }
}
