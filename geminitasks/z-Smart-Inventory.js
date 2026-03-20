// The Task: "I Win Enterprises" Smart Inventory 🛒
// Maano tumhare paas niche diya gaya laptops ka data hai. Tumhe ek naya array banana hai jiska naam hoga finalInventory.

// Conditions:

// Filter: Sirf wo laptops rakho jinka price 30,000 se zyada hai.

// Update (Spread): Un sabhi laptops mein ek naya field add karo: shopName: "I Win Enterprises".

// Delete (Destructuring): Security ke liye, is naye array se costPrice wala field hata do (customer ko nahi dikhana hai).

// JavaScript
// const rawLaptops = [
//   { brand: "HP", model: "A1", costPrice: 35000, sellingPrice: 45000 },
//   { brand: "Dell", model: "B2", costPrice: 20000, sellingPrice: 28000 },
//   { brand: "Acer", model: "C3", costPrice: 45000, sellingPrice: 55000 },
//   { brand: "Asus", model: "D4", costPrice: 50000, sellingPrice: 62000 },
// ];

// // Tera code yahan aayega...
// const finalInventory = rawLaptops
//   .filter(item => item.sellingPrice > 30000)
//   .map(item => {
//     // 1. costPrice ko remove karo (Destructuring)
//     // 2. shopName add karo aur baaki details copy karo (Spread)
//     // Hint: const { costPrice, ...rest } = item;
//     // return { ...rest, shopName: "..." };
//   });

// console.log(finalInventory);
// Is approach ko "Method Chaining" kehte hain, jahan hum ek ke baad ek functions lagate hain. Ye React mein bohot common hai.


// Solution tryedd by me :-

const rawLaptops = [
  { brand: "HP", model: "A1", costPrice: 35000, sellingPrice: 45000 },
  { brand: "Dell", model: "B2", costPrice: 20000, sellingPrice: 28000 },
  { brand: "Acer", model: "C3", costPrice: 45000, sellingPrice: 55000 },
  { brand: "Asus", model: "D4", costPrice: 50000, sellingPrice: 62000 },
];

const finalInventory = rawLaptops
  .filter(item => item.sellingPrice > 30000)
  .map(item => {
    const{ costPrice, ...updated}=item
    const newItem=  {...updated, shopName : " Computer House "}

    return newItem

  });

console.log(finalInventory);