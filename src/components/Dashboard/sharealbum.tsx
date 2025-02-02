'use client';
import { Button, Input } from '@nextui-org/react';
import { useQRCode } from 'next-qrcode';

const ShareAlbumDashboardComponent = ({
  data
}: {
  data?: any; // eslint-disable-next-line @typescript-eslint/no-explicit-any
}) => {
  const { Image } = useQRCode();
  return (
    <>
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-lg text-black font-semibold mb-3">
          Shared Album {data?.title}
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
            <p className="text-xs text-[#909090] mb-8 mt-3">
              The digital album lets your guests upload new photos or view existing ones. Share it with your guests via a direct link or using its unique QR code (print it or display it digitally).
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
            <div className='table mx-auto'>
              <Image
                text={`${process.env.NEXT_PUBLIC_BASE_URL}/${data?._id}`}
                options={{
                  type: 'image/jpeg',
                  quality: 0.3,
                  errorCorrectionLevel: 'M',
                  margin: 3,
                  scale: 4,
                  width: 120,
                  color: {
                    dark: '#000000',
                    light: '#FFFFFF',
                  },
                }}
              />
            </div>
            <Button className='!text-black rounded-lg !h-[37px] text-xs !font-semibold !text-white border-[#0BB90B] bg-[#0BB90B] mt-1.5'>
              DOWNLOAD QR CODE
            </Button>
          </div>
          
          <div className="text-center">
            <div className='bg-[#f2f2f2] pt-[9px] p-2 w-[95px] mx-auto border border-solid border-[#dddddd]'>
              <Image
                text={`${process.env.NEXT_PUBLIC_BASE_URL}/${data?._id}`}
                options={{
                  type: 'image/jpeg',
                  quality: 0.3,
                  errorCorrectionLevel: 'M',
                  margin: 3,
                  scale: 4,
                  width: 600,
                  color: {
                    dark: '#000000',
                    light: '#f2f2f2',
                  },
                }}
              />
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

export default ShareAlbumDashboardComponent;
