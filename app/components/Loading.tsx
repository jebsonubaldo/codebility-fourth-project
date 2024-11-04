import Image from 'next/image';

export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center h-3/6 my-24">
            <Image
                src="/images/logo1.png"
                alt="UrbanShop"
                className="animate-bounce h-14 w-14 mb-4"
                width="100"
                height="100"
            />
            <p className="animate-bounce text-indigo-600 text-md font-semibold">Loading...</p>
        </div>
    );
}

