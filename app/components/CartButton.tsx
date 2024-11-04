"use client";
import { useState } from 'react';
import { useAuth } from './Authentication';
import { useCart } from './CartContext';

type Product = {
    id: string;
    title: string;
    price: string;
    image: string;
};

type CartItem = {
    id: string;
    title: string;
    price: number;
    quantity: number;
    image: string;
};

type Props = {
    product: Product;
};

export default function AddToCartButton({ product }: Props) {
    const [quantity, setQuantity] = useState(1);
    const { isLoggedIn } = useAuth();
    const { addToCart } = useCart();
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleAddToCart = () => {
        if (!isLoggedIn) {
            window.location.href = '/login';
            return;
        }

        const item: CartItem = {
            id: product.id,
            title: product.title,
            price: parseFloat(product.price), // Ensuring price is a number
            quantity: quantity,
            image: product.image,
        };

        addToCart(item);
        setShowConfirmation(true);
        setTimeout(() => {
            setShowConfirmation(false);
        }, 3000);
    };

    return (
        <div className="flex flex-col space-y-3 text-base relative">
            {showConfirmation && (
                <div className="absolute top-24 left-1/2 transform -translate-x-1/2 z-50 bg-green-50 p-2 rounded-md shadow-md">
                    <p className="text-sm font-medium text-green-800">Item has been added to your shopping cart</p>
                </div>
            )}
            <div className="flex items-center">
                <label htmlFor="quantity" className="mr-2 mt-2 text-gray-900">
                    Quantity:
                </label>
                <div className="flex space-x-2 mt-2">
                    <button
                        onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                        className="w-10 p-1 border rounded bg-indigo-500 text-white"
                    >
                        -
                    </button>
                    <span className="mt-1 text-xl text-gray-900">{quantity}</span>
                    <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-10 p-1 border rounded text-black"
                    >
                        +
                    </button>
                </div>
            </div>
            <button
                onClick={handleAddToCart}
                className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
                Add to cart
            </button>
        </div>
    );
}
