import Image from 'next/image';
import HeaderDashboardComponent from "@/components/Dashboard/header";
import MenuDashboardComponent from "@/components/Dashboard/menu";
import ShareAlbumDashboardComponent from '@/components/Dashboard/sharealbum';
import SlideShowDashboardComponent from '@/components/Dashboard/slideshow';

export default function Dashboard() {
  return (
    <>
      <HeaderDashboardComponent />
      <div className="flex">
        <MenuDashboardComponent />
        <div className="sm:w-10/12 bg-[#f8fafd] h-screen">
          <div className="p-8">
            <div className="flex items-center gap-4 mb-8">
              <Image 
                src="/thumb.png"
                alt="Thumb"
                className="!relative !w-[64px]"
                fill
                priority
              />
              <div>
                <div className='text-black'>
                  <h2 className='text-xl sm:text-2xl mb-1 sm:mb-0'>
                    Dara & Arifin Weddings
                  </h2>
                  <p className='text-xs font-bold'>
                    Event start: 13 Aug 2024 <span className='bg-[#CEFFCE] font-medium py-1 px-1.5 rounded ml-1'>Plan: Lite</span>
                  </p>
                </div>
              </div>
            </div>
            <div className='grid sm:grid-cols-2 gap-8'>
              <div>
                <ShareAlbumDashboardComponent />
              </div>
              <div>
                <SlideShowDashboardComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
