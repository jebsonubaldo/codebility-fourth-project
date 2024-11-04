'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Loading from '../components/Loading';

interface Address {
    city: string;
    street: string;
    zipcode: string;
}

interface Name {
    firstname: string;
    lastname: string;
}

interface User {
    name: Name;
    address: Address;
}

const capitalize = (str: string) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export default function Invoice() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/users')
            .then(res => res.json())
            .then(data => {
                setUser(data[0]);
                setLoading(false);
            })
            .catch(err => console.error(err));
    }, []);

    if (loading) {
        return <Loading />;
    }

    if (!user) {
        return <p>No user data available</p>;
    }

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <div className="max-w-xl">
                    <h1 className="text-base font-medium text-indigo-600">Payment successful</h1>
                    <p className="mt-2 text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl">Thanks for ordering</p>
                    <p className="mt-2 text-base text-gray-500">We appreciate your order, we’re currently processing it. So hang tight and we’ll send you confirmation very soon!</p>

                    <dl className="mt-12 text-sm font-medium">
                        <dt className="text-gray-900">Tracking number</dt>
                        <dd className="mt-2 text-indigo-600">51547878755545848512</dd>
                    </dl>
                </div>

                <div className="mt-10 border-t border-gray-200">
                    <div className="sm:ml-40 sm:pl-6">
                        <h3 className="sr-only">Your information</h3>

                        <h4 className="sr-only">Addresses</h4>
                        <dl className="grid grid-cols-2 gap-x-6 py-10 text-sm">
                            <div>
                                <dt className="font-medium text-gray-900">Shipping address</dt>
                                <dd className="mt-2 text-gray-700">
                                    <address className="not-italic">
                                        <span className="block">{capitalize(user.name.firstname)} {capitalize(user.name.lastname)}</span>
                                        <span className="block">{capitalize(user.address.street)}</span>
                                        <span className="block">{capitalize(user.address.city)}, {user.address.zipcode}</span>
                                    </address>

                                </dd>
                            </div>
                            <div>
                                <dt className="font-medium text-gray-900">Billing address</dt>
                                <dd className="mt-2 text-gray-700">
                                    <address className="not-italic">
                                        <span className="block">{capitalize(user.name.firstname)} {capitalize(user.name.lastname)}</span>
                                        <span className="block">{capitalize(user.address.street)}</span>
                                        <span className="block">{capitalize(user.address.city)}, {user.address.zipcode}</span>
                                    </address>
                                </dd>
                            </div>
                        </dl>

                        <h4 className="sr-only">Payment</h4>
                        <dl className="grid grid-cols-2 gap-x-6 border-t border-gray-200 py-10 text-sm">
                            <div>
                                <dt className="font-medium text-gray-900">Payment method</dt>
                                <dd className="mt-2 space-y-2 sm:flex sm:space-x-4 sm:space-y-0">
                                    <div className="flex-none">
                                        <svg aria-hidden="true" width={36} height={24} viewBox="0 0 36 24" className="h-6 w-auto">
                                            <rect width={36} height={24} rx={4} fill="#224DBA" />
                                            <path
                                                d="M10.925 15.673H8.874l-1.538-6c-.073-.276-.228-.52-.456-.635A6.575 6.575 0 005 8.403v-.231h3.304c.456 0 .798.347.855.75l.798 4.328 2.05-5.078h1.994l-3.076 7.5zm4.216 0h-1.937L14.8 8.172h1.937l-1.595 7.5zm4.101-5.422c.057-.404.399-.635.798-.635a3.54 3.54 0 011.88.346l.342-1.615A4.808 4.808 0 0020.496 8c-1.88 0-3.248 1.039-3.248 2.481 0 1.097.969 1.673 1.653 2.02.74.346 1.025.577.968.923 0 .519-.57.75-1.139.75a4.795 4.795 0 01-1.994-.462l-.342 1.616a5.48 5.48 0 002.108.404c2.108.057 3.418-.981 3.418-2.539 0-1.962-2.678-2.077-2.678-2.942zm9.457 5.422L27.16 8.172h-1.652a.858.858 0 00-.798.577l-2.848 6.924h1.994l.398-1.096h2.45l.228 1.096h1.766zm-2.905-5.482l.57 2.827h-1.596l1.026-2.827z"
                                                fill="#fff"
                                            />
                                        </svg>
                                        <p className="sr-only">Visa</p>
                                    </div>
                                    <div className="flex-auto">
                                        <p className="text-gray-900">Ending with 4242</p>
                                        <p className="text-gray-900">Expires 12 / 21</p>
                                    </div>
                                </dd>
                            </div>
                            <div>
                                <dt className="font-medium text-gray-900">Shipping method</dt>
                                <dd className="mt-2 text-gray-700">
                                    <p>SPX Express</p>
                                    <p>Takes up to 3 working days</p>
                                </dd>
                            </div>
                        </dl>
                    </div>
                    <div className="mt-16 border-t border-gray-200 py-6 text-right">
                        <Link href="/" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
