import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormControl, FormGroup, Validators, FormArray, ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-recipe-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './recipe-add.component.html',
  styleUrl: './recipe-add.component.css'
})
export class RecipeAddComponent {

  constructor(private fb: FormBuilder) {
  }

  categories:string[] = ['breakfast', 'main course', 'snack', 'dessert'];

  addRecipeForm =
    this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    category: ['', Validators.required],
    ingredients: [this.fb.array([]), Validators.required],
    instructions: ['', [ Validators.required, Validators.minLength(10)]]
  });

  get ingredients(): FormArray {
    return this.addRecipeForm.get('ingredients') as FormArray;
  }

  addIngredient(): void {
    this.ingredients.push(this.fb.group({
      name: ['', Validators.required],
      quantity: ['', Validators.min(0)],
      unit: ['', Validators.minLength(1)]
    }))
  }

  removeIngredient(index:number): void {
    this.ingredients.removeAt(index);
  }
}
