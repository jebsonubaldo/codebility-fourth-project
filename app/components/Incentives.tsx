import Image from "next/image";

const perks = [
    {
        name: 'Free delivery',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce/icons/icon-delivery-light.svg',
        imageAlt: 'free-delivery',
        description:
            "Enjoy free delivery on all qualifying orders, bringing your favorite items right to your door without extra costs. We believe shopping should be convenient and accessible for everyone.",
    },
    {
        name: 'Warranty',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce/icons/icon-warranty-light.svg',
        imageAlt: 'warranty',
        description:
            "We stand behind the quality of our products, offering a reliable warranty to ensure your satisfaction. Shop with confidence, knowing we’re here to support you.",
    },
    {
        name: 'Exchanges',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce/icons/icon-returns-light.svg',
        imageAlt: 'exchanges',
        description:
            'Easily exchange items if they do not meet your expectations, making sure you always get exactly what you need. Our hassle-free exchange process keeps your satisfaction front and center.',
    },
    {
        name: 'For the planet',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce/icons/icon-planet-light.svg',
        imageAlt: 'for-the-planet',
        description:
            "We are committed to sustainable practices that reduce waste and protect our planet. Every order supports initiatives that make a positive impact on the environment.",
    },
]

export default function Incentives() {
    return (
        <div className="bg-white">
            <h2 className="sr-only">Our perks</h2>
            <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-24 lg:px-4">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-lg font-semibold leading-8 tracking-tight text-[var(--primary-color)]">Incentives</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Get More with Urban Shop Incentives
                    </p>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                        Experience added benefits with every purchase, from free delivery to planet-friendly practices that make shopping rewarding and responsible.
                    </p>
                </div>
                <div className="mx-auto grid max-w-2xl mt-20 grid-cols-1 gap-x-8 gap-y-12 px-4 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                    {perks.map((perk) => (
                        <div key={perk.name} className="sm:flex">
                            <div className="sm:flex-shrink-0">
                                <div className="flow-root">
                                    <Image className="h-24 w-28" src={perk.imageSrc} alt={perk.imageAlt} width={50} height={50} />
                                </div>
                            </div>
                            <div className="mt-3 sm:ml-3 sm:mt-0">
                                <h3 className="text-base font-semibold leading-7 text-gray-900">{perk.name}</h3>
                                <p className="mt-2 text-md text-gray-500">{perk.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
