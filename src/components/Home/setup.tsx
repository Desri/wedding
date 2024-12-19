'use client';
import { Button } from '@nextui-org/react';

const SetupComponent = () => {
  return (
    <>
      <div className="bg-[#0bb90b] py-4 text-center">
        <h3>
          It is free and takes 2 minutes to setup!
        </h3>
      </div>
      <div className="px-16 py-32 bg-[#f8fafd]">
        <div className="text-center sm:w-3/5 px-4 mx-auto text-black">
          <h2 className="text-3xl mb-5 font-bold">
            Yes. Its Like Magic!
          </h2>
          <p>
            Event Photo Sharing Made Easy! Collect & share photos and videos with your guests in a stunning digital album - setup is a breeze, and sharing is even easier. 
          </p>
          <div className="text-center mt-8">
            <Button variant="bordered" className='rounded-lg mx-2 w-36 h-10 bg-[#0bb90b] text-white border-green-500'>
              Get Started
            </Button>
            <Button variant="bordered" className='!text-black mx-2 w-36 rounded-lg h-10 text-white border-green-500'>
              Try Demo
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SetupComponent;
