'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import {Button} from "@nextui-org/react";
import GalleryComponent from '../SmallWeb/gallery';
const LiteComponent = () => {

  const bottomRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* <div className='absolute w-full mix-blend-multiply bg-[#909090]'>
        <div className="bg-cover h-screen bg-no-repeat bg-[url('/bg-1.jpg')]"></div>
      </div> */}
      <div className="relative h-screen z-10 px-5 text-white bg-cover h-screen bg-no-repeat bg-[url('/bg-1.jpg')]">
        <div className='pt-8'>
          <div className='flex items-center justify-between'>
            <div>
              <Image 
                src="/logo-white.png"
                alt="logo-white"
                width={155}
                height={90}
                priority
              />
            </div>
            <div>
              <p className='text-xs text-white'>
                Snap, Scan, Share Instantly.
              </p>
            </div>
          </div>
        </div>

        <div className='absolute bottom-5 w-11/12 mb-6'>
          <div className="flex items-center justify-between mb-4">
            <div className='rounded-lg overflow-hidden'>
              <Image 
                src="/thumb.png"
                alt="Background"
                width={90}
                height={50}
                priority
              />
            </div>
            <div>
              <Button color="danger" variant="bordered" className='bg-[#0BB90B] text-white border-[#0BB90B] !mr-2.5'>
                <span className='text-2xl'>+</span>Upload
              </Button>
            </div>
          </div>
          <div className='mb-4 pb-4 border-b border-solid border-[#999999] mr-2.5'>
            <h1 className='text-2xl font-bold mb-1'>
              Dara & Arifin Weddings
            </h1>
            <span>
              13 Aug 2024
            </span>
          </div>
          <p className='text-center' onClick={scrollToBottom}>
            230 Photos & Videos
            <svg 
              className='mx-auto'
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </p>
        </div>
      </div>
      <div ref={bottomRef} className='bg-[#f8fafd]'>
        <GalleryComponent />
      </div>
    </>
  );
};

export default LiteComponent;
