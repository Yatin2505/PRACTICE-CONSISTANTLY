const laptops = [
  { brand: "HP", price: 55000 },
  { brand: "Dell", price: 62000 },
  { brand: "Lenovo", price: 75000 },
  { brand: "Asus", price: 48000 },
];

const categorizedLaptops = laptops.map(laptop => {
  if (laptop.price > 50000) {
    // Purana data + naya category key
    return { ...laptop, category: "Premium" };
  } else {
    // Purana data + budget category
    return { ...laptop, category: "Budget" };
  }
});

console.log(categorizedLaptops);
console.log(laptops);
