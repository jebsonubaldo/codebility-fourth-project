import { StarIcon } from '@heroicons/react/20/solid';
import { notFound } from 'next/navigation';
import CartButton from '@/app/components/CartButton';
import { CurrencyDollarIcon, GlobeAmericasIcon } from '@heroicons/react/24/outline';
import Image from '../Image';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

type Props = {
  params: {
    id: string;
  };
};

type ImageProps = {
  src: string;
  alt: string;
  className?: string;
};

const policies = [
  {
    title: "Shipping",
    description:
      "We offer fast and reliable shipping on all orders, ensuring your items arrive safely and on time. Enjoy free shipping on purchases over a certain amount, making your shopping experience even better!",
  },
  {
    title: "Free & Easy Returns",
    description:
      "We offer a 30-day return policy to ensure your satisfaction—if you're not happy with your purchase, return it for a refund or exchange. Our easy returns process makes it simple to shop with confidence.",
  },
  {
    title: "Guarantee",
    description:
      "Your purchase is backed by our 100% satisfaction guarantee—we stand by the quality of our products. If you encounter any issues, we'll make it right with a replacement or full refund.",
  },
];

const advantages = [
  { name: 'International delivery', icon: GlobeAmericasIcon, description: 'Get your order in 2 years' },
  { name: 'Loyalty rewards', icon: CurrencyDollarIcon, description: "Don't look at other tees" },
]

