import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { RecipeListComponent } from './recipe-list.component';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';

describe('RecipeListComponent', () => {
  let component: RecipeListComponent;
  let fixture: ComponentFixture<RecipeListComponent>;
  let mockRecipeService: jasmine.SpyObj<RecipeService>;

  const mockRecipes: Recipe[] = [
    // Define mock recipes here
  ];

  beforeEach(() => {
    mockRecipeService = jasmine.createSpyObj('RecipeService', ['getAllRecipes']);

    TestBed.configureTestingModule({

      providers: [{ provide: RecipeService, useValue: mockRecipeService }],
      imports: [RecipeListComponent, ]
    });

    fixture = TestBed.createComponent(RecipeListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load recipes on initialization', () => {
    // Arrange
    mockRecipeService.getAllRecipes.and.returnValue(of(mockRecipes));

    // Act
    fixture.detectChanges(); // ngOnInit is called here

    // Assert
    expect(component.recipes).toEqual(mockRecipes);
  });

  // Add more tests as needed

});