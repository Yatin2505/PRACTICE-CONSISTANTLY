import LikeButton from '../components/LikeButoon';


// Ye ek function hai jo 'props' (data) leta hai
function LaptopCard({ brand, model, sellingPrice, shopName }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '8px' }}>
      <h2>{brand} - {model}</h2>
      <p>Price: ₹{sellingPrice}</p>
      <small>Sold by: {shopName}</small>
      <button onClick={() => alert(`${model} added to cart!`)}>Buy Now</button>
       <LikeButton/>
    </div>
  );
}

export default LaptopCard