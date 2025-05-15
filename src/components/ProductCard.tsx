type ProductProps = {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  onAddToCart: (product: Omit<ProductProps, "onAddToCart">) => void;
};

export default function ProductCard({
  id,
  name,
  description,
  image,
  category,
  onAddToCart,
}: ProductProps) {
  return (
    <div className="bg-gray-800 p-4 rounded shadow hover:shadow-lg transition">
      <img src={image} alt={name} className="w-full h-40 object-cover mb-4 rounded" />
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-sm text-gray-400 mb-2">{description}</p>
      
      <button
        onClick={() =>
          onAddToCart({ id, name, description, image, category })
        }
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white"
      >
        Add to Cart
      </button>
    </div>
  );
}
