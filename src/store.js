import { writable } from 'svelte/store';

const CartItemsStore = writable([
  {
    name: 'Cup',
    cost: '$10',
    src: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/Cup-front-black.png?v=1623159405',
    quantity: 2
  },
  {
    name: 'Shirt',
    cost: '$10',
    src: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/short-sleeve-t-shirt-0.png?v=1622902418',
    quantity: 3
  }
]);

export default CartItemsStore;
