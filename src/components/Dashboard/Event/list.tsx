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

const ListEventComponent = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [value, setValue] = useState(parseDate("2024-04-04"));
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
                        <div className='hover:bg-[#0BB90B17] border-2 border-solid hover:border-[#0BB90B] border-[#F7F7F7] bg-[#F7F7F7] text-center py-2 px-2 rounded-lg cursor-pointer'>
                          <h2 className='text-black text-sm font-semibold flex items-center gap-2'>
                            <span>
                              💍
                            </span>
                            Wedding
                          </h2>
                        </div>
                        <div className='hover:bg-[#0BB90B17] border-2 border-solid hover:border-[#0BB90B] border-[#F7F7F7] bg-[#F7F7F7] text-center py-2 px-2 rounded-lg cursor-pointer'>
                          <h2 className='text-black text-sm font-semibold flex items-center gap-2'>
                            <span>
                              🥳
                            </span>
                            Party
                          </h2>
                        </div>
                        <div className='hover:bg-[#0BB90B17] border-2 border-solid hover:border-[#0BB90B] border-[#F7F7F7] bg-[#F7F7F7] text-center py-2 px-2 rounded-lg cursor-pointer'>
                          <h2 className='text-black text-sm font-semibold flex items-center gap-2'>
                            <span>
                              🎤
                            </span>
                            Conference
                          </h2>
                        </div>
                        <div className='hover:bg-[#0BB90B17] border-2 border-solid hover:border-[#0BB90B] border-[#F7F7F7] bg-[#F7F7F7] text-center py-2 px-2 rounded-lg cursor-pointer'>
                          <h2 className='text-black text-sm font-semibold flex items-center gap-2'>
                            <span>
                              🎂
                            </span>
                            Birthday
                          </h2>
                        </div>
                        <div className='hover:bg-[#0BB90B17] border-2 border-solid hover:border-[#0BB90B] border-[#F7F7F7] bg-[#F7F7F7] text-center py-2 px-2 rounded-lg cursor-pointer'>
                          <h2 className='text-black text-sm font-semibold flex items-center gap-2'>
                            <span>
                              🤩
                            </span>
                            Others
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button className='!text-black max-w-[125px] rounded-lg !h-[35px] text-xs !font-semibold !text-white border-[#0BB90B] bg-[#0BB90B]'>
                    Create Event
                  </Button>
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
