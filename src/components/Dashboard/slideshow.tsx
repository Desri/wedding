'use client';
import { Button, Input, Link } from '@nextui-org/react';
import { useQRCode } from 'next-qrcode';
import { Avatar } from "@heroui/avatar";

const SlideShowDashboardComponent = () => {

  const { Image } = useQRCode();

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
            <p className="text-xs text-[#909090] mb-3 mt-3 pr-8">
              Every upload to your digital album automatically appears on your SlideShow. Connect it to video projectors, TVs, or anywhere your guests can easily find it.
            </p>
          </div>
          <div>
            <Button className='!text-white rounded-lg !h-[40px] text-xs !font-semibold bg-[#0BB90B]'>
              OPEN
            </Button>
          </div>
        </div>
        
        <div className='bg-black rounded-xl px-8 pb-8 pt-4'>
          <div>
            <img src="/small-logo.png" className='mx-auto' alt="small logo" />
          </div>
          <div className='mb-2'>
            <Avatar isDisabled src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
          </div>
          <div className="sm:flex items-center gap-8 mx-auto w-max">
            <div className='mb-7 sm:mb-0'>
              <p className='text-center mb-2 text-[#e8e8e8] text-[15px]'>
                Scan to view or Add photos!
              </p>
              <div className='table mx-auto'>
                <Image
                  text={'https://github.com/bunlong/next-qrcode'}
                  options={{
                    type: 'image/jpeg',
                    quality: 0.3,
                    errorCorrectionLevel: 'M',
                    margin: 1,
                    scale: 4,
                    width: 110,
                    color: {
                      dark: '#000000',
                      light: '#FFFFFF',
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-between mt-6'>
          <div>
            <div className='flex items-center'>
              <div className='mr-7'>
                <p className='text-[#909090] text-sm'>
                  Display on
                </p>
              </div>
              <div>
                <img src="/projector.png" alt="projector" />
              </div>
              <div className='mx-4'>
                <img src="/computer.png" alt="computer" />
              </div>
              <div>
                <img src="/laptop.png" alt="laptop" />
              </div>
            </div>
          </div>
          <div>
            <Link
              href='#'
              className="text-[#0BB90B] font-semibold text-sm mt-1"
            >
              How to do it?
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideShowDashboardComponent;
