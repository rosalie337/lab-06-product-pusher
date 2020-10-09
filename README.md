# Lab 08: Data Persistence

## Goal

Today we are going to save our data and share it between our product page and our shopping cart page.

We won't be adding much new presentation, this will largely be "under the hood" JavaScript work.

---

## Learning Objectives
- Use localStorage to share data 1) persistently and 2) between different pages
- Use `JSON.parse` and `JSON.stringify` to manage localStorage data
- Use localStorage instead of hard-coded JSON to store your cart data
- Manage the complexity of initializing data in the cart if it doesn't yet exist in localStorage
- Manage the complexity of initizaling a cart item in the array if it doesn't exist in the array
- Manage the complexity of adding a _second instance of the same product_ to the cart array
- Dynamically create event listeners on the product page that add items to local storage

--

## New Branch

[x] Make sure to work on a new branch!

## Goal

The goal is to have the "Add" button on each product add an instance of that product to the shopping cart. The shopping cart will be saved and retrieved from local storage.

### Step 1: Add Product to Shopping Cart

In the code the renders a product, add an event listener to the "Add" button.

This event handler will need to handle the following tasks:

1. Retrieve the existing shopping cart from localStorage
    1. If there is no cart in data in localStorage, use an empty array: `[]`
    1. If there is cart data in localStorage, turn into array using `JSON.parse`
1. Check if the shopping cart already has the line item for this product. You can reuse your `findById` function for this tasks.
    1. If it does exist, increment the quantity.
    1. If it does not exist create a new line item with the following format:
        ```js
        const lineItem = {
            id: <product-id>,
            quantity: 1
        };
        ```
1. Save the modified cart array back to localStorage, remembering to serialize with `JSON.stringify` before saving

### Step 2: Get Shopping Cart from localStorage on Shopping Cart Page

Instead importing a hard-coded cart data, retrieve the shopping cart from localStorage (don't forget to `JSON.parse`!) and use it in rendering the table.

### Step 3: Place Order 

1. If there are no line items in the cart, disable the "Place Order" button.
1. Add an event handler to the "Place Order" button that:
    1. Displays an `alert` with the contents of the cart (hint: `JSON.stringify(cart, true, 2)` will give you nicely formatted `JSON`)
    1. Remove the cart from localStorage (`.removeItem`)
    1. Redirect the user back to the home page

### STRETCH: Add Quantity of Products

Add a quantity drop-down to the rendered product. When the "Add" button is clicked, add the indicated amount of product to the quantity.

### STRETCH: Move Data Work to Function

Create a module called `cart-api.js`. Export a function for each of the specific data tasks below. You already have the correct code, remove it into these functions and change existing code to import and use these new functions instead:

1. `getCart`
1. `addToCart`
1. `clearCart`

---

## Points Break Down

Looking For | Points (10)
:--|--:
[x] Hosted on GitHub with URL in About section | 1
[ ] Add product to cart (addEventListener in render product) | 4
[ ] Load cart on shopping cart page | 3
[ ] Place order with alert, remove cart, and redirect | 2
[ ] Add Quantity to product page | +1
[ ] TDD `getCart`, `clearCart`, and `setCart` functions for `cart-api.js` | +1