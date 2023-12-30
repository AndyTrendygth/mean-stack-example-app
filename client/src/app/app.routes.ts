import { Routes } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeComponent } from './recipe/recipe.component';
import {RecipeAddComponent} from "./recipe-add/recipe-add.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";

export const routes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipeListComponent},
  { path: 'recipes/view/:id', component: RecipeComponent},
  { path: 'recipes/add', component:RecipeAddComponent},
  { path: 'recipes/edit/:id', component:RecipeEditComponent}
];
