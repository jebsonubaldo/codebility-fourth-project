import Image from 'next/image';

export default function Partners() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-xl text-center mb-24">
                    <h2 className="text-lg font-semibold leading-8 tracking-tight text-[var(--primary-color)]">Our Partners</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        We have worked with thousands of amazing people
                    </p>
                </div>
                <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    <Image
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="/images/partner-1.png"
                        alt="partner-1"
                        width={158}
                        height={48}
                    />
                    <Image
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="/images/partner-2.png"
                        alt="partner-2"
                        width={158}
                        height={48}
                    />
                    <Image
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="/images/partner-3.png"
                        alt="partner-3"
                        width={158}
                        height={48}
                    />
                    <Image
                        className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                        src="/images/partner-4.png"
                        alt="partner-4"
                        width={158}
                        height={48}
                    />
                    <Image
                        className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                        src="/images/partner-5.png"
                        alt="partner-5"
                        width={158}
                        height={48}
                    />
                </div>
                <div className="mt-16 flex justify-center">
                    <p className="relative rounded-full bg-gray-50 px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/5">
                        <span className="hidden md:inline">Over 2500 companies use our tools to better their business.</span>
                        <a href="#" className="font-semibold text-[var(--primary-color)]">
                            <span className="absolute inset-0" aria-hidden="true" /> Read our customer stories{' '}
                            <span aria-hidden="true">&rarr;</span>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}