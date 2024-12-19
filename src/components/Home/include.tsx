'use client';
import Image from 'next/image';

const IncludeComponent = () => {
  return (
    <>
      <div className="px-16 py-24">
        <div className="sm:w-5/6 px-4 mx-auto text-black">
          <div className='text-center'>
            <h2 className="text-3xl mb-2 font-bold">
              Whats included?
            </h2>
            <p>
              From digital albums to QR code templates - we have got it all covered
            </p>
          </div>
          <div className="grid grid-cols-4 gap-5 mt-14">
            <div className='bg-[#f8fafd] p-5 rounded-2xl'>
              <div className='overflow-hidden mb-2'>
                <Image 
                  src="/camera.png"
                  alt="Hands"
                  className="!relative !top-[-5px] !w-[45px] !h-[45px] float-right"
                  fill
                  priority
                />
              </div>
              <h3 className='text-lg font-bold mb-3 leading-6'>
                Guest-friendly Uploads
              </h3>
              <p className='text-sm'>
                Experience your event through your guest eyes by collecting every photo and video they take!
              </p>
            </div>
            <div className='bg-[#f8fafd] p-5 rounded-2xl'>
              <div className='overflow-hidden mb-2'>
                <Image 
                  src="/chat.png"
                  alt="Hands"
                  className="!relative !w-[35px] !h-[35px] float-right"
                  fill
                  priority
                />
              </div>
              <h3 className='text-lg font-bold mb-3 leading-6'>
                Text Posts & Captions
              </h3>
              <p className='text-sm'>
                Allow guests to share messages as decorated text posts or captions alongside their photos and videos.
              </p>
            </div>
            <div className='bg-[#f8fafd] p-5 rounded-2xl'>
              <div className='overflow-hidden mb-2'>
                <Image 
                  src="/rocket.png"
                  alt="Hands"
                  className="!relative !w-[45px] !h-[45px] float-right"
                  fill
                  priority
                />
              </div>
              <h3 className='text-lg font-bold mb-3 leading-6'>
                Instant Download
              </h3>
              <p className='text-sm'>
                Access all your event uploads with a single click, ready for download.
              </p>
            </div>
            <div className='bg-[#f8fafd] p-5 rounded-2xl'>
              <div className='overflow-hidden mb-2'>
                <Image 
                  src="/tv.png"
                  alt="Hands"
                  className="!relative !top-[-5px] !w-[45px] !h-[45px] float-right"
                  fill
                  priority
                />
              </div>
              <h3 className='text-lg font-bold mb-3 leading-6'>
                Interactive Live Slideshow
              </h3>
              <p className='text-sm'>
                Bring uploads to life on a dynamic Slideshow-ideal for engaging guests and showcasing memories.
              </p>
            </div>
            <div className='bg-[#f8fafd] p-5 rounded-2xl'>
              <div className='overflow-hidden mb-2'>
                <Image 
                  src="/camera.png"
                  alt="Hands"
                  className="!relative !top-[-5px] !w-[45px] !h-[45px] float-right"
                  fill
                  priority
                />
              </div>
              <h3 className='text-lg font-bold mb-3 leading-6'>
                No Apps Required
              </h3>
              <p className='text-sm'>
                FotoSlide works on any phone directly through the browser, no installation needed!
              </p>
            </div>
            <div className='bg-[#f8fafd] p-5 rounded-2xl'>
              <div className='overflow-hidden mb-2'>
                <Image 
                  src="/chat.png"
                  alt="Hands"
                  className="!relative !w-[35px] !h-[35px] float-right"
                  fill
                  priority
                />
              </div>
              <h3 className='text-lg font-bold mb-3 leading-6'>
                Ready Print QR Code
              </h3>
              <p className='text-sm'>
                Downloaded QR Code, ready for printing and easy sharing!
              </p>
            </div>
            <div className='bg-[#f8fafd] p-5 rounded-2xl'>
              <div className='overflow-hidden mb-2'>
                <Image 
                  src="/rocket.png"
                  alt="Hands"
                  className="!relative !w-[45px] !h-[45px] float-right"
                  fill
                  priority
                />
              </div>
              <h3 className='text-lg font-bold mb-3 leading-6'>
                Customize Freely
              </h3>
              <p className='text-sm'>
                Tailor your album with advanced options for a unique and personal touch
              </p>
            </div>
            <div className='bg-[#f8fafd] p-5 rounded-2xl'>
              <div className='overflow-hidden mb-2'>
                <Image 
                  src="/tv.png"
                  alt="Hands"
                  className="!relative !top-[-5px] !w-[45px] !h-[45px] float-right"
                  fill
                  priority
                />
              </div>
              <h3 className='text-lg font-bold mb-3 leading-6'>
                Secure & Control
              </h3>
              <p className='text-sm'>
                Stream every upload made by your guests on a stunning slideshow that updates in real time. Display on TVs, projectors and more.
              </p>
            </div>
            <div className='bg-[#f8fafd] p-5 rounded-2xl'>
              <div className='overflow-hidden mb-2'>
                <Image 
                  src="/camera.png"
                  alt="Hands"
                  className="!relative !top-[-5px] !w-[45px] !h-[45px] float-right"
                  fill
                  priority
                />
              </div>
              <h3 className='text-lg font-bold mb-3 leading-6'>
                Engage with Memories
              </h3>
              <p className='text-sm'>
                Add captions directly to uploads. Organize memories with hastags or start photo challenges!
              </p>
            </div>
            <div className='bg-[#f8fafd] p-5 rounded-2xl'>
              <div className='overflow-hidden mb-2'>
                <Image 
                  src="/rocket.png"
                  alt="Hands"
                  className="!relative !w-[45px] !h-[45px] float-right"
                  fill
                  priority
                />
              </div>
              <h3 className='text-lg font-bold mb-3 leading-6'>
                Extremely Easy to Use
              </h3>
              <p className='text-sm'>
                Guests can easily join by clicking the album link or scanning a QR code. No app downloads or
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IncludeComponent;
