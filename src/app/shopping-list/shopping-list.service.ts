import { EventEmitter } from '@angular/core';
import { Ingredient } from '../Shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingrediensChanged = new Subject<Ingredient[]>();
  startEditing = new Subject<number>();
    ingredients: Ingredient[] = [
        new Ingredient('apples', 5),
        new Ingredient('bananas', 10)
      ];

      getIngridents() {
        return this.ingredients.slice();
      }

      getIngrident(index: number) {
          return this.ingredients[index];
      }
      addIngredients(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingrediensChanged.next(this.ingredients.slice());
      }

      addIngredient(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingrediensChanged.next(this.ingredients.slice());
      }

      updateIngrident(index: number, newIngrident: Ingredient) {
          this.ingredients[index] = newIngrident;
          this.ingrediensChanged.next(this.ingredients.slice());
      }
      deleteIngrident(index: number) {
        this.ingredients.splice(index, 1);
        this.ingrediensChanged.next(this.ingredients.slice());
      }
}
