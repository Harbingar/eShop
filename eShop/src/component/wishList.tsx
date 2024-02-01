import React, { useState } from 'react';
import { Product } from '../interface/productInterface';

const initialProducts: Product[] = [
  { id: 1, title: 'Carrots', imageUrl: './img-pro-01.jpg', price: 1, quantity: 3, stock: true },
  { id: 2, title: 'Tomatoes', imageUrl: './img-pro-02.jpg', price: 0.50, quantity: 3, stock: true },
  { id: 3, title: 'Grapes', imageUrl: './img-pro-03.jpg', price: 3.50, quantity: 3, stock: false },
  { id: 4, title: 'Papaya', imageUrl: './img-pro-04.jpg', price: 7, quantity: 3, stock: true },
];

const Whishlist: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const handleAddItem = (productId: number) => {
    const product = products.find(product => product.id === productId);
    setProducts(products.filter(product => product.id !== productId));
    if (product) {
      setPopupMessage(`Add ${product.title} to your cart.`);
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 5000);
    }
  };

  const handleDelete = (productId: number) => {
    const product = products.find(product => product.id === productId);
    setProducts(products.filter(product => product.id !== productId));
    if (product) {
      setPopupMessage(`Deleted ${product.title} from the list.`);
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 5000);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <img className="w-1/3 mb-10" src="./wishList.png" alt="WishlistTitle" />
      {showPopup && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-bestGreen text-bestWhite p-4 rounded">
          {popupMessage}
        </div>
      )}
      <table className="w-3/4">
        <thead className="bg-bestGreen rounded-lg">
          <tr className="text-bestWhite">
            <th className="w-1/2 text-2xl text-left pl-5">Product</th>
            <th className="w-1/6 text-bestBlack">Price</th>
            <th className="w-1/6 text-bestBlack">Stock</th>
            <th className="w-1/6 text-bestBlack">Add Item</th>
            <th className="w-1/6 text-bestBlack">Delete</th>
          </tr>
        </thead>
        <tbody className="text-bestWhite">
          {products.map(product => (
            <tr key={product.id} className="border-b border-bestWhite">
              <td className="w-1/2 px-5 flex items-center">
                <img src={product.imageUrl} alt={product.title} className="h-14 w-14 mr-3 rounded" />
                {product.title}
              </td>
              <td className="w-1/6 text-center">{product.price}$</td>
              <td className="w-1/6 text-center">{product.stock ? 'In Stock' : 'Out of Stock'}</td>
              <td className="w-1/6 text-center">
                <button 
                  onClick={() => handleAddItem(product.id)}
                  className="text-bestGreen hover:bg-bestGreen hover:text-bestBlack px-2 rounded"
                >
                  Add Item
                </button>
              </td>
              <td className="w-1/6 text-center">
                <button 
                  onClick={() => handleDelete(product.id)}
                  className="text-bestGreen hover:text-bestWhite hover:bg-red-600 px-2 rounded"
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

export default Whishlist;
