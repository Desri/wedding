'use client';
import {
  Button,
  Switch,
  Input
} from "@nextui-org/react";

const SlideshowDashboardTabComponent = () => {
  return (
    <>
      <div className="text-black mb-2">
        <h3 className="text-sm font-semibold">
          Slideshow Background
        </h3>
        <span className="text-xs text-[#909090] font-semibold">
          Customize the background of the Slideshow.
        </span>
      </div>
      <Button variant="bordered" className='!text-[#0BB90B] max-w-[155px] rounded-lg !h-[35px] text-xs !font-semibold border-[#0BB90B] mt-1.5'>
        Edit Welcome Screen
      </Button>
      <div className='mt-8'>
        <div className="text-black mb-2">
          <h3 className="text-sm font-semibold">
            Slideshow Duration
          </h3>
          <span className="text-xs text-[#909090] font-semibold">
            Adjust how long each media is displayed in the Slideshow
          </span>
        </div>
        <div className="flex items-center gap-8">
          <div>
            <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
              <Input
                key="image"
                radius="sm"
                className="box-duration"
                description="seconds"
                label="Image"
                labelPlacement="outside-left"
                placeholder="8"
                type="text"
              />
            </div>
          </div>
          <div>
            <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
              <Input
                key="video"
                radius="sm"
                className="box-duration"
                description="seconds"
                label="Video"
                labelPlacement="outside-left"
                placeholder="12"
                type="text"
              />
            </div>
          </div>
        </div>
        
      </div>
      <div className='mt-8'>
        <div className="flex gap-8">
          <div className="text-black mb-2">
            <h3 className="text-sm font-semibold">
              Hide Slideshow QR Code
            </h3>
            <span className="text-xs text-[#909090] font-semibold">
              Turn on to remove the QR code from the Slideshow page.
            </span>
          </div>
          <Switch size="sm" />
        </div>
      </div>
      <div className='mt-8 mb-3'>
        <div className="flex gap-8">
          <div className="text-black mb-2">
            <h3 className="text-sm font-semibold">
              Slideshow Video Sound
            </h3>
            <span className="text-xs text-[#909090] font-semibold">
              This will enable videos sound when played in Slideshow.
            </span>
          </div>
          <Switch size="sm" />
        </div>
      </div>
      <Button className='!text-black max-w-[125px] rounded-lg !h-[35px] text-xs !font-semibold !text-white border-[#0BB90B] bg-[#0BB90B] mt-1.5'>
        Update
      </Button>
    </>
  );
};

export default SlideshowDashboardTabComponent;
