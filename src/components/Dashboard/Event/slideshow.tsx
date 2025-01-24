'use client';
import React, { useContext, useState, useEffect } from 'react';
import {
  Button,
  Switch,
  Input
} from "@nextui-org/react";
import { ToastContainer, toast } from 'react-toastify';
import { AppContext } from "../../../../contexts/ContextProviders";
import { usePathname } from 'next/navigation';
import { updateSlideShow, uploadImage } from '../../../../services/client/event';

const SlideshowDashboardTabComponent = () => {
  const { state } = useContext(AppContext);
  const pathname = usePathname();
  const lastSegment = pathname.split('/').filter(Boolean).pop();
  const [loading, setLoading] = useState(false);

  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [preview, setPreview] = useState<any>(null);
  const [durationImage, setDurationImage] = useState('');
  const [durationVideo, setDurationVideo] = useState('');
  const [isSelectedQR, setIsSelectedQR] = useState(state.showDetailEvent.slideShow.hideSlideshowQR ? true : false);
  const [isHideVideoSound, setHideVideoSound] = useState(state.showDetailEvent.slideShow?.hideVideoSound ? true : false);

  const [formDataInput, setFormData] = useState({
    hideSlideshowQR: isSelectedQR,
    hideVideoSound: isHideVideoSound
  });

  /* eslint-disable */
  useEffect(() => {
    if (state.showDetailEvent) {
      setPreview(state.showDetailEvent.slideShow?.fileUrl)
      setDurationImage(state.showDetailEvent.slideShow?.durationImage)
      setDurationVideo(state.showDetailEvent.slideShow?.durationVideo)
      setIsSelectedQR(isSelectedQR)
      setHideVideoSound(state.showDetailEvent.slideShow?.hideVideoSound ? true : false)
    }
  }, []);

  const handleChangeDurationImage = (e: any) => {
    const { name, value } = e.target;
    setDurationImage(value)
  };

  const handleChangeDurationVideo = (e: any) => {
    const { name, value } = e.target;
    setDurationVideo(value)
  };

  const handleSubmit = () => {
    setLoading(true);
    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('upload_preset', 'ml_default');
    uploadImage({ formData })
    .then((res: any) => {
      const payload = {
        fileUrl: res.secure_url,
        originalFilename: res.original_filename,
        assetId: res.asset_id,
        publicId: res.public_id,
        eventId: lastSegment,
        durationImage: durationImage,
        durationVideo: durationVideo,
        hideSlideshowQR: isSelectedQR,
        hideVideoSound: isHideVideoSound
      }
      updateSlideShow({ payload })
      .then((res: any) => {
        console.log('Check', res)
        setLoading(false);
      })
      .catch((err: any) => {
        setLoading(false);
        console.log('Error', err)
      })
    })
    .catch((err: any) => {
      setLoading(false);
      console.log('Error', err)
    })
  };

  // Handle file selection
  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type === 'image/png' || file.type === 'image/jpeg') {
        setSelectedFile(file);

        // Generate a preview URL
        const previewUrl = URL.createObjectURL(file); // Membuat URL preview
        setPreview(previewUrl)
      } else {
        toast("Uppsss something went wrong!");
      } 
    }
  };

  const removeImage = () => {
    URL.revokeObjectURL(preview);
    setPreview(null);
    setSelectedFile(null);
  }
  /* eslint-enable */
  return (
    <>
      <div className='grid grid-cols-2 gap-14'>
        <div>
          <div className="text-black mb-8">
            <h3 className="text-sm font-semibold">
              Slideshow Background
            </h3>
            <div className='flex justify-between'>
              <div className='w-3/5'>
                <p className="text-xs text-[#909090] font-semibold mb-6">
                  Customize the background of the Slideshow.
                </p>
                <div className='flex items-center'>
                  <div>
                    <label
                      htmlFor="file-upload"
                      className="cursor-pointer text-[#0BB90B] w-[100px] rounded-lg h-[35px] text-xs font-semibold border-2 px-6 py-2 border-[#0BB90B] transition"
                    >
                      Upload
                    </label>
                    <input
                      id="file-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </div>
                  <div>
                    <p className='text-xs text-[#909090] ml-2'>
                      .JPG/.PNG Accepted
                    </p>
                  </div>
                </div>
              </div>
              <div className='w-2/5 pl-5'>
                {preview ? (
                  <div className='text-center w-[90px] h-[90px] rounded-lg border-solid border border-[#dddddd]'>
                    <img
                      src={preview}
                      alt="Preview"
                      className='object-cover h-full w-full rounded-lg mb-1.5'
                    />
                    <p className='text-xs text-[#909090] cursor-pointer underline' onClick={removeImage}>Remove</p>
                  </div>
                ) : (
                  <div className='h-[90px] w-[90px] bg-[#F7F7F7] rounded-lg'>
                    <img
                      src="/no-image.png"
                      alt="Preview"
                      className='object-cover relative top-6 mx-auto rounded-lg h-[40px] w-[40px]'
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
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
                    value={durationImage}
                    onChange={handleChangeDurationImage}
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
                    value={durationVideo}
                    onChange={handleChangeDurationVideo}
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
              <Switch name="hideSlideshowQR" defaultSelected={formDataInput.hideSlideshowQR} onValueChange={setIsSelectedQR} size="sm" />
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
              <Switch name="hideVideoSound" defaultSelected={formDataInput.hideVideoSound} onValueChange={setHideVideoSound} size="sm" />
            </div>
          </div>
          <Button
            className='!text-black max-w-[125px] rounded-lg !h-[35px] text-xs !font-semibold !text-white border-[#0BB90B] bg-[#0BB90B] mt-1.5'
            isDisabled={loading}
            onClick={handleSubmit}
          >
            {loading ? (
              <span>Loading...</span>
            ) : (
              <span>Update</span>
            )}
          </Button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default SlideshowDashboardTabComponent;
