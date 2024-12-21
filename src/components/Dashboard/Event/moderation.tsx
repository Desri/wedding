'use client';
import {
  Button,
  Modal,
  ModalContent,
  ModalBody,
  Input,
  useDisclosure
} from "@nextui-org/react";

const ModerationDashboardTabComponent = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
    <>
      <div className="text-black mb-2">
        <h3 className="text-sm font-semibold">
          Welcome Screen
        </h3>
        <span className="text-xs text-[#909090] font-semibold">
          Set up an introductory screen for guests’ first visit, with a form to collect their info.
        </span>
      </div>
      <Button variant="bordered" className='!text-[#0BB90B] max-w-[155px] rounded-lg !h-[35px] text-xs !font-semibold border-[#0BB90B] mt-1.5' onPress={onOpen}>
        Edit Welcome Screen
      </Button>
      <div className='mt-8'>
        <div className="text-black mb-2">
          <h3 className="text-sm font-semibold">
            Manually Approve Guest Uploads
          </h3>
          <span className="text-xs text-[#909090] font-semibold">
            Manually approve uploads made by guests before it is shown on your Slideshow and Digital Album. <span className="text-[#0BB90B]">More Info</span>
          </span>
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
        <div className="text-black mb-2">
          <h3 className="text-sm font-semibold">
            Disable Guests Download
          </h3>
          <span className="text-xs text-[#909090] font-semibold">
            Hide the download button to prevent guests from downloading photos/videos in the album page.
          </span>
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
                    Invite
                  </h3>
                  <span className="text-xs text-[#909090]">
                    Share this link with whomever you like:
                  </span>
                  <Input
                    radius="sm"
                    className="mt-3 w-96 border border-solid border-[#dddddd] rounded-md"
                    labelPlacement="outside"
                    placeholder="fotoslide.com/nu38hy"
                    endContent={
                      <p className='text-[#0BB90B] text-sm'>
                        Copy
                      </p>
                    }
                    type="text"
                  />
                </div>
                <Button variant="bordered" className='!text-[#000000] max-w-[100px] rounded-lg !h-[37px] text-xs !font-semibold border-[#DDDDDD] mt-1.5' onPress={onClose}>
                  Cancel
                </Button>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModerationDashboardTabComponent;
