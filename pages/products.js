import { useEffect, useState } from 'react';
import Modal from '../components/modal';
import ProductBox from '../components/productBox';

export default function Products() {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        // Fetch products from the API
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then(setProducts)
            .catch((error) => console.error('Error fetching products:', error));
    }, []);

    // Function to handle clicking on a product row
    const handleRowClick = (product) => {
        setSelectedProduct(product);
    };

    // Function to close the modal
    const handleCloseModal = () => {
        setSelectedProduct(null);
    };

    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col" style={{width:"200px"}}>Title</th>
                        <th scope="col"style={{width:"70px"}}>Price</th>
                        <th scope="col">Image</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id} onClick={() => handleRowClick(product)}>
                            
                            <td style={{width:"200px"}}>{product.title}</td>
                            <td style={{width:"70px"}}>${product.price}</td>
                            <td style={{width:"105px"}}><img src={product.image} alt={product.title} style={{ width: '100px', height: 'auto' }} /></td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
            {selectedProduct && (
                <Modal onClose={handleCloseModal}>
                    <ProductBox product={selectedProduct} />
                </Modal>
            )}
        </div>
    );
}