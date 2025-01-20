'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import {
  Button
} from "@nextui-org/react";

const ListAlbumImageDashboardComponent = ({
  listAlbumImage
}: {
  listAlbumImage?: any; // eslint-disable-next-line @typescript-eslint/no-explicit-any
}) => {

  const [images, setImages] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);

  /* eslint-disable */
  const handleImageChange = (e: any) => {
    const files = Array.from(e.target.files);

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

  const handleUpload = async () => {
    const formData = new FormData();

    // Tambahkan file ke formData
    images.forEach((image) => {
      formData.append("images", image);
    });

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Upload successful");
      } else {
        console.error("Upload failed");
      }
    } catch (error) {
      console.error("Error uploading images:", error);
    }
  };
  /* eslint-enable */
  return (
    <>
      <div className="p-5 bg-white border-lg rounded-lg">
        <div className="flex items-center justify-between pb-4 border-b border-solid border-[#dddddd] mb-4">
          <div>
            <div className="flex items-center gap-3">
              <div>
                <h3 className="text-sm font-semibold text-black">
                  {listAlbumImage.data.title}
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
                <Button className='!text-black max-w-[125px] rounded-lg !h-[35px] text-xs !font-semibold !text-white border-[#0BB90B] bg-[#0BB90B]'>
                  Upload
                </Button>
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
          <div className="bg-[#F2F2F2] h-[100px] sm:h-[120px] rounded-lg"></div>
          <div className="bg-[#F2F2F2] h-[100px] sm:h-[120px] rounded-lg"></div>
          <div className="bg-[#F2F2F2] h-[100px] sm:h-[120px] rounded-lg"></div>
          <div className="bg-[#F2F2F2] h-[100px] sm:h-[120px] rounded-lg"></div>
          <div className="bg-[#F2F2F2] h-[100px] sm:h-[120px] rounded-lg"></div>
          <div className="bg-[#F2F2F2] h-[100px] sm:h-[120px] rounded-lg"></div>
          <div className="bg-[#F2F2F2] h-[100px] sm:h-[120px] rounded-lg"></div>
          <div className="bg-[#F2F2F2] h-[100px] sm:h-[120px] rounded-lg"></div>
          <div className="bg-[#F2F2F2] h-[100px] sm:h-[120px] rounded-lg"></div>
          <div className="bg-[#F2F2F2] h-[100px] sm:h-[120px] rounded-lg"></div>
          <div className="bg-[#F2F2F2] h-[100px] sm:h-[120px] rounded-lg"></div>
          <div className="bg-[#F2F2F2] h-[100px] sm:h-[120px] rounded-lg"></div>
          <div className="bg-[#F2F2F2] h-[100px] sm:h-[120px] rounded-lg"></div>
          <div className="bg-[#F2F2F2] h-[100px] sm:h-[120px] rounded-lg"></div>
          <div className="bg-[#F2F2F2] h-[100px] sm:h-[120px] rounded-lg"></div>
          <div className="bg-[#F2F2F2] h-[100px] sm:h-[120px] rounded-lg"></div>
          <div className="bg-[#F2F2F2] h-[100px] sm:h-[120px] rounded-lg"></div>
          <div className="bg-[#F2F2F2] h-[100px] sm:h-[120px] rounded-lg"></div>
          <div className="bg-[#F2F2F2] h-[100px] sm:h-[120px] rounded-lg"></div>
          <div className="bg-[#F2F2F2] h-[100px] sm:h-[120px] rounded-lg"></div>
          <div className="bg-[#F2F2F2] h-[100px] sm:h-[120px] rounded-lg"></div>
          <div className="bg-[#F2F2F2] h-[100px] sm:h-[120px] rounded-lg"></div>
          <div className="bg-[#F2F2F2] h-[100px] sm:h-[120px] rounded-lg"></div>
          <div className="bg-[#F2F2F2] h-[100px] sm:h-[120px] rounded-lg"></div>
        </div>
      </div>
    </>
  );
};

export default ListAlbumImageDashboardComponent;
