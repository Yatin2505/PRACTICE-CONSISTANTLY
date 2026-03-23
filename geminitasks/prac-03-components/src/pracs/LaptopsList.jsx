import LaptopCard from '../components/LaptopCard'

const rawLaptops = [
  { id:1, brand: "HP", model: "A1", costPrice: 35000, sellingPrice: 45000 },
  { id:2, brand: "Dell", model: "B2", costPrice: 20000, sellingPrice: 28000 },
  { id:3, brand: "Acer", model: "C3", costPrice: 45000, sellingPrice: 55000 },
  { id:4, brand: "Asus", model: "D4", costPrice: 50000, sellingPrice: 62000 },
];

const finalInventory = rawLaptops
  .filter(item => item.sellingPrice > 30000)
  .map(item => {
    const{ costPrice, ...updated}=item
    const newItem=  {...updated, shopName : " Computer House "}

    return newItem

  });


function LaptopList() {
  return (
    <div>
      <h1>I Win Enterprises - Inventory</h1>
      {finalInventory.map(laptop => (
        <LaptopCard {...laptop} />
      
      ))}
    </div>
  );
}

export default LaptopList