import React, { useState } from 'react';
import { Product } from '../interface/productInterface';

const initialProducts: Product[] = [
  { id: 1, title: 'Carrots', imageUrl: './img-pro-01.jpg', price: 1, quantity: 3 },
  { id: 2, title: 'Tomatoes', imageUrl: './img-pro-02.jpg', price: 0.50, quantity: 3 },
  { id: 3, title: 'Graps', imageUrl: './img-pro-03.jpg', price: 3.50, quantity: 3 },
  { id: 4, title: 'Papaya', imageUrl: './img-pro-04.jpg', price: 7, quantity: 3 },

];

const ProductCart: React.FC = () => {
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
    <div className="flex justify-center">
      <table className="w-3/4">
        <thead className="bg-bestGreen rounded-lg">
          <tr className="text-bestWhite">
            <th className="w-1/2 text-2xl text-left pl-5">Product</th>
            <th className="w-1/6 text-bestBlack">Price</th>
            <th className="w-1/6 text-bestBlack">Quantity</th>
            <th className="w-1/6 text-bestBlack">Total</th>
            <th className="w-1/6 text-bestBlack">Delete</th>
          </tr>
        </thead>
        <tbody className="text-bestWhite">
            {products.map(product => (
            <tr key={product.id} className="mb-2 border-b border-bestWhite" style={{borderBottomWidth: '1px'}}>
                <td className="w-1/2 px-5 flex items-center">
                <img src={product.imageUrl} alt={product.title} className="h-10 w-10 mr-3 rounded" />
                {product.title}
                </td>
                <td className="w-1/6 text-center">{product.price}$</td>
                <td className="w-1/6">
                    <div className="flex justify-center items-center">
                        <input
                        type="number"
                        value={product.quantity}
                        onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                        className="bg-bestBlack w-1/4 border-b-2 border-bestWhite text-center no-arrows"
                        />
                    </div>
                </td>
                <td className="text-center w-1/6">{product.price * product.quantity}$</td>
                <td className="w-1/6">
                <button 
                    onClick={() => handleDelete(product.id)}
                    className=" text-bestGreen hover:bg-bestGreen hover:text-bestBlack px-2 rounded"
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

export default ProductCart;
