import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RecipeService} from "../recipe.service";
import {FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Recipe} from "../recipe";
import {AddRecipeRequest} from "../addRecipeRequest";

@Component({
  selector: 'app-recipe-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.css'
})
export class RecipeEditComponent {

  constructor(private recipeService:RecipeService, private fb: FormBuilder, private router:Router) {
  }

  categories: string[] = ['breakfast', 'main course', 'snack', 'dessert'];
  requestFailed: boolean = false;
  recipe:Recipe = {};
  editRecipeForm;
  @Input()
  set id(recipeId: string) {
    this.recipeService.getSingleRecipe(recipeId).subscribe(res=>{
      this.recipe = res;
      this.editRecipeForm = this.fb.group({
        title: [this.recipe.title, Validators.required],
        description: ['', Validators.required],
        category: ['', Validators.required],
        ingredients: this.fb.array([]),
        instructions: ['', [Validators.required, Validators.minLength(10)]]
      });
    })
  }



  get ingredients(): FormArray {
    return this.editRecipeForm.get('ingredients') as FormArray;
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

  updateRecipe(): void {
    if (this.editRecipeForm.valid) {
      this.requestFailed = false;
      const recipeData: any = this.editRecipeForm.value;

      const updatedRecipe: AddRecipeRequest = {
        title: recipeData.title,
        description: recipeData.description,
        category: recipeData.category,
        ingredients: recipeData.ingredients,
        instructions: recipeData.instructions
      };

      this.recipeService.updateRecipe(this.recipe._id || '',updatedRecipe).subscribe((res: any) => {
        if (res.insertedId != null) {
          this.router.navigate(["/recipes"]);
        } else {
          this.requestFailed = true;
        }
      });
    }
  }
}
