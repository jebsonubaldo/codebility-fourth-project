import Image from 'next/image';

const testimonials = [
    {
        body: 'I absolutely love the quality of the products! They exceeded my expectations and arrived faster than I anticipated. I&apos;ll definitely be a repeat customer!',
        author: {
            name: 'Maria Santos',
            handle: 'mariasantos',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        body: 'The shopping experience was seamless. The website is user-friendly, and I found exactly what I was looking for. Highly recommend!',
        author: {
            name: 'Juan Reyes',
            handle: 'juanreyes',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        body: 'The products are amazing and reasonably priced! I appreciate the attention to detail in packaging. It felt like a gift when it arrived.',
        author: {
            name: 'Carlos Mendoza',
            handle: 'carlosmendoza',
            imageUrl:
                'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        body: 'I was impressed by the variety of options available. The customer service was top-notch when I had questions about my order. I&apos;m thrilled with my purchase!',
        author: {
            name: 'Lisa Cruz',
            handle: 'lisacruz',
            imageUrl:
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        body: 'I love supporting local businesses, and this shop delivers quality every time. Fast shipping and great customer support make it my go-to place!',
        author: {
            name: 'Angela Garcia',
            handle: 'angelagarcia',
            imageUrl:
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        body: 'This is my favorite online store! The checkout process is quick, and my items always arrive in perfect condition. Highly recommend it to friends!',
        author: {
            name: 'Mark Lim',
            handle: 'marklim',
            imageUrl:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
];

export default function Testimonials() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-lg font-semibold leading-8 tracking-tight text-[var(--primary-color)]">Testimonials</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Discover the stories behind our satisfied customers&apos; experiences!
                    </p>
                </div>
                <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
                    <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.author.handle} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                                <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                                    <blockquote className="text-gray-800">
                                        <p>{`“${testimonial.body}”`}</p>
                                    </blockquote>
                                    <figcaption className="mt-6 flex items-center gap-x-4">
                                        <Image className="h-10 w-10 rounded-full bg-gray-50" src={testimonial.author.imageUrl} alt={testimonial.author.handle} width="100" height="100" />
                                        <div>
                                            <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                                            <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}