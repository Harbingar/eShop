import React, { useState } from 'react';
import {Product} from '../interface/ProductInterface';

const initialProducts: Product[] = [
    { id: 1, title: 'test', imageUrl: './fb.png', price: 223, quantity: 3, },
];

const productCart: React.FC = () => {
    const [products, setProducts] = useState<Product[]>(initialProducts);
  
    const handleQuantityChange = (id: number, quantity: number) => {
      const newProducts = products.map(product => 
        product.id === id ? { ...product, quantity: quantity } : product
      );
      setProducts(newProducts);
    };
  
    const handleDelete = (id: number) => {
      setProducts(products.filter(product => product.id !== id));
    };
  
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="border-b">
            <tr>
              <th className="text-left p-4">Product</th>
              <th className="text-left p-4">Price</th>
              <th className="text-left p-4">Quantity</th>
              <th className="text-left p-4">Total</th>
              <th className="text-left p-4">Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id} className="border-b">
                <td className="p-4 flex items-center">
                  <img src={product.imageUrl} alt={product.title} className="h-10 w-10 mr-3" />
                  {product.title}
                </td>
                <td className="p-4">{product.price}</td>
                <td className="p-4">
                  <input
                    type="number"
                    value={product.quantity}
                    onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                    className="border rounded p-1"
                  />
                </td>
                <td className="p-4">{product.price * product.quantity}</td>
                <td className="p-4">
                  <button 
                    onClick={() => handleDelete(product.id)}
                    className="bg-red-500 text-white p-2 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
export default productCart;