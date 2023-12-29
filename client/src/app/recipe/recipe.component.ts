import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent {

  constructor(private recipeService:RecipeService) {

  }

  recipe:Recipe = {};

  @Input()
  set id(recipeId: string) {
    this.recipeService.getSingleRecipe(recipeId).subscribe(res=>{
      this.recipe = res;
    })
  }
}
