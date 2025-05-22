import React, {
    useState,
    createContext,
    useEffect,
    ReactNode,
} from 'react';

interface CartContextType {
    cart: Record<string, number>;
    addToCart: (id: string, amount: number) => void;
    removeFromCart: (id: string) => void;
}

interface CartProviderProps {
    children: ReactNode;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cart, setCart] = useState<Record<string, number>>(() => {
        try {
            const storedCart = sessionStorage.getItem('cart');
            return storedCart ? JSON.parse(storedCart) : {};
        } catch {
            return {};
        }
    });

    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (id: string, amount: number) => {
        setCart((prevCart) => ({
            ...prevCart,
            [id]: (prevCart[id] || 0) + amount,
        }));
    };

    const removeFromCart = (id: string) => {
        setCart((prevCart) => {
            const updatedCart = { ...prevCart };
            delete updatedCart[id];
            return updatedCart;
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };
export default CartProvider;
