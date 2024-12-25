'use client';
import Image from 'next/image';
import {Input, Button} from "@nextui-org/react";
const ProComponent = () => {
  return (
    <>
      <div className='absolute w-full mix-blend-multiply bg-[#909090]'>
        <div className="bg-cover h-screen bg-no-repeat bg-[url('/bg-1.jpg')]"></div>
      </div>
      <div className='relative h-screen z-10 px-7 text-white'>
        <div className='pt-14'>
          <Image 
            src="/thumb.png"
            alt="Background"
            width={90}
            height={45}
            priority
          />
          <h2 className='text-3xl mt-2'>
            Dara & Arifin Weddings
          </h2>
          <span>
            13 Aug 2024
          </span>
        </div>

        <div className='absolute bottom-5 w-[85%]'>
          <div className='w-full mb-6'>
            <div className='mb-1.5'>
              <Input
                label="Name"
                labelPlacement="outside"
                placeholder="John Doe"
                type="text"
              />
            </div>
            <div className='my-12'>
              <Input
                label="Email"
                labelPlacement="outside"
                placeholder="john@doe.com"
                type="email"
              />
            </div>
            <div>
              <Input
                label="Enter your Pass code to join our party."
                labelPlacement="outside"
                placeholder="1234"
                type="text"
              />
            </div>
            <div className='text-center'>
              <Button color="danger" variant="bordered" className='bg-[#0BB90B] text-white !w-[150px] border-[#0BB90B] mt-7'>
                Submit
              </Button>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default ProComponent;
