import { Subject } from 'rxjs';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../Shared/ingredient.model';
@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();
    // recipeSelected = new Subject<Recipe>();
   private recipes: Recipe[] = [
        // tslint:disable-next-line: max-line-length
        new Recipe(
            'Test Recipe', 'testing the model', 
            'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/easy-chicken-fajitas.jpg',
            [
                new Ingredient('Roti', 2),
                new Ingredient('Meat', 1)
            ]),
        // tslint:disable-next-line: max-line-length
        new Recipe(
            'Test Recipe', 'testing the model', 
            'https://www.inspiredtaste.net/wp-content/uploads/2018/12/Sauteed-Zucchini-Recipe-1-1200.jpg',
            [
                new Ingredient('potato', 2),
                new Ingredient('capscium', 1)
            ])
      ];

      constructor(private slService: ShoppingListService) {}
      getRecipes() {
          return this.recipes.slice();
      }
      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredient(ingredients);
      }
      getRecipe(index: number) {
          return this.recipes.slice()[index];
      }
      addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }
      updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }
      deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
      }

}
