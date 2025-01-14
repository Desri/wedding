'use client';
import React, { useState } from 'react';
import {
  Input,
  Button,
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure
} from "@nextui-org/react";

const AppearanceDashboardTabComponent = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [captionTheme, setCaptionTheme] = useState('');

  /* eslint-disable */
  const selectTheme = (newValue: any) => {
    setCaptionTheme(newValue);
  };
  /* eslint-enable */
  return (
    <>
      <div className='grid grid-cols-2 gap-5'>
        <div>
          <div className="text-black mb-8">
            <h3 className="text-sm font-semibold">
              Event Logo
            </h3>
            <p className="text-xs text-[#909090] font-semibold sm:mr-16">
              Brand your event with a logo that will be publically shown through out the event. For best results, use square photos (1:1).
            </p>
          </div>
          <div className="text-black mb-8">
            <h3 className="text-sm font-semibold">
              Display Language
            </h3>
            <span className="text-xs text-[#909090] font-semibold">
              Localize the experience according your audience language.
            </span>
            <Input type="text" radius="sm" placeholder='English' className="mt-3 w-96 border border-solid border-[#dddddd] rounded-md" />
          </div>

          <div className="text-black mb-8">
            <h3 className="text-sm font-semibold">
              Caption Theme
            </h3>
            <p className="text-xs text-[#909090] font-semibold sm:mr-16">
              Choose a theme color for your brand. We’ll use that throughout the public pages (Photo Wall, Album, etc.)
            </p>
          </div>
        </div>
        <div>
          <div className="text-black mb-8">
            <h3 className="text-sm font-semibold">
              Caption Theme
            </h3>
            <span className="text-xs text-[#909090] font-semibold">
              Change the theme color of the photo/video caption (if it has one)
            </span>
            <div className='flex items-center gap-5 mt-1.5'>
              <div
                className={`hover:bg-[#0BB90B17] border-2 border-solid hover:border-[#0BB90B] text-center py-2 px-2 rounded-lg w-28 cursor-pointer ${captionTheme === 'light' ? 'bg-[#0BB90B17] border-[#0BB90B]' : 'border-[#F7F7F7] bg-[#F7F7F7]'}`}
                onClick={() => selectTheme('light')}
              >
                <h2 className='text-black text-sm font-semibold'>
                  Light
                </h2>
              </div>
              <div
                className={`hover:bg-[#0BB90B17] border-2 border-solid hover:border-[#0BB90B] text-center py-2 px-2 rounded-lg w-28 cursor-pointer ${captionTheme === 'dark' ? 'bg-[#0BB90B17] border-[#0BB90B]' : 'border-[#F7F7F7] bg-[#F7F7F7]'}`}
                onClick={() => selectTheme('dark')}
              >
                <h2 className='text-black text-sm font-semibold'>
                  Dark
                </h2>
              </div>
            </div>
          </div>

          <div className="text-black mb-2">
            <h3 className="text-sm font-semibold">
              Text Post Backgrounds
            </h3>
            <span className="text-xs text-[#909090] font-semibold">
              Customize the backgrounds that can be used for uploading Text Posts.
            </span>
          </div>
          <Button variant="bordered" className='!text-[#0BB90B] max-w-[155px] rounded-lg !h-[35px] text-xs !font-semibold border-[#0BB90B] mt-1.5' onPress={onOpen}>
            Edit Background
          </Button>
        </div>
      </div>
      <Modal isOpen={isOpen} size="3xl" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className='p-7'>
                <div className="text-black mb-7">
                  <h3 className="text-sm font-semibold mb-1">
                    Text Post Background
                  </h3>
                  <p className="text-xs text-[#909090] font-semibold">
                    Choose which backgrounds are available for guests to choose from when uploading a Text Post.
                  </p>
                  
                </div>
                <div className='flex gap-3'>
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
      <Button className='!text-black max-w-[125px] rounded-lg !h-[35px] text-xs !font-semibold !text-white border-[#0BB90B] bg-[#0BB90B] mt-1.5'>
        Update
      </Button>
    </>
  );
};

export default AppearanceDashboardTabComponent;
