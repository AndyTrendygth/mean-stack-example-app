import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, Validators, FormArray, ReactiveFormsModule} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {RecipeService} from "../recipe.service";
import {AddRecipeRequest} from "../addRecipeRequest";

@Component({
  selector: 'app-recipe-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './recipe-add.component.html',
  styleUrl: './recipe-add.component.css'
})
export class RecipeAddComponent {

  constructor(private fb: FormBuilder, private recipeService: RecipeService, private router:Router) {
  }

  categories: string[] = ['breakfast', 'main course', 'snack', 'dessert'];
  requestFailed: boolean = false;

  addRecipeForm =
    this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      ingredients: this.fb.array([]),
      instructions: ['', [Validators.required, Validators.minLength(10)]]
    });

  get ingredients(): FormArray {
    return this.addRecipeForm.get('ingredients') as FormArray;
  }

  addIngredient(): void {
    this.ingredients.push(this.fb.group({
      name: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(0)]],
      unit: ['', [Validators.required, Validators.minLength(1)]]
    }))
  }

  removeIngredient(index: number): void {
    this.ingredients.removeAt(index);
  }

  createRecipe(): void {
    if (this.addRecipeForm.valid) {
      this.requestFailed=false;
      const recipeData: any = this.addRecipeForm.value;

      const newRecipe: AddRecipeRequest = {
        title: recipeData.title,
        description: recipeData.description,
        category: recipeData.category,
        ingredients: recipeData.ingredients,
        instructions: recipeData.instructions
      };

      this.recipeService.createRecipe(newRecipe).subscribe((res:any) => {
        if(res.insertedId!=null){
          this.router.navigate(["/recipes"]);
        } else {
          this.requestFailed=true;
        }
      });
    }
  }

}
