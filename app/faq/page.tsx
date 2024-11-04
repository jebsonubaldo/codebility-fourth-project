const faqs = [
    {
        id: 1,
        question: "What payment methods do you accept?",
        answer:
            "We accept major credit cards such as Visa, MasterCard, and American Express, as well as PayPal and digital wallets like Google Pay and Apple Pay.",
    },
    {
        id: 2,
        question: "How can I track my order?",
        answer:
            "Once your order is shipped, we’ll send you a confirmation email with a tracking number. You can use this number on our Order Tracking page to check the status of your shipment.",
    },
    {
        id: 3,
        question: "What is your return policy?",
        answer:
            "We offer a 30-day return policy from the date of purchase. Items must be in their original condition with tags attached. Please visit our Returns and Exchanges page for detailed instructions.",
    },
    {
        id: 4,
        question: "How long does shipping take?",
        answer:
            "Standard shipping typically takes 5–7 business days, while expedited options are available for quicker delivery. Shipping times may vary based on your location.",
    },
    {
        id: 5,
        question: "Can I change or cancel my order after it has been placed?",
        answer:
            "You can modify or cancel your order within 24 hours of placing it. Contact our customer service team as soon as possible to make chang",
    },
    {
        id: 6,
        question: "Do you ship internationally?",
        answer:
            "Yes, we offer international shipping to many countries. Shipping costs and delivery times vary based on the destination. For more information, visit our Shipping Information page.",
    },
    {
        id: 7,
        question: "How do I apply a discount or promo code?",
        answer:
            "During checkout, enter your promo code in the designated field, and the discount will be applied to your total before payment.",
    },
    {
        id: 8,
        question: "What should I do if I receive a damaged or incorrect item?",
        answer:
            "If your order arrives damaged or incorrect, please contact us within 7 days of delivery. We will arrange a replacement or issue a refund as quickly as possible.",
    },
    {
        id: 9,
        question: "Do you offer gift wrapping services?",
        answer:
            "Yes, we offer gift wrapping for an additional fee during checkout. You can also add a personalized message to your gift.",
    },
    {
        id: 10,
        question: "How do I create an account?",
        answer:
            "Creating an account is simple. Click on the Sign Up button at the top of our homepage, fill out the required details, and enjoy features like faster checkout and order tracking.",
    },

]

export default function FAQ() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl divide-y divide-gray-900/10 px-6 py-24 sm:py-32 lg:px-8 ">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Frequently asked questions</h2>
                <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
                    {faqs.map((faq) => (
                        <div key={faq.id} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
                            <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">{faq.question}</dt>
                            <dd className="mt-4 lg:col-span-7 lg:mt-0">
                                <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    )
}
