import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RecipeService } from './recipe.service';
import { Recipe } from './recipe';

describe('RecipeService', () => {
  let service: RecipeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RecipeService],
    });

    service = TestBed.inject(RecipeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all recipes', inject(
    [HttpTestingController, RecipeService],
    (httpClient: HttpTestingController, recipeService: RecipeService) => {
      // Arrange
      const mockRecipes: Recipe[] = [
        // Define mock recipes here
      ];

      // Act
      recipeService.getAllRecipes().subscribe((recipes: Recipe[]) => {
        // Assert
        expect(recipes).toEqual(mockRecipes);
      });

      // Assert
      const req = httpMock.expectOne('http://localhost:5200/api/recipes/');
      expect(req.request.method).toBe('GET');
      req.flush(mockRecipes);
    }
  ));

  it('should get a single recipe', inject(
    [HttpTestingController, RecipeService],
    (httpClient: HttpTestingController, recipeService: RecipeService) => {
      // Arrange
      const mockRecipeId = 'some-id';
      const mockRecipe: Recipe = {
        // Define a mock recipe here
      };

      // Act
      recipeService.getSingleRecipe(mockRecipeId).subscribe((recipe: Recipe) => {
        // Assert
        expect(recipe).toEqual(mockRecipe);
      });

      // Assert
      const req = httpMock.expectOne(`http://localhost:5200/api/recipes/${mockRecipeId}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockRecipe);
    }
  ));
});

