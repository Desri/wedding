'use client';
import React, { useState } from 'react';
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
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className='p-7'>
                <div className="text-black mb-7">
                  <h3 className="text-sm font-semibold">
                    Welcome Screen Settings
                  </h3>
                  <span className="text-xs text-[#909090]">
                    Set up a welcome screen that appears once for first-time guests.
                  </span>
                  <Tabs aria-label="Options" variant="underlined" className="tabs-event !ml-0 !mt-5">
                    <Tab key="cover" title="Cover">
                      <div className="text-black mb-8">
                        <h3 className="text-sm">
                          Title
                        </h3>
                        <span className="text-xs text-[#909090]">
                          What is the event title?
                        </span>
                        <Input type="text" radius="sm" className="mt-3 w-96 border border-solid border-[#dddddd] rounded-md" />
                      </div>

                      <div className="text-black mb-8">
                        <h3 className="text-sm">
                          When does it happen?
                        </h3>
                        <span className="text-xs text-[#909090]">
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
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    </Tab>
                  </Tabs>
                </div>
                <div className='flex items-center gap-3'>
                  <Button className='!text-black max-w-[125px] rounded-lg !h-[35px] text-xs !font-semibold !text-white border-[#0BB90B] bg-[#0BB90B] mt-1.5'>
                    Save
                  </Button>
                  <Button variant="bordered" className='!text-[#000000] max-w-[100px] rounded-lg !h-[37px] text-xs !font-semibold border-[#DDDDDD] mt-1.5' onPress={onClose}>
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
