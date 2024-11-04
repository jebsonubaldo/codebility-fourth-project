import Image from "next/image";

export default function CTA() {
    return (
        <section aria-labelledby="sale-heading">
            <div className="overflow-hidden pt-32 sm:pt-14">
                <div className="bg-[var(--primary-color)]">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="relative pb-16 pt-48 sm:pb-24">
                            <div>
                                <h2
                                    id="sale-heading"
                                    className="text-4xl font-bold tracking-tight text-white md:text-5xl"
                                >
                                    Final Stock.
                                    <br />
                                    Up to 50% off.
                                </h2>
                                <div className="mt-6 text-base">
                                    <a href="#" className="font-semibold text-white">
                                        Shop the sale
                                        <span aria-hidden="true"> &rarr;</span>
                                    </a>
                                </div>
                            </div>

                            <div className="absolute -top-32 left-1/2 -translate-x-1/2 transform sm:top-6 sm:translate-x-0">
                                <div className="ml-24 flex min-w-max space-x-6 sm:ml-3 lg:space-x-8">
                                    <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                                        <div className="flex-shrink-0">
                                            <Image
                                                className="h-64 w-64 rounded-lg  md:h-72 md:w-72"
                                                src="/images/product-6.png"
                                                alt="product-6"
                                                width={250}
                                                height={300}
                                            />
                                        </div>

                                        <div className="mt-6 flex-shrink-0 sm:mt-0">
                                            <Image
                                                className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                                                src="/images/product-7.png"
                                                alt="product-7"
                                                width={250}
                                                height={300}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                                        <div className="flex-shrink-0">
                                            <Image
                                                className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                                                src="/images/product-5.png"
                                                alt="product-5"
                                                width={250}
                                                height={300}
                                            />
                                        </div>

                                        <div className="mt-6 flex-shrink-0 sm:mt-0">
                                            <Image
                                                className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                                                src="/images/product-4.png"
                                                alt="product-4"
                                                width={250}
                                                height={300}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                                        <div className="flex-shrink-0">
                                            <Image
                                                className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                                                src="/images/product-3.png"
                                                alt="product-3"
                                                width={250}
                                                height={300}
                                            />
                                        </div>

                                        <div className="mt-6 flex-shrink-0 sm:mt-0">
                                            <Image
                                                className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                                                src="/images/product-2.png"
                                                alt="product-2"
                                                width={250}
                                                height={300}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}