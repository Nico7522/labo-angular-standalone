import { Injectable, Signal, WritableSignal, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: WritableSignal<number[]> = signal([5, 4, 2]);
  cartLength: Signal<number> = computed(() => {
   return this.cart().length;
  });
  constructor() { }

  addToCart(num: number) {
    this.cart.update(prevArray => [... prevArray, num]);
  }
}
