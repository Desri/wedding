'use client';
import { useContext } from 'react';
import { Link } from '@nextui-org/react';
import Image from 'next/image';
import {
  Button
} from "@nextui-org/react";
import { AppContext } from '../../../../contexts/ContextProviders';

const DetailAlbumDashboardComponent = () => {
  const { state } = useContext(AppContext);
  return (
    <>
      {state.showListEvent.length > 0 && (
        <div className='flex items-center gap-4 mb-7'>
          {state.showListEvent?.map((item) => (
            <div key={item._id}>
              <Link
                href={`/dashboard/album/${item._id}`}
              >
                <div className='bg-white w-[140px] h-[150px] rounded-xl border-2 border-[#0BB90B]'>
                  {item.appearance?.fileUrl ? (
                    <img
                      src={item.appearance?.fileUrl}
                      alt="Preview"
                      className='object-cover h-[110px] w-full rounded-t-xl mb-0.5 h-full w-full'
                    />
                  ) : (
                    <div className='h-[110px] bg-[#F7F7F7] rounded-t-xl'>
                      <img
                        src="/no-image.png"
                        alt="Preview"
                        className='object-cover relative top-9 mx-auto rounded-t-xl h-[40px]'
                      />
                    </div>
                  )}
                  <p className='text-xs font-semibold text-black p-2'>
                    {item.title}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
      <div className="p-5 bg-white border-lg rounded-lg">
        <div className="flex items-center justify-between pb-4 border-b border-solid border-[#dddddd] mb-4">
          <div>
            <div className="flex items-center gap-3">
              <div>
                <h3 className="text-sm font-semibold text-black">
                  Beach Club Party with Colleagues
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

export default DetailAlbumDashboardComponent;
