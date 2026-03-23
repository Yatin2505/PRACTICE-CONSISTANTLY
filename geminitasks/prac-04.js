

const [laptops, setLaptops] = useState([
  { id: 1, brand: "HP", price: 55000 },
  { id: 2, brand: "Dell", price: 62000 }
]);

const updatePrice = (id) => {
  const updatedList = laptops.map(laptop => {
    if (laptop.id === id) {
      // 1. Purana laptop copy karo aur price badlo
      return { ...laptop, price: 60000 }; 
    }
    return laptop; // Baaki ko waisa hi rehne do
  });
  
  // 2. State update karo
  setLaptops(updatedList);
};