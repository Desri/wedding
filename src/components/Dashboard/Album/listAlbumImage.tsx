'use client';
import React, { useContext, useState } from 'react';
import Image from 'next/image';
import {
  Button
} from "@nextui-org/react";
import { AppContext } from '../../../../contexts/ContextProviders';

const ListAlbumImageDashboardComponent = () => {
  const { state } = useContext(AppContext);

  const [images, setImages] = useState<File[]>([]);;
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  /* eslint-disable */
  const handleImageChange = (e: any) => {
    const files = Array.from(e.target.files || []) as File[];

    // Simpan file gambar ke state
    setImages((prevImages) => [...prevImages, ...files]);

    // Generate URL untuk preview
    const newPreviewUrls = files.map((file) => URL.createObjectURL(file));
    setPreviewUrls((prevUrls) => [...prevUrls, ...newPreviewUrls]);
  };

  const handleRemoveImage = (index: any) => {
    // Hapus gambar dari state
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    setPreviewUrls((prevUrls) => prevUrls.filter((_, i) => i !== index));
  };

  // const handleUpload = async () => {
  //   const formData = new FormData();

  //   images.forEach((image) => {
  //     formData.append("images", image);
  //   });

  //   try {
  //     const response = await fetch("/api/upload", {
  //       method: "POST",
  //       body: formData,
  //     });

  //     if (response.ok) {
  //       console.log("Upload successful");
  //     } else {
  //       console.error("Upload failed");
  //     }
  //   } catch (error) {
  //     console.error("Error uploading images:", error);
  //   }
  // };
  /* eslint-enable */
  return (
    <>
      <div className="p-5 bg-white border-lg rounded-lg">
        <div className="flex items-center justify-between pb-4 border-b border-solid border-[#dddddd] mb-4">
          <div>
            <div className="flex items-center gap-3">
              <div>
                <h3 className="text-sm font-semibold text-black">
                  {state.showDetailEvent?.title}
                </h3>
              </div>
              <div className='mr-6 cursor-pointer'>
                <Image 
                  src="/edit-text.png"
                  alt="edit"
                  width={16}
                  height={23}
                  priority
                />
              </div>
              <div>
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
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </div>
                  <div>
                    <p className='text-xs text-[#909090] ml-2'>
                      .JPG/.PNG Accepted
                    </p>
                  </div>
                </div>
                {/* <Button className='!text-black max-w-[125px] rounded-lg !h-[35px] text-xs !font-semibold !text-white border-[#0BB90B] bg-[#0BB90B]'>
                  Upload
                </Button> */}
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <p className="text-xs text-[#909090] font-semibold">
                78 photos of Unlimited Photos
              </p>
              <Button variant="bordered" className='!text-[#0BB90B] max-w-[155px] rounded-lg !h-[35px] text-xs !font-semibold border-[#0BB90B]'>
                Album Cover
              </Button>
              <Button variant="bordered" className='!text-[#0BB90B] max-w-[155px] rounded-lg !h-[35px] text-xs !font-semibold border-[#0BB90B]'>
                Download
              </Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-8 gap-2 sm:gap-5">
          {previewUrls.map((url, index) => (
            <div key={index} className="bg-[#F2F2F2] h-[100px] sm:h-[120px] rounded-lg relative overflow-hidden">
              <img
                src={url}
                alt={`Preview ${index}`}
                style={{ objectFit: "cover" }}
                className='h-full w-full'
              />
              <button
                onClick={() => handleRemoveImage(index)}
                className='absolute top-1.5 right-1.5 w-[24px] h-[24px] rounded-2xl cursor-pointer text-white bg-[#949494]'
              >
                <span className='relative top-[-1px] left-[0.5px]'>
                  &times;
                </span>
              </button>
            </div>
          ))}
        </div>
        {previewUrls.length === 0 && (
          <div className='text-center py-12 sm:py-16'>
            <img
              src="/no-image.png"
              alt="Preview"
              className='object-cover mx-auto h-[60px] w-[60px] mb-3'
            />
            <p className="font-semibold">
              No album!
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default ListAlbumImageDashboardComponent;
