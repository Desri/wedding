'use client';
import { Button, Input } from '@nextui-org/react';

const SlideShowDashboardComponent = () => {
  return (
    <>
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-lg text-black font-semibold mb-3">
          SlideShow
        </h2>
        <div className="flex gap-4 mb-4">
          <div>
            <Input
              radius="sm"
              labelPlacement="outside"
              placeholder="fotoslide.com/nu38hy"
              endContent={
                <p className='text-[#0BB90B] text-sm'>
                  Copy
                </p>
              }
              type="text"
            />
            <p className="text-xs text-[#909090] mb-8 mt-3 pr-8">
              Every upload to your digital album automatically appears on your SlideShow. Connect it to video projectors, TVs, or anywhere your guests can easily find it.
            </p>
          </div>
          <div>
            <Button className='!text-white rounded-lg !h-[40px] text-xs !font-semibold bg-[#0BB90B]'>
              OPEN
            </Button>
          </div>
        </div>
        
        <div className="sm:flex items-center gap-8 mx-auto w-max">
          <div className='mb-7 sm:mb-0'>
            <img alt="QR code for shared album" className="mx-auto mb-4 w-24 h-24" height="100" src="/barcode.png" width="100"/>
            <Button className='!text-black rounded-lg !h-[37px] text-xs !font-semibold !text-white border-[#0BB90B] bg-[#0BB90B] mt-1.5'>
              DOWNLOAD QR CODE
            </Button>
          </div>
          
          <div className="text-center">
            <div className='bg-[#f2f2f2] p-2 w-[95px] mx-auto border border-solid border-[#dddddd]'>
              <img alt="QR card" className="mx-auto w-16 h-16 mb-2" height="60" src="/small-barcode.png" width="60"/>
            </div>
            
            <p className="text-gray-600 text-xs mt-2 mb-1.5 underline cursor-pointer">
              Edit Card
            </p>
            <Button variant="bordered" className='rounded-lg !font-semibold !h-[37px] text-xs !text-[#0BB90B] border-[#0BB90B]'>
              DOWNLOAD QR CARD
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideShowDashboardComponent;
