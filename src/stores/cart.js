import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: JSON.parse(sessionStorage.getItem('cart')) || []
  }),
  actions: {
    addToCart(item) {
      // 通过 id 和 category 来判断是否已存在
      const existingItem = this.cart.find(cartItem => 
        cartItem.id === item.id && cartItem.category === item.category
      );

      if (existingItem) {
        // 如果已存在，增加数量
        existingItem.quantity += 1;
      } else {
        // 如果不存在，将商品添加到购物车
        this.cart.push({ ...item, quantity: 1 });
      }

      // 保存购物车到 sessionStorage
      sessionStorage.setItem('cart', JSON.stringify(this.cart));

      alert(`${item.name} added to cart!`);
    },
    clearCart() {
      this.cart = [];
      sessionStorage.removeItem('cart');
    }
  }
});
