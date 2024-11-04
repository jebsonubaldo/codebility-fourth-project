'use client';
import Image from "next/image";

const timeline = [
    {
        name: 'Founded company',
        description:
            'Our journey began with a vision to revolutionize eCommerce, establishing Urban Shop as a brand that prioritizes style and quality.',
        date: 'April 2024',
        dateTime: '2024-04',
    },
    {
        name: 'Secured $65m in funding',
        description:
            'We successfully secured $65 million in funding, empowering us to innovate and strategically expand our offerings.',
        date: 'June 2024',
        dateTime: '2024-06',
    },
    {
        name: 'Released beta',
        description:
            'After months of hard work and dedication, we launched our beta version, allowing early users to experience our platform.',
        date: 'August 2024',
        dateTime: '2024-08',
    },
    {
        name: 'Global launch of product',
        description:
            'We proudly announced the global launch of our product, making stylish and quality items accessible to customers around the world.',
        date: 'Nov 2024',
        dateTime: '2024-11',
    },
];

const jobOpenings = [
    {
        id: 1,
        role: 'Full-time designer',
        href: '#',
        description:
            'We are seeking a Full-Time Designer to create visually stunning and user-friendly designs that elevate our brand and enhance the user experience across all platforms.',
        salary: '$75,000 USD',
        location: 'San Francisco, CA',
    },
    {
        id: 2,
        role: 'Laravel developer',
        href: '#',
        description:
            'Join our team as a Laravel Developer, where you will build and maintain powerful web applications to support our growing eCommerce platform.',
        salary: '$125,000 USD',
        location: 'San Francisco, CA',
    },
    {
        id: 3,
        role: 'React Native developer',
        href: '#',
        description:
            'We are looking for a React Native Developer to design and implement high-quality mobile applications that provide an exceptional user experience for our customers.',
        salary: '$105,000 USD',
        location: 'San Francisco, CA',
    },
];