const reviews = {
  average: 3.9,
  totalCount: 512,
  featured: [
    {
      id: 1,
      title: "Can't say enough good things",
      rating: 5,
      content: `
      <p>I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me!</p>
      <p>The product quality is amazing, it looks and feel even better than I had anticipated. Brilliant stuff! I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times!</p>
    `,
      author: 'Maria Santos',
      date: 'October 24, 2024',
      datetime: '2024-10-24',
    },
    {
      id: 2,
      title: "Amazing customer service",
      rating: 4.2,
      content: `
      <p>I'm so impressed with the quality of the products! The delivery was fast, and everything arrived in perfect condition. Definitely my go-to online store from now on!</p>
      <p>Amazing customer service and great prices! The items were exactly as described, and I even got free shipping. Highly recommended!</p>
    `,
      author: 'John Dela Cruz',
      date: 'October 12, 2024',
      datetime: '2024-10-12',
    },
  ],
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;

  try {
    // Fetch main product by ID
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!response.ok) throw new Error('Product not found');
    const product: Product = await response.json();

    // Fetch related products by category, excluding the main product
    const relatedResponse = await fetch(`https://fakestoreapi.com/products/category/${product.category}`);
    if (!relatedResponse.ok) throw new Error('Related products not found');
    let relatedProducts: Product[] = await relatedResponse.json();

    // Filter out the main product by ID
    relatedProducts = relatedProducts.filter((relatedProduct) => relatedProduct.id !== product.id);

    return (
      <div className="bg-white">
        <div className="py-6">
          <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb navigation */}
            <ol role="list" className="flex items-center space-x-4">
              <li key={1}>
                <div className="flex items-center">
                  <a href="#" className="mr-4 text-sm font-medium text-gray-900">
                    Home
                  </a>
                  <svg viewBox="0 0 6 20" aria-hidden="true" className="h-5 w-auto text-gray-300">
                    <path d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z" fill="currentColor" />
                  </svg>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <a href="#" className="mr-4 text-sm font-medium text-gray-900 first-letter:uppercase">
                    {product.category}
                  </a>
                  <svg viewBox="0 0 6 20" aria-hidden="true" className="h-5 w-auto text-gray-300">
                    <path d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z" fill="currentColor" />
                  </svg>
                </div>
              </li>
              <li className="text-sm">
                <a href="#" aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                  {product.title}
                </a>
              </li>
            </ol>
          </nav>
        </div>
        <div className="mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
          {/* Product */}
          <div className="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
            {/* Product image */}
            <div className="lg:col-span-3 lg:row-end-1">
              <div className="w-full aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
                <Image product={product} />
              </div>
            </div>

            {/* Product details */}
            <div className="mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-4 lg:row-span-3  lg:mt-0 lg:max-w-none">
              <div className="flex flex-col">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    {product.title}
                  </h1>
                  <p className="text-3xl my-2 tracking-tight text-gray-800">${product.price}</p>
                </div>

                {/* Ratings Section below title */}
                <div className="mt-2">

                  <div className="flex items-center">
                    <p className="text-sm text-gray-700">
                      {product?.rating?.rate}
                      <span className="sr-only"> out of 5 stars</span>
                    </p>
                    <div className="ml-1 flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            product?.rating?.rate > rating ? 'text-yellow-400' : 'text-gray-200',
                            'h-5 w-5 flex-shrink-0'
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <div aria-hidden="true" className="ml-4 text-sm text-gray-300">
                      ·
                    </div>
                    <div className="ml-4 flex">
                      <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                        See all {product?.rating?.count} reviews
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-gray-500">{product.description}</p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                <CartButton product={product} />
              </div>

              <div>
                {policies.map((policy, index) => (
                  <div key={index} className="mt-10 border-t border-gray-200 pt-10">
                    <h3 className="text-sm font-medium text-gray-900">{policy.title}</h3>
                    <p className="mt-4 text-sm text-gray-500">{policy.description}</p>
                  </div>
                ))}
              </div>

              {/* Policies */}
              <section aria-labelledby="policies-heading" className="mt-14 border-t border-gray-200 pt-10">
                <h2 id="policies-heading" className="sr-only">
                  Our Policies
                </h2>

                <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {advantages.map((advantage) => (
                    <div key={advantage.name} className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
                      <dt>
                        <advantage.icon className="mx-auto h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                        <span className="mt-4 text-sm font-medium text-gray-900">{advantage.name}</span>
                      </dt>
                      <dd className="mt-1 text-sm text-gray-500">{advantage.description}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            </div>
          </div>
          <div className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
            {/* Reviews */}
            <section aria-labelledby="reviews-heading" className="mt-16 sm:mt-24">
              <h2 id="reviews-heading" className="text-lg font-medium text-gray-900">
                Recent reviews
              </h2>

              <div className="mt-6 space-y-10 divide-y divide-gray-200 border-b border-t border-gray-200 pb-10">
                {reviews.featured.map((review) => (
                  <div key={review.id} className="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8">
                    <div className="lg:col-span-8 lg:col-start-5 xl:col-span-9 xl:col-start-4 xl:grid xl:grid-cols-3 xl:items-start xl:gap-x-8">
                      <div className="flex items-center xl:col-span-1">
                        <div className="flex items-center">
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon
                              key={rating}
                              className={classNames(
                                review.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                                'h-5 w-5 flex-shrink-0'
                              )}
                              aria-hidden="true"
                            />
                          ))}
                        </div>
                        <p className="ml-3 text-sm text-gray-700">
                          {review.rating}
                          <span className="sr-only"> out of 5 stars</span>
                        </p>
                      </div>

                      <div className="mt-4 lg:mt-6 xl:col-span-2 xl:mt-0">
                        <h3 className="text-sm font-medium text-gray-900">{review.title}</h3>

                        <div
                          className="mt-3 space-y-6 text-sm text-gray-500"
                          dangerouslySetInnerHTML={{ __html: review.content }}
                        />
                      </div>
                    </div>

                    <div className="mt-6 flex items-center text-sm lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:flex-col lg:items-start xl:col-span-3">
                      <p className="font-medium text-gray-900">{review.author}</p>
                      <time
                        dateTime={review.datetime}
                        className="ml-4 border-l border-gray-200 pl-4 text-gray-500 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0"
                      >
                        {review.date}
                      </time>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Related products */}
            <section aria-labelledby="related-heading" className="mt-16 sm:mt-24">
              <h2 id="related-heading" className="text-lg font-medium text-gray-900">
                Customers also purchased
              </h2>

              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {relatedProducts.map((relatedProduct) => (
                  <div key={relatedProduct.id} className="group relative">
                    <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.title}
                        className="h-full w-full object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{relatedProduct.title}</p>
                    <p className="mt-1 text-sm font-medium text-gray-900">${relatedProduct.price}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  } catch {
    notFound();
  }
}
