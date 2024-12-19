'use client';
import Image from 'next/image';
import { Button } from '@nextui-org/react';

const TaglineComponent = () => {
  return (
    <>
      <h1 className="text-black text-4xl sm:text-5xl font-bold mb-7">
        Make your
        <span className="mx-2 text-green-500">
        Wedding Party
        </span>
        unforgettable!
      </h1>
      <p className="text-gray-700 text-lg sm:mr-20 mb-8">
        Collect every photo and video with ease into a beautiful digital album, instantly ready for a live slideshow. No apps, no fuss—so simple, even grandma can do it!
      </p>
      <div className="flex gap-5 mb-8">
        <Button variant="bordered" className='rounded-lg h-10 bg-[#0BB90B] text-white border-[#0BB90B]'>
          Create Your Event
        </Button>
        <Button variant="bordered" className='!text-black rounded-lg h-10 text-white border-[#676767]'>
          <Image 
            src="/play.png"
            alt="Hands"
            className="!relative !top-[0px] !w-[18px] !h-[18px]"
            fill
            priority
          /> Watch How it works
        </Button>
      </div>
    </>
  );
};

export default TaglineComponent;
