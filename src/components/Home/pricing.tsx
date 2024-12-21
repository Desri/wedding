'use client';
import Image from 'next/image';
import { Button } from '@nextui-org/react';

const PricingComponent = () => {
  return (
    <>
      <div className="relative mt-[-60px] sm:px-16 py-24 bg-[#f8fafd]">
        <div className="sm:w-5/6 px-4 mx-auto text-black">
          <div className='text-center mb-16'>
            <h2 className="text-3xl mb-2 font-bold">
              Pricing
            </h2>
            <p>
              All plans are a one-time fee. No hidden cost.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5 mt-8">
            <div className='p-5 hover:border-[#fe7305] border-white border-2 border-solid bg-white rounded-2xl'>
              <h3 className='text-lg font-bold'>
                Lite
              </h3>
              <p className='text-xs text-[#bfbfbf] font-bold'>
                Perfect for Small Event start!
              </p>
              <div className='text-center my-6'>
                <h3 className='text-5xl'>
                  <span className='text-base mr-1'>$</span>19
                </h3>
              </div>
              <div className='mb-9'>
                <ul>
                  <li className='flex items-center text-sm mb-1.5'>
                    <svg className='mr-1.5' xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg> Single Album
                  </li>
                  <li className='flex items-center text-sm mb-1.5'>
                    <svg className='mr-1.5' xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg> Up to 200 uploads of photos & videos
                  </li>
                  <li className='flex items-center text-sm mb-1.5'>
                    <svg className='mr-1.5' xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg> Unlimited Guest & participants
                  </li>
                  <li className='flex items-center text-sm mb-1.5'>
                    <svg className='mr-1.5' xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg> Uploads are saved for 7 days
                  </li>
                  <li className='flex items-center text-sm mb-1.5'>
                    <svg className='mr-1.5' xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg> No need for a complicated setup
                  </li>
                  <li className='flex items-center text-sm mb-1.5'>
                    <svg className='mr-1.5' xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg> Upload Active for 3 days from the event date
                  </li>
                  <li className='flex items-center text-sm mb-1.5'>
                    <svg className='mr-1.5' xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg> All uploads are saved in good quality
                  </li>
                  <li className='flex items-center text-sm mb-1.5'>
                    <svg className='mr-1.5' xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg> Download all photos & videos at once
                  </li>
                  <li className='flex items-center text-sm mb-1.5'>
                    <span className='ml-6 text-[#b2b2b2] line-through'>Remove FotoSlide Brand</span>
                  </li>
                  <li className='flex items-center text-sm mb-1.5'>
                    <span className='ml-6 text-[#b2b2b2] line-through'>Moderation tools</span>
                  </li>
                </ul>
              </div>
              <Button variant="bordered" className='rounded-lg mx-2 w-36 h-10 bg-[#0bb90b] text-white border-[#0BB90B]'>
                Create Event
              </Button>
              <Image 
                src="/secure-payment.png"
                alt="Hands"
                className="!relative !top-[0px] !w-[110px] !h-[14px] mt-3 ml-2"
                fill
                priority
              />
            </div>
            <div className='p-5 hover:border-[#fe7305] border-white border-2 border-solid bg-white rounded-2xl'>
              <h3 className='text-lg font-bold'>
                Plus
              </h3>
              <p className='text-xs text-[#bfbfbf] font-bold'>
                Perfect for Medium Event!
              </p>
              <div className='text-center my-6'>
                <h3 className='text-5xl'>
                  <span className='text-base mr-1'>$</span>39
                </h3>
              </div>
              <div className='mb-9'>
                <ul>
                  <li className='flex items-center text-sm mb-1.5'>
                    <svg className='mr-1.5' xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg> Up to 3 Albums
                  </li>
                  <li className='flex items-center text-sm mb-1.5'>
                    <svg className='mr-1.5' xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg> Up to 500 uploads of photos & videos
                  </li>
                  <li className='flex items-center text-sm mb-1.5'>
                    <svg className='mr-1.5' xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg> Unlimited Guest & participants
                  </li>
                  <li className='flex items-center text-sm mb-1.5'>
                    <svg className='mr-1.5' xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg> Uploads are saved for 45 days
                  </li>
                  <li className='flex items-center text-sm mb-1.5'>
                    <svg className='mr-1.5' xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg> Advanced customization options
                  </li>
                  <li className='flex items-center text-sm mb-1.5'>
                    <svg className='mr-1.5' xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg> Upload Active for 14 days from the event date
                  </li>
                  <li className='flex items-center text-sm mb-1.5'>
                    <svg className='mr-1.5' xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg> All uploads are saved in High-Quality
                  </li>
                  <li className='flex items-center text-sm mb-1.5'>
                    <svg className='mr-1.5' xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg> Download all photos & videos at once
                  </li>
                  <li className='flex items-center text-sm mb-1.5'>
                    <svg className='mr-1.5' xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg> Remove FotoSlide Brand
                  </li>
                  <li className='flex items-center text-sm mb-1.5'>
                    <span className='ml-6 text-[#b2b2b2] line-through'>Moderation tools</span>
                  </li>
                </ul>
              </div>
              <Button variant="bordered" className='rounded-lg mx-2 w-36 h-10 bg-[#0bb90b] text-white border-[#0BB90B]'>
                Start with Plus
              </Button>
              <Image 
                src="/secure-payment.png"
                alt="Hands"
                className="!relative !top-[0px] !w-[110px] !h-[14px] mt-3 ml-2"
                fill
                priority
              />
            </div>
            <div className='relative mt-7 sm:mt-0'>
              <div className='absolute w-full text-center top-[-28px]'>
                <div className='flex items-center gap-2 mx-auto w-max text-[15px]'>
                  <Image 
                    src="/fire.png"
                    alt="Hands"
                    className="!relative !top-[0px] !w-[13px] !h-[15px]"
                    fill
                    priority
                  /> Hot Deal
                </div>
              </div>
              <div className='p-5 hover:border-[#fe7305] border-[#fe7305] border-2 border-solid bg-white rounded-2xl'>
                <h3 className='text-lg font-bold'>
                  Pro
                </h3>
                <p className='text-xs text-[#bfbfbf] font-bold'>
                  Just for Pro like You.
                </p>
                <div className='text-center my-6'>
                  <h3 className='text-5xl'>
                    <span className='text-base mr-1'>$</span>99
                  </h3>
                </div>
                <div className='mb-9'>
                  <ul>
                    <li className='flex items-center text-sm mb-1.5'>
                      <svg className='mr-1.5' xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg> Up to 5 Albums
                    </li>
                    <li className='flex items-center text-sm mb-1.5'>
                      <svg className='mr-1.5' xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg> Unlimited uploads of photos & videos
                    </li>
                    <li className='flex items-center text-sm mb-1.5'>
                      <svg className='mr-1.5' xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg> Unlimited Guest & participants
                    </li>
                    <li className='flex items-center text-sm mb-1.5'>
                      <svg className='mr-1.5' xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg> Uploads are saved for 120 days
                    </li>
                    <li className='flex items-center text-sm mb-1.5'>
                      <svg className='mr-1.5' xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg> Advanced customization options
                    </li>
                    <li className='flex items-center text-sm mb-1.5'>
                      <svg className='mr-1.5' xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg> Upload Active for 30 days from the event date
                    </li>
                    <li className='flex items-center text-sm mb-1.5'>
                      <svg className='mr-1.5' xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg> All uploads are saved in High-Quality
                    </li>
                    <li className='flex items-center text-sm mb-1.5'>
                      <svg className='mr-1.5' xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg> Download all photos & videos at once
                    </li>
                    <li className='flex items-center text-sm mb-1.5'>
                      <svg className='mr-1.5' xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg> Remove FotoSlide Brand
                    </li>
                    <li className='flex items-center text-sm mb-1.5'>
                      <svg className='mr-1.5' xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg> Moderation tools
                    </li>
                  </ul>
                </div>
                <Button variant="bordered" className='rounded-lg mx-2 w-36 h-10 bg-[#0bb90b] text-white border-[#0BB90B]'>
                  Start with Pro
                </Button>
                <Image 
                  src="/secure-payment.png"
                  alt="Hands"
                  className="!relative !top-[0px] !w-[110px] !h-[14px] mt-3 ml-2"
                  fill
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingComponent;
