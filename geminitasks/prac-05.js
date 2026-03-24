 import { useState } from "react";

const [laptops, setLaptops] = useState([
  { id: 1, brand: "HP", price: 55000 },
  { id: 2, brand: "Dell", price: 62000 },
  { id: 3, brand: "Lenovo", price: 75000 },
]);

const deleteLaptop = (id) => {
  // CHALLENGE: 
  // 1. Ek variable banao 'filteredLaptops'
  // 2. .filter() use karke sirf wo items rakho jinki id match NAHI karti
  // 3. setLaptops ka use karke state update karo
  
  // LIKHO APNA CODE YAHAN...
     
  const filteredLaptops = laptops.filter(laptop =>laptop.id === id ? false:true)
  setLaptops(filteredLaptops)
}

deleteLaptop(2);

console.log(laptops);
