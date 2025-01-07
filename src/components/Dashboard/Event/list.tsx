'use client';
import React, { useState } from 'react';
import {parseDate} from "@internationalized/date";
import {
  Button,
  Modal,
  ModalContent,
  ModalBody,
  Input,
  DatePicker,
  useDisclosure
} from "@nextui-org/react";
import { createEvent } from '../../../../services/client/event';

const ListEventComponent = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [value, setValue] = useState(parseDate("2024-04-04"));
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState('');
  const [eventName, setEventName] = useState('');

  /* eslint-disable */
  const handleClick = (newValue: any) => {
    setType(newValue);
  };

  const handleChange = (e: any) => {
    const { value } = e.target;
    setEventName(value)
  };

  const handleSubmit = () => {
    const payload = {
      type,
      eventName,
      value
    }
    console.log("Form Data:", payload);

    createEvent({ payload })
    .then((res: any) => {
      console.log('Check', res)
      // if(res.success) {
      //   setLoading(false);
      //   setCookie('isAuth', true);
      //   setCookie('_FotoSlideToken', res.token);
      //   router.push('/dashboard');
      // }
    })
    .catch((err: any) => {
      setLoading(false);
      console.log('Error', err)
    })
    // Hit API
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
        <Button className='!text-black !mt-4 rounded-lg !h-[35px] text-xs !font-semibold !text-white border-[#0BB90B] bg-[#0BB90B] mt-1.5' onPress={onOpen}>
          Create New Event
        </Button>
        <div className='grid grid-cols-4 gap-5 mt-8'>
          <div className='bg-white px-5 pt-5 pb-3 rounded-lg cursor-pointer border-2 border-solid hover:border-[#0BB90B] border-[#F7F7F7]'>
            <h2 className='text-md text-black font-semibold'>
              Dara & Arifin Weddings
            </h2>
            <span className='bg-[#dbe5ff] font-medium py-1 px-2 rounded text-[#0145bb] text-xs'>Plan: Pro</span>
            <div className='mt-7 border-b border-solid border-[#dddddd] mb-3 pb-3'>
              <p className='text-sm text-[#909090]'>
                90 uploads
              </p>
              <p className='text-sm text-[#909090]'>
                Created on Sept 21, 2024
              </p>
            </div>
            <p className='text-center text-xs text-[#909090]'>
              View Event
            </p>
          </div>
          <div className='bg-white px-5 pt-5 pb-3 rounded-lg cursor-pointer border-2 border-solid hover:border-[#0BB90B] border-[#F7F7F7]'>
            <h2 className='text-md text-black font-semibold'>
              New Events
            </h2>
            <span className='bg-[#CEFFCE] font-medium py-1 px-2 rounded text-[#0bb90b] text-xs'>Plan: Lite</span>
            <div className='mt-7 border-b border-solid border-[#dddddd] mb-3 pb-3'>
              <p className='text-sm text-[#909090]'>
                90 uploads
              </p>
              <p className='text-sm text-[#909090]'>
                Created on Sept 21, 2024
              </p>
            </div>
            <p className='text-center text-xs text-[#909090]'>
              View Event
            </p>
          </div>
        </div>
        <Modal isOpen={isOpen} size="2xl" onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalBody className='p-7'>
                  <div className="text-black">
                    <h3 className="text-sm font-semibold">
                      Create New Event
                    </h3>
                    <div className="text-black my-8">
                      <h3 className="text-sm font-semibold">
                        Add New Event
                      </h3>
                      <span className="text-xs text-[#909090] font-semibold">
                        What is the event title?
                      </span>
                      <Input
                        type="text"
                        radius="sm"
                        name="eventName"
                        value={eventName}
                        onChange={handleChange}
                        placeholder="i.e - Dara & Arifin Weddings"
                        className="mt-3 w-96 border border-solid border-[#dddddd] rounded-md"
                      />
                    </div>
                    <div className="text-black mb-8">
                      <h3 className="text-sm font-semibold">
                        When does it happen?
                      </h3>
                      <span className="text-xs text-[#909090] font-semibold">
                        Set when your event is scheduled to start
                      </span>
                      <DatePicker
                        className="mt-3 max-w-[180px] border border-solid border-[#dddddd] rounded-md input-date"
                        value={value}
                        radius="sm"
                        // onChange={setValue}
                        onChange={(newValue) => setValue(newValue!)}
                      />
                    </div>
                    <div className="text-black mb-8">
                      <h3 className="text-sm font-semibold">
                        Event Type
                      </h3>
                      <span className="text-xs text-[#909090] font-semibold">
                        We’ll adjust the experience according to your event type.
                      </span>


                      <div className='flex items-center gap-5 mt-1.5'>
                        <div
                          className={`hover:bg-[#0BB90B17] border-2 border-solid hover:border-[#0BB90B] text-center py-2 px-2 rounded-lg cursor-pointer ${type === '1' ? 'bg-[#0BB90B17] border-[#0BB90B]' : 'bg-[#F7F7F7] border-[#F7F7F7]'}`}
                          onClick={() => handleClick('1')}
                        >
                          <h2 className='text-black text-sm font-semibold flex items-center gap-2'>
                            <span>
                              💍
                            </span>
                            Wedding
                          </h2>
                        </div>
                        <div
                          className={`hover:bg-[#0BB90B17] border-2 border-solid hover:border-[#0BB90B] text-center py-2 px-2 rounded-lg cursor-pointer ${type === '2' ? 'bg-[#0BB90B17] border-[#0BB90B]' : 'bg-[#F7F7F7] border-[#F7F7F7]'}`}
                          onClick={() => handleClick('2')}
                        >
                          <h2 className='text-black text-sm font-semibold flex items-center gap-2'>
                            <span>
                              🥳
                            </span>
                            Party
                          </h2>
                        </div>
                        <div
                          className={`hover:bg-[#0BB90B17] border-2 border-solid hover:border-[#0BB90B] text-center py-2 px-2 rounded-lg cursor-pointer ${type === '3' ? 'bg-[#0BB90B17] border-[#0BB90B]' : 'bg-[#F7F7F7] border-[#F7F7F7]'}`}
                          onClick={() => handleClick('3')}
                        >
                          <h2 className='text-black text-sm font-semibold flex items-center gap-2'>
                            <span>
                              🎤
                            </span>
                            Conference
                          </h2>
                        </div>
                        <div
                          className={`hover:bg-[#0BB90B17] border-2 border-solid hover:border-[#0BB90B] text-center py-2 px-2 rounded-lg cursor-pointer ${type === '4' ? 'bg-[#0BB90B17] border-[#0BB90B]' : 'bg-[#F7F7F7] border-[#F7F7F7]'}`}
                          onClick={() => handleClick('4')}
                        >
                          <h2 className='text-black text-sm font-semibold flex items-center gap-2'>
                            <span>
                              🎂
                            </span>
                            Birthday
                          </h2>
                        </div>
                        <div
                          className={`hover:bg-[#0BB90B17] border-2 border-solid hover:border-[#0BB90B] text-center py-2 px-2 rounded-lg cursor-pointer ${type === '5' ? 'bg-[#0BB90B17] border-[#0BB90B]' : 'bg-[#F7F7F7] border-[#F7F7F7]'}`}
                          onClick={() => handleClick('5')}
                        >
                          <h2 className='text-black text-sm font-semibold flex items-center gap-2'>
                            <span>
                              🤩
                            </span>
                            Others
                          </h2>
                        </div>
                      </div>
                    </div>
                    <Button
                      className='!text-black max-w-[125px] rounded-lg !h-[35px] text-xs !font-semibold !text-white border-[#0BB90B] bg-[#0BB90B]'
                      onPress={onClose}
                      onClick={handleSubmit}
                    >
                      {loading ? (
                        <span>Loading...</span>
                      ) : (
                        <span>Create Event</span>
                      )}
                    </Button>
                  </div>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </>
  );
};

export default ListEventComponent;
