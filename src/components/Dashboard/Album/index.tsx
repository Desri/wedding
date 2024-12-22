'use client';
import {
  Button
} from "@nextui-org/react";

const AlbumDashboardComponent = () => {
  return (
    <>
      <div className="p-5 bg-white border-lg">
        <div className="flex items-center justify-between pb-4 border-b border-solid border-[#dddddd] mb-4">
          <div>
            <h3 className="text-sm font-semibold text-black">
              Beach Club Party with Colleagues
            </h3>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <p className="text-xs text-[#909090] font-semibold">
                78 photos of Unlimited Photos
              </p>
              <Button variant="bordered" className='!text-[#0BB90B] max-w-[155px] rounded-lg !h-[35px] text-xs !font-semibold border-[#0BB90B] mt-1.5'>
                Album Cover
              </Button>
              <Button variant="bordered" className='!text-[#0BB90B] max-w-[155px] rounded-lg !h-[35px] text-xs !font-semibold border-[#0BB90B] mt-1.5'>
                Download
              </Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-8 gap-5">
          <div className="bg-[#F2F2F2] h-[120px] rounded-lg"></div>
          <div className="bg-[#F2F2F2] h-[120px] rounded-lg"></div>
          <div className="bg-[#F2F2F2] h-[120px] rounded-lg"></div>
          <div className="bg-[#F2F2F2] h-[120px] rounded-lg"></div>
          <div className="bg-[#F2F2F2] h-[120px] rounded-lg"></div>
          <div className="bg-[#F2F2F2] h-[120px] rounded-lg"></div>
          <div className="bg-[#F2F2F2] h-[120px] rounded-lg"></div>
          <div className="bg-[#F2F2F2] h-[120px] rounded-lg"></div>
          <div className="bg-[#F2F2F2] h-[120px] rounded-lg"></div>
          <div className="bg-[#F2F2F2] h-[120px] rounded-lg"></div>
          <div className="bg-[#F2F2F2] h-[120px] rounded-lg"></div>
          <div className="bg-[#F2F2F2] h-[120px] rounded-lg"></div>
          <div className="bg-[#F2F2F2] h-[120px] rounded-lg"></div>
          <div className="bg-[#F2F2F2] h-[120px] rounded-lg"></div>
          <div className="bg-[#F2F2F2] h-[120px] rounded-lg"></div>
          <div className="bg-[#F2F2F2] h-[120px] rounded-lg"></div>
          <div className="bg-[#F2F2F2] h-[120px] rounded-lg"></div>
          <div className="bg-[#F2F2F2] h-[120px] rounded-lg"></div>
          <div className="bg-[#F2F2F2] h-[120px] rounded-lg"></div>
          <div className="bg-[#F2F2F2] h-[120px] rounded-lg"></div>
          <div className="bg-[#F2F2F2] h-[120px] rounded-lg"></div>
          <div className="bg-[#F2F2F2] h-[120px] rounded-lg"></div>
          <div className="bg-[#F2F2F2] h-[120px] rounded-lg"></div>
          <div className="bg-[#F2F2F2] h-[120px] rounded-lg"></div>
        </div>
      </div>
    </>
  );
};

export default AlbumDashboardComponent;
