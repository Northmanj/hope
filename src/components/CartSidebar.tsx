type CartSidebarProps = {
    isOpen: boolean;
    cartItems: any[];
    onClose: () => void;
    onRemove: (id: string) => void;
  };
  
  export default function CartSidebar({
    isOpen,
    cartItems,
    onClose,
    onRemove,
  }: CartSidebarProps) {
    const total = cartItems.reduce((sum, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      return sum + price * item.quantity;
    }, 0);
  
    return (
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-80 bg-white text-black shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <button
            onClick={onClose}
            className="text-2xl font-bold text-red-600 hover:text-red-800"
            aria-label="Close cart"
          >
            &times;
          </button>
        </div>
  
        {/* Cart Items */}
        <div className="p-4 overflow-y-auto h-[calc(100%-160px)] space-y-4">
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 border-b pb-2">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
                <div className="flex-1">
                  <h3 className="font-semibold text-sm">{item.name}</h3>
                  <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
                  <p className="text-sm">{item.price}</p>
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="text-red-600 hover:underline text-sm"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
  
        {/* Footer */}
        <div className="p-4 border-t bg-gray-100">
          
          <button
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded text-sm"
            disabled={cartItems.length === 0}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    );
  }
  