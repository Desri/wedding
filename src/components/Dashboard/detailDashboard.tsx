'use client';
import React, { useContext, useEffect } from 'react';
import Image from 'next/image';
import MenuDashboardComponent from "./menu";
import ShareAlbumDashboardComponent from './sharealbum';
import SlideShowDashboardComponent from './slideshow';
import { AppContext } from '../../../contexts/ContextProviders';
import { usePathname } from 'next/navigation';
import { getDetailEvent } from '../../../services/client/event';

const DetailDashboardComponent =  () => {
  
  const { state, dispatch } = useContext(AppContext);
  const pathname = usePathname();
  const lastSegment = pathname.split('/').filter(Boolean).pop();

  /* eslint-disable */
  useEffect(() => {
    fetchDetailEvent();
  }, []);

  const fetchDetailEvent = () => {
    getDetailEvent({lastSegment})
      .then((res: any) => {
        dispatch({
          type: 'SET_DETAIL_EVENT',
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
      <div className="flex">
        <MenuDashboardComponent />
        <div className="sm:w-10/12 bg-[#f8fafd] h-screen">
          <div className="p-4 sm:p-8">
            <div className="flex items-center gap-4 mb-8">
              {state.showDetailEvent?.appearance.fileUrl ? (
                <div className='h-[66px] w-[66px] bg-[#f0f0f0] rounded-lg'>
                  <img
                    src={state.showDetailEvent?.appearance.fileUrl}
                    alt="Preview"
                    className='object-cover mx-auto rounded-lg h-full w-full'
                  />
                </div>
              ) : (
                <div className='h-[66px] w-[66px] bg-[#f0f0f0] rounded-lg'>
                  <img
                    src="/no-image.png"
                    alt="Preview"
                    className='object-cover relative top-3 mx-auto rounded-lg h-[40px] w-[40px]'
                  />
                </div>
              )}
              <div>
                <div className='text-black'>
                  <h2 className='text-xl sm:text-2xl mb-1 sm:mb-0'>
                    {state.showDetailEvent?.title}
                  </h2>
                  <p className='text-xs font-bold'>
                    Event start: {state.showDetailEvent?.date.day}/{state.showDetailEvent?.date.month}/{state.showDetailEvent?.date.year} <span className='bg-[#CEFFCE] font-medium py-1 px-1.5 rounded ml-1 capitalize'>Plan: {state.profile?.Plan}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className='grid sm:grid-cols-2 gap-8'>
              <div>
                <ShareAlbumDashboardComponent data={state.showDetailEvent} />
              </div>
              <div>
                <SlideShowDashboardComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailDashboardComponent;
