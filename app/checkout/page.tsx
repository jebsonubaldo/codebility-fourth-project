'use client';
import Image from 'next/image';
import { RadioGroup } from '@headlessui/react'
import { CheckCircleIcon} from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react';
import { CartItem } from '../components/CartContext';
import { useCart } from '../components/CartContext';
import { useRouter } from 'next/navigation';
import { useAuth } from '../components/Authentication';

const deliveryMethods = [
    { id: 1, title: 'Standard', turnaround: '4–10 business days', price: '$5.00' },
    { id: 2, title: 'Express', turnaround: '2–5 business days', price: '$16.00' },
]
const paymentMethods = [
    { id: 'credit-card', title: 'Credit card' },
    { id: 'paypal', title: 'PayPal' },
    { id: 'etransfer', title: 'eTransfer' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Checkout() {
    const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(deliveryMethods[0])

    const { cartItems, clearCart } = useCart();
    const { isLoggedIn } = useAuth();


    const router = useRouter();

    useEffect(() => {
        if (!isLoggedIn) {
            router.push('/login');
        } 
    }, [isLoggedIn, router]);


    const totalAmount = cartItems.reduce(
        (total: number, item: CartItem) => total + item.price * item.quantity,
        0
    );

    const confirmOrder = (event: React.MouseEvent<HTMLButtonElement>) => {

        clearCart();
        event.preventDefault(); // Prevent default form behavior if inside a form
        if (isLoggedIn) {
            router.push('/invoice');
        } else {
            router.push('/login'); // Redirect to login if not logged in
        }
    };


    return (
        <div className="bg-gray-50">
            <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Checkout Form</h1>
                <form className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16 mt-12">
                    <div>
                        <div>
                            <h2 className="text-lg font-medium text-gray-900">Contact information</h2>

                            <div className="mt-4">
                                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="email"
                                        id="email-address"
                                        name="email-address"
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 border-t border-gray-200 pt-10">
                            <h2 className="text-lg font-medium text-gray-900">Shipping information</h2>

                            <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                                <div>
                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                        First name
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            id="first-name"
                                            name="first-name"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                        Last name
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            id="last-name"
                                            name="last-name"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                                        Company
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="company"
                                            id="company"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                        Address
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="address"
                                            id="address"
                                            autoComplete="street-address"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="apartment" className="block text-sm font-medium text-gray-700">
                                        Apartment, suite, etc.
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="apartment"
                                            id="apartment"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                        City
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="city"
                                            id="city"
                                            autoComplete="address-level2"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                        Country
                                    </label>
                                    <div className="mt-1">
                                        <select
                                            id="country"
                                            name="country"
                                            autoComplete="country-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400"
                                        >
                                            <option>United States</option>
                                            <option>Canada</option>
                                            <option>Mexico</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                                        State / Province
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="region"
                                            id="region"
                                            autoComplete="address-level1"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                                        Postal code
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="postal-code"
                                            id="postal-code"
                                            autoComplete="postal-code"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                        Phone
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="phone"
                                            id="phone"
                                            autoComplete="tel"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 border-t border-gray-200 pt-10">
                            <RadioGroup value={selectedDeliveryMethod} onChange={setSelectedDeliveryMethod}>
                                <RadioGroup.Label className="text-lg font-medium text-gray-900">Delivery method</RadioGroup.Label>

                                <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                                    {deliveryMethods.map((deliveryMethod) => (
                                        <RadioGroup.Option
                                            key={deliveryMethod.id}
                                            value={deliveryMethod}
                                            className={({ checked, active }) =>
                                                classNames(
                                                    checked ? 'border-transparent' : 'border-gray-300',
                                                    active ? 'ring-2 ring-indigo-500' : '',
                                                    'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none'
                                                )
                                            }
                                        >
                                            {({ checked, active }) => (
                                                <>
                                                    <span className="flex flex-1">
                                                        <span className="flex flex-col">
                                                            <RadioGroup.Label as="span" className="block text-sm font-medium text-gray-900">
                                                                {deliveryMethod.title}
                                                            </RadioGroup.Label>
                                                            <RadioGroup.Description
                                                                as="span"
                                                                className="mt-1 flex items-center text-sm text-gray-500"
                                                            >
                                                                {deliveryMethod.turnaround}
                                                            </RadioGroup.Description>
                                                            <RadioGroup.Description as="span" className="mt-6 text-sm font-medium text-gray-900">
                                                                {deliveryMethod.price}
                                                            </RadioGroup.Description>
                                                        </span>
                                                    </span>
                                                    {checked ? <CheckCircleIcon className="h-5 w-5 text-indigo-600" aria-hidden="true" /> : null}
                                                    <span
                                                        className={classNames(
                                                            active ? 'border' : 'border-2',
                                                            checked ? 'border-indigo-500' : 'border-transparent',
                                                            'pointer-events-none absolute -inset-px rounded-lg'
                                                        )}
                                                        aria-hidden="true"
                                                    />
                                                </>
                                            )}
                                        </RadioGroup.Option>
                                    ))}
                                </div>
                            </RadioGroup>
                        </div>

                        {/* Payment */}
                        <div className="mt-10 border-t border-gray-200 pt-10">
                            <h2 className="text-lg font-medium text-gray-900">Payment</h2>

                            <fieldset className="mt-4">
                                <legend className="sr-only">Payment type</legend>
                                <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                                    {paymentMethods.map((paymentMethod, paymentMethodIdx) => (
                                        <div key={paymentMethod.id} className="flex items-center">
                                            {paymentMethodIdx === 0 ? (
                                                <input
                                                    id={paymentMethod.id}
                                                    name="payment-type"
                                                    type="radio"
                                                    defaultChecked
                                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                />
                                            ) : (
                                                <input
                                                    id={paymentMethod.id}
                                                    name="payment-type"
                                                    type="radio"
                                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                />
                                            )}

                                            <label htmlFor={paymentMethod.id} className="ml-3 block text-sm font-medium text-gray-700">
                                                {paymentMethod.title}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </fieldset>

                            <div className="mt-6 grid grid-cols-4 gap-x-4 gap-y-6">
                                <div className="col-span-4">
                                    <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">
                                        Card number
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            id="card-number"
                                            name="card-number"
                                            autoComplete="cc-number"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-4">
                                    <label htmlFor="name-on-card" className="block text-sm font-medium text-gray-700">
                                        Name on card
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            id="name-on-card"
                                            name="name-on-card"
                                            autoComplete="cc-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-3">
                                    <label htmlFor="expiration-date" className="block text-sm font-medium text-gray-700">
                                        Expiration date (MM/YY)
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="expiration-date"
                                            id="expiration-date"
                                            autoComplete="cc-exp"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
                                        CVC
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="cvc"
                                            id="cvc"
                                            autoComplete="csc"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Order summary */}
                    <div className="mt-10 lg:mt-0">
                        <h2 className="text-lg font-medium text-gray-900">Order summary</h2>

                        <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm">
                            <h3 className="sr-only">Items in your cart</h3>
                            <ul role="list" className="divide-y divide-gray-200">
                                {cartItems.map((item: CartItem) => (
                                    <li key={item.id} className="flex px-4 py-6 sm:px-6">
                                        <div className="flex-shrink-0">
                                            <Image src={item.image} alt={item.title} className="w-20 rounded-md" width="200" height="200" />
                                        </div>

                                        <div className="ml-6 flex flex-1 flex-col">
                                            <div className="flex">
                                                <div className="min-w-0 flex-1">
                                                    <h4 className="text-sm">
                                                        <a href={item.title} className="font-medium text-gray-700 hover:text-gray-800">
                                                            {item.title}
                                                        </a>
                                                    </h4>

                                                </div>


                                            </div>

                                            <div className="flex flex-1 items-end justify-between pt-2">
                                                <p className="mt-1 text-sm font-medium text-gray-900">${item.price}</p>

                                                <div className="ml-4">
                                                    <label htmlFor="quantity" className="sr-only">
                                                        Quantity
                                                    </label>

                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <dl className="space-y-6 border-t border-gray-200 px-4 py-6 sm:px-6">
                                <div className="flex items-center justify-between">
                                    <dt className="text-sm text-gray-600">Subtotal</dt>
                                    <dd className="text-sm font-medium text-gray-900">${totalAmount.toFixed(2)}</dd>
                                </div>
                                <div className="flex items-center justify-between">
                                    <dt className="text-sm text-gray-600">Shipping</dt>
                                    <dd className="text-sm font-medium text-gray-900">$5.00</dd>
                                </div>
                                <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                                    <dt className="text-base font-medium text-gray-600">Total</dt>
                                    <dd className="text-base font-medium text-gray-900">${(totalAmount + 5.00).toFixed(2)}</dd>
                                </div>
                            </dl>

                            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                <button
                                    type="submit"
                                    className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                                    onClick={confirmOrder}
                                >
                                    Confirm order
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
