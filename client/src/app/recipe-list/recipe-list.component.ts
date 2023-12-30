import {Component, OnInit, signal, WritableSignal} from '@angular/core';
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
  recipes = signal<Recipe[]>([]);

  constructor(private recipeService:RecipeService){}

  ngOnInit(): void {
    this.loadRecipes();
  }

  private loadRecipes(){
    this.recipeService.getAllRecipes().subscribe(res => {
      this.recipes.set(res);
    })
  }

  public deleteRecipe(id: string): void {
    this.recipeService.deleteRecipe(id).subscribe((res:any)=>{
      if(res.deletedCount==1){
        this.recipes.update(arr=>
           arr.filter(recipe => recipe._id !== id));
      }
    })
  }
}
