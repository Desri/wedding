'use client';
import React, { useContext } from 'react';
import { Link } from '@nextui-org/react';
import {
  Button
} from "@nextui-org/react";
import { AppContext } from '../../../../contexts/ContextProviders';
import ModalAddEventComponent from '../modalAddEvent';

const EventDashboardComponent = ({
  list
}: {
  list?: any;
}) => {
  const { state, dispatch } = useContext(AppContext);
  /* eslint-disable */
  const showPopup = () => {
    dispatch({
      type: 'SET_POPUP_EVENT',
      value: true
    });
  };
  /* eslint-enable */
  return (
    <>
      <div className="px-5">
        <h2 className="text-2xl text-black font-semibold mb-1">
          My Events
        </h2>
        
        <p className="text-xs text-[#909090] font-semibold">
          Here you can find all you events or create new ones.
        </p>
        <Button className='!text-black !mt-4 rounded-lg !h-[35px] text-xs !font-semibold !text-white border-[#0BB90B] bg-[#0BB90B] mt-1.5' onClick={() => showPopup()}>
          Create New Event
        </Button>
        {list.data.length > 0 && (
          <div className='grid grid-cols-4 gap-5 mt-8'>
            {state.showListEvent.map((event) => (
              <div key={event._id} className='bg-white px-5 pt-5 pb-3 rounded-lg cursor-pointer border-2 border-solid hover:border-[#0BB90B] border-[#F7F7F7]'>
                <Link
                  href={`/dashboard/event/${event._id}`}
                  className="block"
                >
                  <h2 className='text-md text-black font-semibold'>
                    {event.title}
                  </h2>
                  <span className='bg-[#dbe5ff] font-medium py-1 px-2 rounded text-[#0145bb] text-xs capitalize'>Plan: {event.plan?.plan}</span>
                  <div className='mt-7 border-b border-solid border-[#dddddd] mb-3 pb-3'>
                    <p className='text-sm text-[#909090]'>
                      90 uploads
                    </p>
                    <p className='text-sm text-[#909090]'>
                      Created on {event.date.day}/{event.date.month}/{event.date.year}
                    </p>
                  </div>
                  <p className='text-center text-xs text-[#909090]'>
                    View Event
                  </p>
                </Link>
              </div>
            ))}
          </div>
        )}
        <ModalAddEventComponent />
      </div>
    </>
  );
};

export default EventDashboardComponent;
