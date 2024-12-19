'use client';
import Image from 'next/image';
import { Button } from '@nextui-org/react';

const HowItWorkComponent = () => {
  return (
    <>
      <div className="px-4 sm:px-16 pt-20">
        <div className="sm:w-3/5 px-4 mx-auto text-black">
          <div className='mb-8'>
            <Image 
              src="/hearth.png"
              alt="Hands"
              className="!relative !top-[-5px] !w-[50px] mx-auto"
              fill
              priority
            />
          </div>
          <h2 className="text-center text-3xl mb-7 font-bold">
            How does it work?
          </h2>
          <div className="mt-16">
            <ul>
              <li className='mb-16'>
                <div className='flex gap-10 sm:gap-14'>
                  <div className='w-2/6'>
                    <div>
                      <Image 
                        src="/step1.png"
                        alt="step1"
                        className="!relative !top-[-5px] !w-[180px] mx-auto"
                        fill
                        priority
                      />
                    </div>
                  </div>
                  <div className='w-4/6'>
                    <p className='text-[#0bb90b] mb-1 text-sm font-bold'>
                      Step 1
                    </p>
                    <h2 className='text-2xl font-bold mb-3'>
                      Create your event
                    </h2>
                    <p>
                      Create a private digital album for guests to add photos, videos, and messages. Customize the title, date, colors, and backgrounds to make it your own!
                    </p>
                    <Button variant="bordered" className='rounded-lg mt-6 w-36 h-10 bg-[#0BB90B] text-white border-[#0BB90B]'>
                      Create Your Event
                    </Button>
                  </div>
                </div>
              </li>
              <li className='mb-16'>
                <div className='flex gap-10 sm:gap-14'>
                  <div className='w-2/6'>
                    <div>
                      <Image 
                        src="/step2.png"
                        alt="step1"
                        className="!relative !top-[-5px] !w-[180px] mx-auto"
                        fill
                        priority
                      />
                    </div>
                  </div>
                  <div className='w-4/6'>
                    <p className='text-[#0bb90b] mb-1 text-sm font-bold'>
                      Step 2
                    </p>
                    <h2 className='text-2xl font-bold mb-3'>
                      Share it with your guests
                    </h2>
                    <p className='mb-2'>
                      Your guests can easily view or contribute photos and videos to your digital album by scanning the unique QR code or using the album URL-before, during, and after your event!
                    </p>
                    <p>
                      Share as a link through email, SMS, chat apps etc.
                    </p>
                    <p>
                      Share as a QR code on printed cards and signs.
                    </p>
                    <p>
                      No app downloads. No registrations needed.
                    </p>
                  </div>
                </div>
              </li>
              <li className='mb-16'>
                <div className='flex gap-10 sm:gap-14'>
                  <div className='w-2/6'>
                    <div>
                      <Image 
                        src="/step3.png"
                        alt="step1"
                        className="!relative !top-[-5px] !w-[180px] mx-auto"
                        fill
                        priority
                      />
                    </div>
                  </div>
                  <div className='w-4/6'>
                    <p className='text-[#0bb90b] mb-1 text-sm font-bold'>
                      Step 3
                    </p>
                    <h2 className='text-2xl font-bold mb-3'>
                      Display it all on a live slideshow
                    </h2>
                    <p>
                      Up for some fun? Add to the event a Live Photo Wall (slideshow) that updates in real-time with every photo and video added by you or your guests. Easily display it on projectors, TVs, tablets or wherever you like.
                    </p>
                    <Button variant="bordered" className='!text-black rounded-lg h-10 text-white border-[#676767] mt-4'>
                      See Live Example
                      <Image 
                        src="/right-arrow.png"
                        alt="Hands"
                        className="!relative !top-[0px] !w-[25px] !h-[12px] ml-1"
                        fill
                        priority
                      />
                    </Button>
                  </div>
                </div>
              </li>
              <li className='mb-16'>
                <div className='flex gap-10 sm:gap-14'>
                  <div className='w-2/6'>
                    <div>
                      <Image 
                        src="/step4.png"
                        alt="step1"
                        className="!relative !top-[-5px] !w-[180px] mx-auto"
                        fill
                        priority
                      />
                    </div>
                  </div>
                  <div className='w-4/6'>
                    <p className='text-[#0bb90b] mb-1 text-sm font-bold'>
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
                    <Button variant="bordered" className='rounded-lg mt-6 w-36 h-10 bg-[#0bb90b] text-white border-[#0BB90B]'>
                      Create Your Event
                    </Button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className='flex items-centers justify-between mt-[-150px]'>
          <div>
            <Image 
              src="/hands1.png"
              alt="hands1"
              className="!relative !top-[-5px] !w-[200px] mx-auto"
              fill
              priority
            />
          </div>
          <div>
            <Image 
              src="/hands2.png"
              alt="hands2"
              className="!relative !top-[-5px] !w-[200px] mx-auto"
              fill
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorkComponent;
