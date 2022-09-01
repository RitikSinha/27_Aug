/**
 25. In the following shopping cart add, remove, edit items
    => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    - add 'Meat' in the beginning of your shopping cart if it has not been already added
    - add Sugar at the end of you shopping cart if it has not been already added
    - remove 'Honey' if you are allergic to honey
    - modify Tea to 'Green Tea'
 */
let shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift("Meat");
shoppingCart.push("Sugar");
const value = "Honey";
shoppingCart = shoppingCart.filter((item) => item !== value);
for (let i = 0; i < shoppingCart.length; i++) {
  if (shoppingCart[i] === "Tea") {
    shoppingCart[i] = "Green Tea";
  }
}
console.log(shoppingCart);
