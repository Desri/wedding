'use client';
import React, { useContext } from 'react';
import Image from 'next/image';
import {
  Button
} from "@nextui-org/react";
import { AppContext } from '../../../contexts/ContextProviders';
import ModalAddEventComponent from './modalAddEvent';
import ModalPaymentComponent from './modalpayment';
import DetailDashboardComponent from './detailDashboard';

const DashboardComponent = ({
  data,
  listEvent
}: {
  data?: any; // eslint-disable-next-line @typescript-eslint/no-explicit-any
  listEvent?: any // eslint-disable-next-line @typescript-eslint/no-explicit-any
}) => {
  const { state, dispatch } = useContext(AppContext);
  const showPopup = () => {
    dispatch({
      type: 'SET_POPUP_EVENT',
      value: true
    });
  };
  return (
    <>
      {data.result.Plan === '' || listEvent.data.length === 0 ? (
        <div className='text-center bg-[#F8FAFD] py-16'>
          <h1 className='text-black mb-4 text-3xl'>
            Welcome, {data.result.fullname}!
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
        <DetailDashboardComponent />
      )}
      <ModalAddEventComponent />
      <ModalPaymentComponent />
    </>
  );
};

export default DashboardComponent;
