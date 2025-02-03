'use client';
import React, { useRef, useEffect, useContext } from 'react';
import Image from 'next/image';
import {Button} from "@nextui-org/react";
import GalleryComponent from '../SmallWeb/gallery';
import { usePathname } from 'next/navigation';
import { getDetailEvent } from '../../../services/client/event';
import { AppContext } from '../../../contexts/ContextProviders';
import { getListAlbum } from '../../../services/client/album';

const EventComponent = () => {
  const { state, dispatch } = useContext(AppContext);
  const bottomRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const pathname = usePathname();
  const lastSegment = pathname.split('/').filter(Boolean).pop();

  /* eslint-disable */
  useEffect(() => {
    fetchDetailEvent();
  }, []);
  const fetchDetailEvent = () => {
    getDetailEvent({lastSegment})
      .then((res: any) => {
        fetchListAlbum()
        dispatch({
          type: 'SET_DETAIL_EVENT',
          value: res.data
        });
      })
      .catch((err: any) => {
        console.log('Check Error', err)
      });
  };
  const fetchListAlbum = () => {
    getListAlbum({lastSegment})
      .then((res: any) => {
        dispatch({
          type: 'SET_LIST_ALBUM',
          value: res.data
        });
      })
      .catch((err: any) => {
        console.log('Check Error', err)
      });
  };
  /* eslint-enable */
  return (
    <>
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
              {state.showDetailEvent?.appearance.fileUrl ? (
                <div className='h-[75px] w-[90px] bg-[#f0f0f0] rounded-lg'>
                  <img
                    src={state.showDetailEvent?.appearance.fileUrl}
                    alt="Preview"
                    className='object-cover mx-auto rounded-lg h-full w-full'
                  />
                </div>
              ) : (
                <div className='h-[75px] w-[90px] bg-[#f0f0f0] rounded-lg'>
                  <img
                    src="/no-image.png"
                    alt="Preview"
                    className='object-cover relative top-3 mx-auto rounded-lg h-[40px] w-[40px]'
                  />
                </div>
              )}
            </div>
            <div>
              <Button color="danger" variant="bordered" className='bg-[#0BB90B] text-white border-[#0BB90B] !mr-2.5'>
                <span className='text-2xl'>+</span>Upload
              </Button>
            </div>
          </div>
          <div className='mb-4 pb-4 border-b border-solid border-[#999999] mr-2.5'>
            <h1 className='text-2xl font-bold mb-1'>
              {state.showDetailEvent?.title}
            </h1>
            <span>
              {state.showDetailEvent?.date.day}/{state.showDetailEvent?.date.month}/{state.showDetailEvent?.date.year}
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

export default EventComponent;
