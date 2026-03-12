// 1. Here is our data (an array of objects)
const laptops = [
  { brand: "HP", model: "Pavilion", price: 55000, inStock: true },
  { brand: "Dell", model: "Inspiron", price: 62000, inStock: false },
  { brand: "Lenovo", model: "ThinkPad", price: 75000, inStock: true },
  { brand: "Asus", model: "Vivobook", price: 48000, inStock: true },
];

// CHALLENGE A: Use .filter() to get only the laptops where inStock is true.
const availableLaptops = laptops.filter(laptop => {
  if (laptop.inStock === true) {
    return true ;
  } 
});

// CHALLENGE B: Use .map() on your "availableLaptops" to create an array of strings.
// The string should look like: "HP Pavilion - ₹55000"
const displayList = availableLaptops.map(laptop => {
   return ` " ${laptop.brand} ${ laptop.model} - ${laptop.price} " ` 
});

console.log("Laptops instock");
console.log(displayList);