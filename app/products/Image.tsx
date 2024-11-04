'use client';

import Image from 'next/image';

type Props = {
    product?: Product;  // Make the product prop optional to avoid runtime errors
    fill?: boolean;
};

export default function ProductImage({ product, fill }: Props) {
    if (!product?.image) {
        return <div>No image available</div>;  // Handle the case where image is missing
    }

    return (
        <>
            {fill ? (
                <Image
                    src={product.image}
                    fill
                    alt={product.title || "Product Image"}  // Use fallback if title is missing
                    className="object-cover w-full h-full"
                />
            ) : (
                <Image
                    src={product.image}
                    alt={product.title || "Product Image"}
                    width={400}
                    height={1000}
                    className="object-cover w-full h-full"
                />
            )}
        </>
    );
}
