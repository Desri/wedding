'use client';
import React, { useContext } from 'react';
import Image from 'next/image';
import MenuDashboardComponent from "./menu";
import ShareAlbumDashboardComponent from './sharealbum';
import SlideShowDashboardComponent from './slideshow';
import {
  Button
} from "@nextui-org/react";
import { AppContext } from '../../../contexts/ContextProviders';
import ModalAddEventComponent from './modalAddEvent';

const DashboardComponent = () => {
  const { state, dispatch } = useContext(AppContext);
  const showPopup = () => {
      dispatch({
        type: 'SET_POPUP_EVENT',
        value: true
      });
    };
  return (
    <>
      {state.profile?.Plan === '' || state.showListEvent.length === 0 ? (
        <div className='text-center bg-[#F8FAFD] py-16'>
          <h1 className='text-black mb-4 text-3xl'>
            Welcome, {state.profile?.Fullname}!
          </h1>
          <p className='text-xs text-[#909090]'>
            Let’s make your moments unforgettable. Start by creating your first event and watch the magic unfold!
          </p>
          <div className='mt-14'>
            <Button className='!text-black !mt-0 rounded-lg !h-[35px] text-xs !font-semibold !text-white border-[#0BB90B] bg-[#0BB90B] mt-1.5' onClick={() => showPopup()}>
              Create New Event
            </Button>
          </div>
          <div className='mt-8'>
            <Image 
              src="/img-dashboard.png"
              alt="Thumb"
              className="!relative !w-[650px] mx-auto"
              fill
              priority
            />
          </div>
        </div>
      ) : (
        <div className="flex">
          <MenuDashboardComponent />
          <div className="sm:w-10/12 bg-[#f8fafd] h-screen">
            <div className="p-8">
              <div className="flex items-center gap-4 mb-8">
                <Image 
                  src="/thumb.png"
                  alt="Thumb"
                  className="!relative !w-[64px]"
                  fill
                  priority
                />
                <div>
                  <div className='text-black'>
                    <h2 className='text-xl sm:text-2xl mb-1 sm:mb-0'>
                      Dara & Arifin Weddings
                    </h2>
                    <p className='text-xs font-bold'>
                      Event start: 13 Aug 2024 <span className='bg-[#CEFFCE] font-medium py-1 px-1.5 rounded ml-1'>Plan: Lite</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className='grid sm:grid-cols-2 gap-8'>
                <div>
                  <ShareAlbumDashboardComponent />
                </div>
                <div>
                  <SlideShowDashboardComponent />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <ModalAddEventComponent />
    </>
  );
};

export default DashboardComponent;
