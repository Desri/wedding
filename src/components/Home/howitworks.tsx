'use client';
import { Button } from '@nextui-org/react';

const HowItWorkComponent = () => {
  return (
    <>
      <div className="px-16 py-32">
        <div className="sm:w-3/5 px-4 mx-auto text-black">
          <h2 className="text-center text-3xl mb-7 font-bold">
            How does it work?
          </h2>
          <div className="mt-16">
            <ul>
              <li className='mb-16'>
                <p className='text-[#0bb90b] mb-1'>
                  Step 1
                </p>
                <h2 className='text-2xl font-bold mb-3'>
                  Create your event
                </h2>
                <p>
                  Create a private digital album for guests to add photos, videos, and messages. Customize the title, date, colors, and backgrounds to make it your own!
                </p>
                <Button variant="bordered" className='rounded-lg mt-6 w-36 h-10 bg-[#0bb90b] text-white border-green-500'>
                  Create Your Event
                </Button>
              </li>
              <li className='mb-16'>
                <p className='text-[#0bb90b] mb-1'>
                  Step 2
                </p>
                <h2 className='text-2xl font-bold mb-3'>
                  Share it with your guests
                </h2>
                <p>
                  Your guests can easily view or contribute photos and videos to your digital album by scanning the unique QR code or using the album URL-before, during, and after your event!
                </p>
              </li>
              <li className='mb-16'>
                <p className='text-[#0bb90b] mb-1'>
                  Step 3
                </p>
                <h2 className='text-2xl font-bold mb-3'>
                  Display it all on a live slideshow
                </h2>
                <p>
                  Up for some fun? Add to the event a Live Photo Wall (slideshow) that updates in real-time with every photo and video added by you or your guests. Easily display it on projectors, TVs, tablets or wherever you like.
                </p>
                <Button variant="bordered" className='rounded-lg mt-6 w-36 h-10 bg-[#0bb90b] text-white border-green-500'>
                  See Live Example
                </Button>
              </li>
              <li className='mb-16'>
                <p className='text-[#0bb90b] mb-1'>
                  Step 4
                </p>
                <h2 className='text-2xl font-bold mb-3'>
                  Enjoy all captured moments
                </h2>
                <p className='mb-2'>
                  At any given moment you can view all the photos and videos captured by your guests in your own digital album. Revisit and cherish those unforgettable memories!
                </p>
                <p>
                  Every moment is captured in a stunning digital album. Download everything as a zipped folder in a click.
                </p>
                <Button variant="bordered" className='rounded-lg mt-6 w-36 h-10 bg-[#0bb90b] text-white border-green-500'>
                  Create Your Event
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorkComponent;
