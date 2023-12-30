export interface AddRecipeRequest {
  title?: string | undefined;
  description?: string | undefined;
  category?: string | undefined;
  ingredients?: unknown[] | undefined;
  instructions?: string | undefined;
}
