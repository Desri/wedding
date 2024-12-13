'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import {Button} from "@nextui-org/react";
import GalleryComponent from './gallery';
const HomeComponent = () => {

  const bottomRef = useRef(null);

  // Fungsi untuk scroll ke elemen tujuan
  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className='absolute w-full mix-blend-multiply bg-[#909090]'>
        <div className="bg-cover h-screen bg-no-repeat bg-[url('/bg-1.jpg')]"></div>
      </div>
      <div className='relative h-screen z-10 px-4 text-white'>
        <div className='pt-4'>
          <p className='mb-2'>
            Select an album to upload to
          </p>
          <div className='overflow-x-auto flex gap-4'>
            <div className='flex-none w-[135] bg-white rounded-lg overflow-hidden'>
              <Image 
                src="/thumb1.png"
                alt="Background"
                width={135}
                height={50}
                priority
              />
              <p className='text-black p-2 text-sm'>
                Wedding Day
              </p>
            </div>
            <div className='flex-none w-[135] bg-white rounded-lg overflow-hidden'>
              <Image 
                src="/thumb2.png"
                alt="Background"
                width={135}
                height={50}
                priority
              />
              <p className='text-black p-2 text-sm'>
                Beach Club Party
              </p>
            </div>
            <div className='flex-none w-[135] bg-white rounded-lg overflow-hidden'>
              <Image 
                src="/thumb1.png"
                alt="Background"
                width={135}
                height={50}
                priority
              />
              <p className='text-black p-2 text-sm'>
                Beach Club Party
              </p>
            </div>
          </div>
        </div>

        <div className='absolute bottom-0 w-11/12 mb-6'>
          <div className="flex items-center justify-between mb-4">
            <div className='rounded-lg overflow-hidden'>
              <Image 
                src="/thumb2.png"
                alt="Background"
                width={110}
                height={50}
                priority
              />
            </div>
            <div>
              <Button color="danger" variant="bordered" className='bg-[#0BB90B] text-white border-[#0BB90B]'>
                <span className='text-2xl'>+</span>Upload
              </Button>
            </div>
          </div>
          <div className='mb-4 pb-4 border-b border-solid border-[#999999]'>
            <h1 className='text-2xl font-bold mb-1'>
              Beach Club Party
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

export default HomeComponent;