export default function About() {
    return (
        <div className="bg-white">
            <main className="isolate">
                {/* Hero section */}
                <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20">
                    <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                            <h1 className="max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl g:col-span-2 xl:col-auto">
                                We’re a passionate group of people working from around the world to build the future of ecommerce, delivering stylish and quality products for our customers.
                            </h1>
                            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                                <p className="mt-6 text-base leading-7 text-gray-600">
                                    Our team brings together talent from every corner of the world, driven by a shared passion to redefine eCommerce. We’re committed to creating a marketplace where style meets quality, offering products that truly enhance everyday life. Every item is thoughtfully selected to align with the latest trends, ensuring you have access to essentials that speak to your unique style. Our mission is not only to provide great products but to foster a seamless and enjoyable shopping experience. Join us as we continue to innovate and bring you closer to the future of online shopping
                                </p>
                            </div>
                            <Image
                                src="https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80"
                                alt="about-us"
                                className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
                                width={600}
                                height={600}
                            />
                        </div>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
                </div>

                {/* Timeline section */}
                <div className="mx-auto -mt-8 max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
                        {timeline.map((item) => (
                            <div key={item.name}>
                                <time
                                    dateTime={item.dateTime}
                                    className="flex items-center text-sm font-semibold leading-6 text-indigo-600"
                                >
                                    <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                                        <circle cx={2} cy={2} r={2} fill="currentColor" />
                                    </svg>
                                    {item.date}
                                    <div
                                        className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                                        aria-hidden="true"
                                    />
                                </time>
                                <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{item.name}</p>
                                <p className="mt-1 text-base leading-7 text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Logo cloud */}
                <div className="mx-auto mt-32 max-w-7xl sm:mt-40 sm:px-6 lg:px-8">
                    <div className="relative isolate overflow-hidden bg-[var(--primary-color)] px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
                        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Our customers love us
                        </h2>
                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
                            Our customers love us for our commitment to quality and exceptional service. Their satisfaction drives us to continuously innovate and improve our offerings. We strive to build lasting relationships, ensuring that every experience with us exceeds expectations.
                        </p>
                    </div>
                </div>

                {/* Content section */}
                <div className="mt-32 overflow-hidden sm:mt-40">
                    <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
                            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our people</h2>
                                <p className="mt-6 text-xl leading-8 text-gray-600">
                                    We are a diverse team of innovators and creators dedicated to transforming ecommerce. Each member brings unique talents and perspectives.
                                </p>
                                <p className="mt-6 text-base leading-7 text-gray-600">
                                    Our people are the heart of Urban Shop, driven by a shared passion for excellence and innovation. We believe that diverse backgrounds and experiences strengthen our team, fostering creativity and collaboration.
                                </p>
                            </div>
                            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                                <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                                    <Image
                                        src="https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"
                                        alt="about-1"
                                        className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                                        width={500}
                                        height={600}
                                    />
                                </div>
                                <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                                    <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                                        <Image
                                            src="https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                                            alt="about-2"
                                            className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                                            width={300}
                                            height={300}
                                        />
                                    </div>
                                    <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                                        <Image
                                            src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80"
                                            alt="about-3"
                                            className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                                            width={600}
                                            height={600}
                                        />
                                    </div>
                                    <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                                        <Image
                                            src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                                            alt="about-4"
                                            className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                                            width={300}
                                            height={300}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            We approach the workplace as something that adds to our lives and adds value to world.
                        </h2>
                        <p className="mt-6 text-base leading-7 text-gray-600">
                            We believe that work should enrich our lives while making a positive impact on the world, fostering a culture of growth, collaboration, and purpose.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
                        <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-50 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
                            <p className="flex-none text-3xl font-bold tracking-tight text-gray-900">250k</p>
                            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                                <p className="text-lg font-semibold tracking-tight text-gray-900">Users on the platform</p>
                                <p className="mt-2 text-base leading-7 text-gray-600">
                                    Join a thriving community of over 250k users who trust us for their shopping needs.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-900 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
                            <p className="flex-none text-3xl font-bold tracking-tight text-white">$8.9 billion</p>
                            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                                <p className="text-lg font-semibold tracking-tight text-white">
                                    We’re proud that our customers have made over $8 billion in total revenue.
                                </p>
                                <p className="mt-2 text-base leading-7 text-gray-400">
                                    We celebrate our customers achievements, having collectively generated over $8 billion in total revenue through their support.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-indigo-600 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
                            <p className="flex-none text-3xl font-bold tracking-tight text-white">401,093</p>
                            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                                <p className="text-lg font-semibold tracking-tight text-white">Transactions this year</p>
                                <p className="mt-2 text-base leading-7 text-indigo-200">
                                    We’ve facilitated millions of transactions this year, showcasing our commitment to providing an exceptional shopping experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content section */}
                <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8 pb-24">
                    <div className="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
                        <div className="w-full lg:max-w-lg lg:flex-auto">
                            <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                We are always looking for awesome people to join us
                            </p>
                            <p className="mt-6 text-xl leading-8 text-gray-600">
                                We are on the hunt for talented individuals who share our passion and vision to help us shape the future of eCommerce.
                            </p>
                            <Image
                                src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&h=1104&q=80"
                                alt="career-1"
                                className="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
                                width={400}
                                height={700}
                            />
                        </div>
                        <div className="w-full lg:max-w-xl lg:flex-auto">
                            <h3 className="sr-only">Job openings</h3>
                            <ul className="-my-8 divide-y divide-gray-100">
                                {jobOpenings.map((opening) => (
                                    <li key={opening.id} className="py-8">
                                        <dl className="relative flex flex-wrap gap-x-3">
                                            <dt className="sr-only">Role</dt>
                                            <dd className="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
                                                <a href={opening.href}>
                                                    {opening.role}
                                                    <span className="absolute inset-0" aria-hidden="true" />
                                                </a>
                                            </dd>
                                            <dt className="sr-only">Description</dt>
                                            <dd className="mt-2 w-full flex-none text-base leading-7 text-gray-600">{opening.description}</dd>
                                            <dt className="sr-only">Salary</dt>
                                            <dd className="mt-4 text-base font-semibold leading-7 text-gray-900">{opening.salary}</dd>
                                            <dt className="sr-only">Location</dt>
                                            <dd className="mt-4 flex items-center gap-x-3 text-base leading-7 text-gray-500">
                                                <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 flex-none fill-gray-300" aria-hidden="true">
                                                    <circle cx={1} cy={1} r={1} />
                                                </svg>
                                                {opening.location}
                                            </dd>
                                        </dl>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 flex border-t border-gray-100 pt-8">
                                <a href="#" className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                    View all openings <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
