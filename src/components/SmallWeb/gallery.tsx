'use client';
import React from 'react';
import Image from 'next/image';
import {Button} from "@nextui-org/react";
const GalleryComponent = () => {
  return (
    <>
      <div className='bg-white flex items-center justify-between mb-1 p-4 border-b-2 border-solid border-[#dddddd]'>
        <div>
          <h2 className='text-black font-bold'>
            Wedding Day
          </h2>
          <span className='font-bold text-sm text-[#B1B1B1]'>
            98 Photos & Videos
          </span>
        </div>
        <div>
          <Button color="danger" variant="bordered" className='bg-[#0BB90B] text-white border-[#0BB90B]'>
            <span className='text-2xl'>+</span>Upload
          </Button>
        </div>
      </div>
      <div className="p-4 columns-3 sm:columns-4 gap-x-2.5">
        <figure>
          <Image 
            src="/album1.jpg"
            alt="Background"
            className="imgAlbum !relative w-auto"
            fill
            priority
          />
        </figure>
        <figure>
          <Image 
            src="/album2.jpg"
            alt="Background"
            className="imgAlbum !relative w-auto"
            fill
            priority
          />
        </figure>
        <figure>
          <Image 
            src="/album3.jpg"
            alt="Background"
            className="imgAlbum !relative w-auto"
            fill
            priority
          />
        </figure>
        <figure>
          <Image 
            src="/album4.jpg"
            alt="Background"
            className="imgAlbum !relative w-auto"
            fill
            priority
          />
        </figure>
        <figure>
          <Image 
            src="/album5.jpg"
            alt="Background"
            className="imgAlbum !relative w-auto"
            fill
            priority
          />
        </figure>
        <figure>
          <Image 
            src="/album6.jpg"
            alt="Background"
            className="imgAlbum !relative w-auto"
            fill
            priority
          />
        </figure>
        <figure>
          <Image 
            src="/album7.jpg"
            alt="Background"
            className="imgAlbum !relative w-auto"
            fill
            priority
          />
        </figure>
        <figure>
          <Image 
            src="/album8.jpg"
            alt="Background"
            className="imgAlbum !relative w-auto"
            fill
            priority
          />
        </figure>
        <figure>
          <Image 
            src="/album9.jpg"
            alt="Background"
            className="imgAlbum !relative w-auto"
            fill
            priority
          />
        </figure>
        <figure>
          <Image 
            src="/album10.jpg"
            alt="Background"
            className="imgAlbum !relative w-auto"
            fill
            priority
          />
        </figure>
        <figure>
          <Image 
            src="/album11.jpg"
            alt="Background"
            className="imgAlbum !relative w-auto"
            fill
            priority
          />
        </figure>
        <figure>
          <Image 
            src="/album12.jpg"
            alt="Background"
            className="imgAlbum !relative w-auto"
            fill
            priority
          />
        </figure>
        <figure>
          <Image 
            src="/album13.jpg"
            alt="Background"
            className="imgAlbum !relative w-auto"
            fill
            priority
          />
        </figure>
        <figure>
          <Image 
            src="/album14.jpg"
            alt="Background"
            className="imgAlbum !relative w-auto"
            fill
            priority
          />
        </figure>
        <figure>
          <Image 
            src="/album15.jpg"
            alt="Background"
            className="imgAlbum !relative w-auto"
            fill
            priority
          />
        </figure>
        <figure>
          <Image 
            src="/album16.jpg"
            alt="Background"
            className="imgAlbum !relative w-auto"
            fill
            priority
          />
        </figure>
        <figure>
          <Image 
            src="/album17.jpg"
            alt="Background"
            className="imgAlbum !relative w-auto"
            fill
            priority
          />
        </figure>
        <figure>
          <Image 
            src="/album18.jpg"
            alt="Background"
            className="imgAlbum !relative w-auto"
            fill
            priority
          />
        </figure>
      </div>
    </>
  );
};

export default GalleryComponent;
