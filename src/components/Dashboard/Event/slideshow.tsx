'use client';
import React, { useContext, useState, useEffect } from 'react';
import {
  Button,
  Switch,
  Input
} from "@nextui-org/react";
import { AppContext } from "../../../../contexts/ContextProviders";

const SlideshowDashboardTabComponent = () => {
  const { state } = useContext(AppContext);

  const [formData, setFormData] = useState({
    durationImage: '',
    durationVideo: '',
    hideSlideshowQR: state.showDetailEvent.slideShow?.hideSlideshowQR,
    hideVideoSound: state.showDetailEvent.slideShow?.hideVideoSound
  });
  /* eslint-disable */
  useEffect(() => {
    if (state.showDetailEvent) {
      setFormData((prev) => ({
        ...prev,
        durationImage: state.showDetailEvent.slideShow?.durationImage,
        durationVideo: state.showDetailEvent.slideShow?.durationVideo,
        hideSlideshowQR: state.showDetailEvent.slideShow?.hideSlideshowQR,
        hideVideoSound: state.showDetailEvent.slideShow?.hideVideoSound,
      }));
    }
  }, [state.showDetailEvent]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  /* eslint-enable */
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
                name="durationImage"
                value={formData.durationImage}
                onChange={handleChange}
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
                name="durationVideo"
                value={formData.durationVideo}
                onChange={handleChange}
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
          <Switch name="hideSlideshowQR" defaultSelected={formData.hideSlideshowQR} onChange={handleChange} size="sm" />
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
          <Switch name="hideVideoSound" defaultSelected={formData.hideVideoSound} onChange={handleChange} size="sm" />
        </div>
      </div>
      <Button className='!text-black max-w-[125px] rounded-lg !h-[35px] text-xs !font-semibold !text-white border-[#0BB90B] bg-[#0BB90B] mt-1.5'>
        Update
      </Button>
    </>
  );
};

export default SlideshowDashboardTabComponent;
