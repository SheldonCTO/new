import { useAtom } from "jotai";

import { cartListAtom } from "@/store";


export default function ProductBox( props ) {
    // You can destructure the product object for easier access to its properties
    const { product } = props;
    const [cartList, setCartList] = useAtom(cartListAtom);
  
function addToCart(product){
  setCartList([...cartList, product]);
} 
   if (!product) return null; // If there's no product, don't render anything
   
    
     return (
       <div>
         <img src={product.image} alt={product.title} style={{width: '150px', height: 'auto', display: "block", marginLeft: "auto", marginRight: "auto", marginBottom: "20px"}}/>
         <p><strong>Title:</strong> {product.title}</p>
         <p><strong>Price:</strong> ${product.price}</p>
         <p><strong>Description:</strong> {product.description}</p>
         <p><strong>Category:</strong> {product.category}</p>
         <button onClick={e=>addToCart(product)}>Add to Cart</button>
       </div>
     );
   }