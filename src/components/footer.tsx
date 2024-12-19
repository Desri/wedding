'use client';
import Image from 'next/image';
import { Link } from '@nextui-org/react';

const FooterComponent = () => {
  return (
    <>
      <div className="mx-auto pt-7 bg-[#f8fafd]">
        <div className="text-black px-12 border-b-2 border-solid border-[#dddddd]">
          <div className="grid grid-cols-5 gap-5 mt-8 mb-5">
            <div className='mr-6'>
              <div className='mb-9'>
                <Image 
                  src="/logo.png"
                  alt="Logo"
                  className="imgAlbum !relative w-auto"
                  fill
                  priority
                />
                <p className='text-[#8c8c8c] text-xs sm:ml-4'>
                  Snap, Scan, Share Instanly
                </p>
              </div>
            </div>
            <div className='mr-5 pl-6'>
              <h3 className='text-lg font-bold mb-2'>
                General
              </h3>
              <div className='mb-9'>
                <ul>
                  <li className='flex items-center text-sm mb-1.5'>
                    <Link
                      href='#'
                      className="text-gray-700 hover:text-gray-900 text-sm"
                    >
                      Home
                    </Link>
                  </li>
                  <li className='flex items-center text-sm mb-1.5'>
                    <Link
                      href='#'
                      className="text-gray-700 hover:text-gray-900 text-sm"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li className='flex items-center text-sm mb-1.5'>
                    <Link
                      href='#'
                      className="text-gray-700 hover:text-gray-900 text-sm"
                    >
                      For Business
                    </Link>
                  </li>
                  <li className='flex items-center text-sm mb-1.5'>
                    <Link
                      href='#'
                      className="text-gray-700 hover:text-gray-900 text-sm"
                    >
                      Register
                    </Link>
                  </li>
                  <li className='flex items-center text-sm mb-1.5'>
                    <Link
                      href='#'
                      className="text-gray-700 hover:text-gray-900 text-sm"
                    >
                      Celebrations
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='mr-5 pl-6'>
              <h3 className='text-lg font-bold mb-2'>
                Use Cases
              </h3>
              <div className='mb-9'>
                <ul>
                  <li className='flex items-center text-sm mb-1.5'>
                    <Link
                      href='#'
                      className="text-gray-700 hover:text-gray-900 text-sm"
                    >
                      Weddings
                    </Link>
                  </li>
                  <li className='flex items-center text-sm mb-1.5'>
                    <Link
                      href='#'
                      className="text-gray-700 hover:text-gray-900 text-sm"
                    >
                      Birthdays
                    </Link>
                  </li>
                  <li className='flex items-center text-sm mb-1.5'>
                    <Link
                      href='#'
                      className="text-gray-700 hover:text-gray-900 text-sm"
                    >
                      Conferences
                    </Link>
                  </li>
                  <li className='flex items-center text-sm mb-1.5'>
                    <Link
                      href='#'
                      className="text-gray-700 hover:text-gray-900 text-sm"
                    >
                      Corporate
                    </Link>
                  </li>
                  <li className='flex items-center text-sm mb-1.5'>
                    <Link
                      href='#'
                      className="text-gray-700 hover:text-gray-900 text-sm"
                    >
                      Celebrations
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='mr-5 pl-6'>
              <h3 className='text-lg font-bold mb-2'>
                Resources
              </h3>
              <div className='mb-9'>
                <ul>
                  <li className='flex items-center text-sm mb-1.5'>
                    <Link
                      href='#'
                      className="text-gray-700 hover:text-gray-900 text-sm"
                    >
                      QR Code
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='pl-6'>
              <h3 className='text-lg font-bold mb-2'>
                Company
              </h3>
              <div className='mb-9'>
                <ul>
                  <li className='flex items-center text-sm mb-1.5'>
                    <Link
                      href='#'
                      className="text-gray-700 hover:text-gray-900 text-sm"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li className='flex items-center text-sm mb-1.5'>
                    <Link
                      href='#'
                      className="text-gray-700 hover:text-gray-900 text-sm"
                    >
                      Terms of Use
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-between my-5 px-12'>
          <span className='text-[#8c8c8c] text-xs'>
            English
          </span>
          <span className='text-[#8c8c8c] text-xs'>
            © 2024 FotoSlide
          </span>
        </div>
      </div>
    </>
  );
};

export default FooterComponent;
