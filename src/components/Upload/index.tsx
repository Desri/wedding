'use client';
// import Image from 'next/image';
// import {Button} from "@nextui-org/react";
import GalleryComponent from '../SmallWeb/gallery';
const UploadComponent = () => {

  // const bottomRef = useRef<HTMLDivElement>(null);
  // const scrollToBottom = () => {
  //   bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  // };

  return (
    <>
      <div className='bg-[#f8fafd]'>
        <GalleryComponent />
      </div>
    </>
  );
};

export default UploadComponent;
