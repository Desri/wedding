'use client';
import React, { useContext } from 'react';
import {Button} from "@nextui-org/react";
import Link from 'next/link';
import { AppContext } from '../../../contexts/ContextProviders';
const GalleryComponent = () => {
  const { state } = useContext(AppContext);
  return (
    <>
      <div className='bg-white flex items-center justify-between mb-1 p-4 border-b-2 border-solid border-[#dddddd]'>
        <div>
          <h2 className='text-black font-bold'>
            Wedding Day
          </h2>
          <span className='font-bold text-sm text-[#B1B1B1]'>
            {state.listAlbum?.length} Photos & Videos
          </span>
        </div>
        <div>
          <Button color="danger" variant="bordered" className='bg-[#0BB90B] text-white border-[#0BB90B]' as={Link} href="/lite/upload">
            <span className='text-2xl'>+</span>Upload
          </Button>
        </div>
      </div>
      <div className={`p-4  gap-x-2.5 ${state.listAlbum.length <= 0 ? "" : "columns-3 sm:columns-4"}`}>
        {state.listAlbum?.map((item) => (
          <figure key={item._id}>
            <img
              src={item.fileUrl}
              alt={item.originalFilename}
              style={{ objectFit: "cover" }}
              className='h-full w-full'
            />
          </figure>
        ))}
      </div>
      {state.listAlbum.length <= 0 && (
        <>
          <div className='text-center py-12 sm:py-16'>
            <img
              src="/no-image.png"
              alt="Preview"
              className='object-cover mx-auto h-[60px] w-[60px] mb-3'
            />
            <p className="font-semibold">
              No album!
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default GalleryComponent;
