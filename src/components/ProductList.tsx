import { useState, useEffect } from 'react';
import { products as allProducts } from '../data/products';
import ProductCard from './ProductCard';

type ProductListProps = {
  searchQuery: string;
  onAddToCart: (product: any) => void;
};

export default function ProductList({ searchQuery, onAddToCart }: ProductListProps) {
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  useEffect(() => {
    const query = searchQuery.toLowerCase();
    const filtered = allProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  }, [searchQuery]);

  return (
    <section id="products" className="p-8">
      <h2 className="text-2xl font-bold mb-4">Our Products</h2>
      {filteredProducts.length === 0 ? (
        <p className="text-gray-400">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} onAddToCart={onAddToCart} />
          ))}
        </div>
      )}
    </section>
  );
}
