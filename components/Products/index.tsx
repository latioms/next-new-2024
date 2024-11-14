"use client"
import React, { useEffect, useState } from 'react';

const getProducts = async () => {
    const res = await fetch('https://dummyjson.com/products')
    const products = await res.json()
    return products
}

function Index() {
  const [products, setProducts] = useState<{ id: number; title: string; price: number; discountPercentage: number; thumbnail: string; description: string; }[]>([]);
  const [visible, setVisible] = useState(5);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data.products);
    };
    fetchProducts();
  }, []);

  const loadMore = () => {
    setVisible(prev => prev + 5);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.slice(0, visible).map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {visible < products.length && (
        <button
          onClick={loadMore}
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Charger plus
        </button>
      )}
    </div>
  );
}

function ProductCard({ product }: { product: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const priceWithDiscount = product.price - (product.price * product.discountPercentage) / 100;

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
        <p className="text-gray-600 line-through">
          Prix sans réduction: {product.price}€
        </p>
        <p className="text-red-500 font-bold">
          Prix avec réduction: {priceWithDiscount.toFixed(2)}€
        </p>
        <button className="mt-4 w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Payer
        </button>
        <a
            href={`/produit/${product.id}`}
          className="mt-2 w-full px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
           Voir le produit
        </a>
      </div>
    </div>
  );
}

export default Index;