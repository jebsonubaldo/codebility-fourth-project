'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useState, useEffect, useRef } from 'react';
import { Dialog, Popover, Transition } from '@headlessui/react';
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon, UserIcon } from '@heroicons/react/24/outline';
import { useAuth } from './Authentication';
import { useCart } from './CartContext';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const { isLoggedIn, logout } = useAuth();
  const { cartItems } = useCart();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <Link href="/" className="-m-2 block p-2 font-medium text-gray-900">
                      Home
                    </Link>
                  </div>
                  <div className="flow-root">
                    <Link href="/products" className="-m-2 block p-2 font-medium text-gray-900">
                      Best Sellers
                    </Link>
                  </div>
                  <div className="flow-root">
                    <Link href="/about" className="-m-2 block p-2 font-medium text-gray-900">
                      About Us
                    </Link>
                  </div>
                  <div className="flow-root">
                    <Link href="/help" className="-m-2 block p-2 font-medium text-gray-900">
                      Help
                    </Link>
                  </div>
                  <div className="flow-root">
                    <Link href="/help" className="-m-2 block p-2 font-medium text-gray-900">
                      FAQ
                    </Link>
                  </div>
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <Link href="#" className="-m-2 block p-2 font-medium text-gray-900">
                      Sign in
                    </Link>
                  </div>
                  <div className="flow-root">
                    <Link href="#" className="-m-2 block p-2 font-medium text-gray-900">
                      Create account
                    </Link>
                  </div>
                </div>

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative overflow-hidden">
        <p className="flex h-10 items-center justify-center bg-[var(--primary-color)] px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Get free delivery on orders over $100
        </p>
        {/* Top navigation */}
        <nav aria-label="Top" className="relative z-20 bg-white bg-opacity-90 backdrop-blur-xl backdrop-filter">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  <span className="sr-only">Urban Shop</span>
                  <Image
                    className="h-8 w-auto"
                    src="/images/logo2.png"
                    alt="urban-shop"
                    width={100}
                    height={32}
                  />
                </Link>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-10 mt-1">
                  <Link
                    href="/"
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Home
                  </Link>
                  <Link
                    href="/products"
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Best Sellers
                  </Link>
                  <Link
                    href="/about"
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/contact"
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/faq"
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    FAQ
                  </Link>
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                {!isLoggedIn ? (
                  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                    <Link href="/login" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                      Sign in
                    </Link>
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                    <Link href="/register" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                      Create account
                    </Link>
                  </div>
                ) : (
                  <button className="hidden lg:flex lg:items-center lg:justify-end p-2 text-gray-400 hover:text-gray-500" onClick={handleLogout}>
                    <UserIcon className="h-6 w-6" />
                    <span className="ml-2 text-sm font-medium text-gray-700">John Doe | Sign Out</span>
                  </button>
                )}

                {/* <div>
                  <Image
                    className="inline-block h-7 w-7 rounded-full"
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="john-doe"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">John Doe</p>
                </div> */}


                {/* Notification */}
                {/* <div className="flex lg:ml-6">
                  <Link href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Notification</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </Link>
                </div> */}

                {/* Search */}
                <div className="flex lg:ml-6">
                  <Link href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                  </Link>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link href="/cart" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{cartItems.length}</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
