'use client';
import Image from 'next/image';
import { Link, Button } from '@nextui-org/react';
import TaglineComponent from './tagline';
import SetupComponent from './setup';
import HowItWorkComponent from './howitworks';
import PricingComponent from './pricing';
import IncludeComponent from './include';
import QuestionsComponent from './questions';

const HomeComponent = () => {
  return (
    <>
      <nav className="sticky top-0 z-50 flex items-center justify-between px-16 py-2 bg-white border-b border-solid border-[#dddddd]">
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
            <Button className='rounded-lg h-8 bg-[#0bb90b] text-white border-green-500'>
              Get Started
            </Button>
          </div>
        </div>
      </nav>
      <div className="mx-auto px-16 py-32 bg-[#f8fafd]">
        <div className='flex'>
          <div className='w-[60%]'>
            <TaglineComponent />
          </div>
          <div>
            <div className="relative flex justify-center">
              <img alt="Group of people celebrating with a cake" className="absolute top-0 left-1/2 transform -translate-x-1/2 -rotate-6 shadow-lg rounded-lg" height="200" src="https://storage.googleapis.com/a1aa/image/KL6iJ3DAE4KaHRetmArRpYA3iGiCNGHMOa3CLUAk4rM4869JA.jpg" width="300"/>
              <img alt="Woman celebrating with confetti" className="absolute top-1/2 left-1/4 transform -translate-y-1/2 -rotate-3 shadow-lg rounded-lg" height="200" src="https://storage.googleapis.com/a1aa/image/6LiG6vQc9U7mLpHogeC7PifUDBAYkGQnOemN4AWlnHf6mXvPB.jpg" width="300"/>
              <img alt="Couple dancing at a wedding" className="absolute top-1/2 right-1/4 transform -translate-y-1/2 rotate-3 shadow-lg rounded-lg" height="200" src="https://storage.googleapis.com/a1aa/image/d5pwTogqPhY0H5u2CLLVXxQjHaAYRa6lBV2jokmQdOpce69JA.jpg" width="300"/>
            </div>
          </div>
        </div>
      </div>
      <SetupComponent />
      <HowItWorkComponent />
      <PricingComponent />
      <IncludeComponent />
      <QuestionsComponent />
    </>
  );
};

export default HomeComponent;
