import Image from "next/image";

export default function Hero() {
    return (
        <header className="relative overflow-hidden bg-white">
            <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
                <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    <div className="sm:max-w-lg">
                        <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Elevate Your Style, Empower Your Life
                        </h1>
                        <p className="mt-4 text-xl text-gray-500">
                            Shop the latest trends in electronics, jewelry, and fashion for
                            men and women. Enjoy seamless online shopping and fast delivery!
                        </p>
                    </div>
                    <div>
                        <div className="mt-10">
                            {/* Decorative image grid */}
                            <div
                                aria-hidden="true"
                                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                            >
                                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                    <div className="flex items-center space-x-6 lg:space-x-8">
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                                <Image
                                                    src="/images/product-1.png"
                                                    alt="product-1"
                                                    className="h-full w-full object-cover object-center"
                                                    width={500}
                                                    height={1000}
                                                    style={{ width: '100%', height: '100%' }}
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <Image
                                                    src="/images/product-2.png"
                                                    alt="product-2"
                                                    className="h-full w-full object-cover object-center"
                                                    width={500}
                                                    height={1000}
                                                    style={{ width: '100%', height: '100%' }}
                                                />
                                            </div>
                                        </div>
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <Image
                                                    src="/images/product-3.png"
                                                    alt="product-3"
                                                    className="h-full w-full object-cover object-center"
                                                    width={500}
                                                    height={1000}
                                                    style={{ width: '100%', height: '100%' }}
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <Image
                                                    src="/images/product-4.png"
                                                    alt="product-4"
                                                    className="h-full w-full object-cover object-center"
                                                    width={500}
                                                    height={1000}
                                                    style={{ width: '100%', height: '100%' }}
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <Image
                                                    src="/images/product-5.png"
                                                    alt="product-5"
                                                    className="h-full w-full object-cover object-center"
                                                    width={500}
                                                    height={1000}
                                                    style={{ width: '100%', height: '100%' }}
                                                />
                                            </div>
                                        </div>
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <Image
                                                    src="/images/product-6.png"
                                                    alt="product-6"
                                                    className="h-full w-full object-cover object-center"
                                                    width={500}
                                                    height={1000}
                                                    style={{ width: '100%', height: '100%' }}
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <Image
                                                    src="/images/product-7.png"
                                                    alt="product-7"
                                                    className="h-full w-full object-cover object-center"
                                                    width={500}
                                                    height={1000}
                                                    style={{ width: '100%', height: '100%' }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="#"
                                className="inline-block rounded-md border border-transparent bg-[var(--primary-color)] px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                            >
                                Shop Collection
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}