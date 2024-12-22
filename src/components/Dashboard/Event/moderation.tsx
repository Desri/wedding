'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import {
  Button,
  Modal,
  ModalContent,
  ModalBody,
  Switch,
  useDisclosure,
  Tabs,
  Tab,
  Input,
  DatePicker
} from "@nextui-org/react";
import {parseDate} from "@internationalized/date";

const ModerationDashboardTabComponent = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [value, setValue] = useState(parseDate("2024-04-04"));
  return (
    <>
      <div className="text-black mb-2">
        <h3 className="text-sm font-semibold">
          Welcome Screen
        </h3>
        <span className="text-xs text-[#909090] font-semibold">
          Set up an introductory screen for guests first visit, with a form to collect their info.
        </span>
      </div>
      <Button variant="bordered" className='!text-[#0BB90B] max-w-[155px] rounded-lg !h-[35px] text-xs !font-semibold border-[#0BB90B] mt-1.5' onPress={onOpen}>
        Edit Welcome Screen
      </Button>
      <div className='mt-8'>
        <div className="flex gap-8">
          <div className="text-black mb-2">
            <h3 className="text-sm font-semibold mb-1.5">
              Manually Approve Guest Uploads
            </h3>
            <p className="text-xs text-[#909090] font-semibold">
              Manually approve uploads made by guests before it is shown on <br /> your Slideshow and Digital Album. <span className="text-[#0BB90B]">More Info</span>
            </p>
          </div>
          <Switch size="sm" />
        </div>
      </div>
      <div className='mt-8'>
        <div className="text-black mb-2">
          <h3 className="text-sm font-semibold">
            Allowed Media Types
          </h3>
          <span className="text-xs text-[#909090] font-semibold">
            Control what type of media can be uploaded to your event.
          </span>
        </div>
      </div>
      <div className='mt-8'>
        <div className="text-black mb-2">
          <h3 className="text-sm font-semibold">
            Digital Album Permissions
          </h3>
          <span className="text-xs text-[#909090] font-semibold">
            Control how guests can interact with your event’s digital album.
          </span>
        </div>
        <div className='flex items-center gap-5 mt-1'>
          <div className='hover:bg-[#0BB90B17] border-2 border-solid hover:border-[#0BB90B] border-[#F7F7F7] bg-[#F7F7F7] p-5 rounded-xl w-1/5 cursor-pointer'>
            <h2 className='text-black text-sm font-semibold mb-7'>
              View & Upload
            </h2>
            <p className='text-xs text-[#909090]'>
              Guests can upload new photos & view existing ones
            </p>
          </div>
          <div className='hover:bg-[#0BB90B17] border-2 border-solid hover:border-[#0BB90B] border-[#F7F7F7] bg-[#F7F7F7] p-5 rounded-xl w-1/5 cursor-pointer'>
            <h2 className='text-black text-sm font-semibold mb-7'>
              View Only
            </h2>
            <p className='text-xs text-[#909090]'>
              Guests can view existing photos but can not upload new ones
            </p>
          </div>
          <div className='hover:bg-[#0BB90B17] border-2 border-solid hover:border-[#0BB90B] border-[#F7F7F7] bg-[#F7F7F7] p-5 rounded-xl w-1/5 cursor-pointer'>
            <h2 className='text-black text-sm font-semibold mb-7'>
              Upload Only
            </h2>
            <p className='text-xs text-[#909090]'>
              Guests can upload new photos but can not view existing ones.
            </p>
          </div>
        </div>
      </div>
      <div className='mt-8 mb-5'>
        <div className="flex gap-8">
          <div className="text-black mb-2">
            <h3 className="text-sm font-semibold mb-1.5">
              Disable Guests Download
            </h3>
            <p className="text-xs text-[#909090] font-semibold">
              Hide the download button to prevent guests from <br /> downloading photos/videos in the album page.
            </p>
          </div>
          <Switch size="sm" />
        </div>
      </div>
      <Button className='!text-black max-w-[125px] rounded-lg !h-[35px] text-xs !font-semibold !text-white border-[#0BB90B] bg-[#0BB90B] mt-1.5'>
        Update
      </Button>
      <Modal isOpen={isOpen} size="3xl" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className='p-7'>
                
                <div className="text-black smb-7">
                  <h3 className="text-sm font-semibold">
                    Welcome Screen Settings
                  </h3>
                  <span className="text-xs text-[#909090]">
                    Set up a welcome screen that appears once for first-time guests.
                  </span>

                  <div className='flex'>
                    <div className='w-3/5'>
                      <Tabs aria-label="Options" variant="underlined" className="tabs-event !ml-0 !mt-5">
                        <Tab key="cover" title="Cover">
                          <div className="text-black mb-8">
                            <h3 className="text-sm">
                              Title
                            </h3>
                            <span className="text-xs text-[#909090] font-semibold">
                              What is the event title?
                            </span>
                            <Input type="text" radius="sm" className="mt-3 w-96 border border-solid border-[#dddddd] rounded-md" />
                          </div>

                          <div className="text-black mb-8">
                            <h3 className="text-sm">
                              When does it happen?
                            </h3>
                            <span className="text-xs text-[#909090] font-semibold">
                              Set when your event is scheduled to start.
                            </span>
                            <DatePicker
                              className="mt-3 max-w-[180px] border border-solid border-[#dddddd] rounded-md input-date"
                              value={value}
                              radius="sm"
                              // onChange={setValue}
                              onChange={(newValue) => setValue(newValue!)}
                            />
                          </div>

                          <div className='mt-8'>
                            <div className="text-black mb-2">
                              <h3 className="text-sm font-semibold">
                                Background
                              </h3>
                              <span className="text-xs text-[#909090] font-semibold">
                                Set a background for the welcome screen
                              </span>
                            </div>
                          </div>
                        </Tab>
                        <Tab key="form" title="Guest Form">
                          <p className='text-[#909090] text-sm'>
                            Create a form to collect guest information before they proceed to your album. Add new fields as needed, or rearrange existing ones by dragging.
                          </p>
                        </Tab>
                      </Tabs>
                    </div>
                    <div className='w-2/5 relative'>
                      <div className='absolutes w-full'>
                        <div>
                          <div className="bg-cover h-[500px] bg-no-repeat bg-[url('/bg-1.jpg')]"></div>
                          <p className='text-center text-[#b4b2b2] text-xs mt-1.5'>
                            this is preview
                          </p>
                        </div>
                      </div>
                      
                      <div className='relative z-10 px-4 text-white'>
                        <div className='absolute bottom-5 w-11/12 mb-2'>
                          <div className="flex items-center justify-between mb-2">
                            <div className='rounded-lg overflow-hidden'>
                              <Image 
                                src="/thumbsimg.png"
                                alt="Background"
                                width={70}
                                height={50}
                                priority
                              />
                            </div>
                            <div>
                              <Button color="danger" variant="bordered" className='bg-[#0BB90B] rounded-lg max-w-[80px] !text-xs !h-[33px] text-white border-[#0BB90B]'>
                                <span className='text-lg'>+</span>Upload
                              </Button>
                            </div>
                          </div>
                          <div className='mb-4 pb-4 border-b border-solid border-[#cecece]'>
                            <h1 className='text-xl font-bold'>
                              Daraa & Arifin Weddings
                            </h1>
                            <span className='text-sm'>
                              13 Aug 2024
                            </span>
                          </div>
                          <p className='text-center text-sm'>
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

                    </div>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <Button className='!text-black max-w-[125px] rounded-lg !h-[35px] text-xs !font-semibold !text-white border-[#0BB90B] bg-[#0BB90B] mt-1.5'>
                    Save
                  </Button>
                  <Button variant="bordered" className='!text-[#000000] max-w-[100px] rounded-lg !h-[35px] text-xs !font-semibold border-[#DDDDDD] mt-1.5' onPress={onClose}>
                    Cancel
                  </Button>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModerationDashboardTabComponent;
