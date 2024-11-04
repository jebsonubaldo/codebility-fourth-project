'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function PromoPopup() {
    const [isOpen, setIsOpen] = useState(true);

    if (!isOpen) return null;

    return (
        <div className="pointer-events-none fixed inset-0 flex items-center justify-center px-6">
            <div className="pointer-events-auto relative mx-auto max-w-lg rounded-xl bg-blue-100 p-6 shadow-lg ring-1 ring-gray-900/10">
                {/* Close button */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-2 right-2 rounded-full bg-gray-200 p-2 text-gray-600 hover:bg-gray-300"
                >
                    ✕
                </button>

                <Image
                    src="/images/logo2.png"
                    alt="Promo"
                    className="w-full rounded-lg mb-4"
                    width={400}
                    height={200}
                />

                <p className="text-lg font-semibold leading-6 text-gray-900 mb-2 text-center">
                    🎉 Big Sale! Up to 50% Off on Selected Items! 🎉
                </p>
                <p className="text-sm leading-6 text-gray-600 text-center">
                    Shop now and grab the best deals before they are gone! Limited time only.
                </p>

                <div className="mt-4 flex items-center justify-center gap-x-5">
                    <button
                        type="button"
                        className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                    >
                        Shop Now
                    </button>
                    <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        className="text-sm font-semibold leading-6 text-gray-900"
                    >
                        Maybe Later
                    </button>
                </div>
            </div>
        </div>
    );
}
