'use client';
import Image from 'next/image';
import { Link, Button } from '@nextui-org/react';

const HeaderComponent = () => {
  return (
    <>
      <nav className="sticky top-0 z-50 flex items-center justify-between sm:px-16 py-4 bg-white border-b border-solid border-[#dddddd]">
        <div>
          <div className="flex items-center">
            <div className='mr-10'>
              <Image 
                src="/logo.png"
                alt="Logo"
                className="imgAlbum !relative w-auto"
                fill
                priority
              />
            </div>
            <div>
              <div className="hidden md:flex space-x-8">
                <Link
                  href='#'
                  className="text-gray-700 hover:text-gray-900 font-bold text-sm mt-2"
                >
                  How it works
                </Link>
                <Link
                  href='#'
                  className="text-gray-700 hover:text-gray-900 font-bold text-sm mt-2"
                >
                  Pricing
                </Link>
                <Link
                  href='#'
                  className="text-gray-700 hover:text-gray-900 font-bold text-sm mt-2"
                >
                  Whats included
                </Link>
                <Link
                  href='#'
                  className="text-gray-700 hover:text-gray-900 font-bold text-sm mt-2"
                >
                  FAQ
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center space-x-4">
            <Link
              href='#'
              className="text-gray-700 hover:text-gray-900 font-bold text-sm mt-2"
            >
              Log in
            </Link>
            <Button className='rounded-lg h-8 bg-[#0BB90B] text-white border-green-500'>
              Get Started
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderComponent;
