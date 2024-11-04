'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Loading from '../components/Loading';

type Category = {
    name: string
    href: string
    imageSrc: string
}

export default function Categories() {
    const [categories, setCategories] = useState<Category[]>([])
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then((res) => res.json())
            .then((data) => {
                const formattedCategories = data.map((category: string) => ({
                    name: category,
                    href: `/${category}`,
                    imageSrc:
                        category === 'electronics'
                            ? 'https://images.unsplash.com/photo-1609230430613-13cf4862a80f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            : category === 'jewelery'
                                ? 'https://plus.unsplash.com/premium_photo-1681276170683-706111cf496e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                : category === "men's clothing"
                                    ? 'https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    : category === "women's clothing"
                                        ? 'https://images.unsplash.com/photo-1519554318711-aaf73ece6ff9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                        : `https://via.placeholder.com/300x300?text=${category}`,
                }));

                setCategories(formattedCategories);
                setLoading(false);
            })
            .catch((error) => console.error('Error fetching categories:', error))
    }, [])

    return (
        <div className="bg-gray-50">

            <main>
                {/* Category section */}
                <section aria-labelledby="category-heading" className="py-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8">
                    <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
                        <h2 id="category-heading" className="text-2xl font-bold tracking-tight text-gray-900">
                            Shop by Category
                        </h2>
                        <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
                            Browse all categories
                            <span aria-hidden="true"> &rarr;</span>
                        </a>
                    </div>

                    {loading ? (
                        <div className="flex items-center justify-center min-h-[300px]">
                            <Loading />
                        </div>
                    ) : (
                        <div className="mt-4 flow-root">
                            <div className="-my-2">
                                <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
                                    <div className="min-w-screen-xl absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-4 xl:gap-x-8 xl:space-x-0 xl:px-0">
                                        {categories.map((category) => (
                                            <a
                                                key={category.name}
                                                href={category.href}
                                                className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                                            >
                                                <span aria-hidden="true" className="absolute inset-0">
                                                    <Image
                                                        src={category.imageSrc}
                                                        alt={category.name}
                                                        className="h-full w-full object-cover object-center"
                                                        width={500}
                                                        height={500}
                                                    />
                                                </span>
                                                <span
                                                    aria-hidden="true"
                                                    className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                                                />
                                                <span className="relative mt-auto text-center text-xl font-bold text-white">
                                                    {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
                                                </span>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="mt-6 px-4 sm:hidden">
                        <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                            Browse all categories
                            <span aria-hidden="true"> &rarr;</span>
                        </a>
                    </div>
                </section>
            </main>


        </div>
    )
}
