'use client';
import Image from 'next/image';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { useEffect, useState } from 'react';
import { CartItem } from '../components/CartContext';
import { useCart } from '../components/CartContext';
import { useRouter } from 'next/navigation';
import { useAuth } from '../components/Authentication';
import Loading from '../components/Loading';

export default function CartPage() {
    const { cartItems, removeFromCart, addToCart } = useCart();
    const { isLoggedIn } = useAuth();
    const [loading, setLoading] = useState<boolean>(true);

    const router = useRouter();

    useEffect(() => {
        if (!isLoggedIn) {
            router.push('/login');
        } else {
            setTimeout(() => setLoading(false), 1000);
        }
    }, [isLoggedIn, router]);

    const updateQuantity = (id: number, amount: number) => {
        const item = cartItems.find((item: { id: number }) => item.id === id);

        if (item) {
            const newQuantity = item.quantity + amount;

            if (newQuantity > 0) {
                addToCart({ ...item, quantity: amount });
            } else if (newQuantity === 0) {
                setOpenDialog(true);
                setItemToRemove(item);
            }
        }
    };

    const totalAmount = cartItems.reduce(
        (total: number, item: CartItem) => total + item.price * item.quantity,
        0
    );

    const handleCheckout = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault(); // Prevent default form behavior if inside a form
        if (isLoggedIn) {
            router.push('/checkout');
        } else {
            router.push('/login'); // Redirect to login if not logged in
        }
    };


    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>
                {loading ? (
                    <Loading />
                ) : cartItems.length === 0 ? (
                    <p className="mt-6 text-base leading-7 text-gray-600">Cart is empty.</p>
                ) : (
                    <>
                        <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
                            {/* Cart Items */}
                            <section aria-labelledby="cart-heading" className="lg:col-span-7">
                                <h2 id="cart-heading" className="sr-only">Items in your shopping cart</h2>
                                <ul role="list" className="divide-y divide-gray-200 border-b border-t border-gray-200">
                                    {cartItems.map((item: CartItem) => (
                                        <li key={item.id} className="flex py-6 sm:py-10">
                                            <div className="flex-shrink-0">
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="h-24 w-24 rounded-md object-center sm:h-48 sm:w-48"
                                                    width="200"
                                                    height="200"
                                                />
                                            </div>

                                            <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                                                <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                                    <div>
                                                        <h3 className="text-sm font-medium text-gray-700 hover:text-gray-800">{item.title}</h3>
                                                        <p className="mt-1 text-sm font-medium text-gray-900">${item.price}</p>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        {/* Minus button */}
                                                        <button
                                                            type="button"
                                                            onClick={() => updateQuantity(item.id, -1)}
                                                            className="p-2 text-gray-400 hover:text-gray-500"
                                                        >
                                                            <svg
                                                                className="h-5 w-5"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="currentColor"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={2}
                                                                    d="M18 12H6"
                                                                />
                                                            </svg>
                                                        </button>

                                                        {/* Quantity display */}
                                                        <span className="text-base font-medium text-gray-700">
                                                            {item.quantity}
                                                        </span>

                                                        {/* Plus button */}
                                                        <button
                                                            type="button"
                                                            onClick={() => updateQuantity(item.id, 1)}
                                                            className="p-2 text-gray-400 hover:text-gray-500"
                                                        >
                                                            <svg
                                                                className="h-5 w-5"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="currentColor"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={2}
                                                                    d="M12 6v12m6-6H6"
                                                                />
                                                            </svg>
                                                        </button>

                                                        {/* Remove button */}
                                                        <div className="absolute right-0 top-0">
                                                            <button
                                                                type="button"
                                                                onClick={() => removeFromCart(item.id)}
                                                                className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
                                                            >
                                                                <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            {/* Order Summary */}
                            <section
                                aria-labelledby="summary-heading"
                                className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
                            >
                                <h2 id="summary-heading" className="text-lg font-medium text-gray-900">Order summary</h2>
                                <dl className="mt-6 space-y-4">
                                    <div className="flex items-center justify-between">
                                        <dt className="text-sm text-gray-600">Subtotal</dt>
                                        <dd className="text-sm font-medium text-gray-900">${totalAmount.toFixed(2)}</dd>
                                    </div>
                                    <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                                        <dt className="text-sm text-gray-600">Shipping estimate</dt>
                                        <dd className="text-sm font-medium text-gray-900">$5.00</dd>
                                    </div>
                                    <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                                        <dt className="text-base font-medium text-gray-900">Order total</dt>
                                        <dd className="text-base font-medium text-gray-900">${(totalAmount + 5.00).toFixed(2)}</dd>
                                    </div>
                                </dl>
                                <div className="mt-6">
                                    <button
                                        type="submit"
                                        className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                                        onClick={handleCheckout}
                                    >
                                        Checkout
                                    </button>
                                </div>
                            </section>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}
