'use client';
import Image from 'next/image';
import {Link, Input, Button} from "@nextui-org/react";

const LoginComponent = () => {
  return (
    <>
      <div className="sm:px-6 xl:px-28 py-28">
        <Image 
          src="/logo.png"
          alt="Logo"
          className="imgAlbum !relative !w-40"
          fill
          priority
        />
        <h2 className="font-semibold text-lg text-black mb-4 mt-12">
          Welcome back
        </h2>
        <p className="text-sm text-black mb-2">
          Enter your Fotoslide account email dan password <br /> to sign in
        </p>
        <Input type="email" radius="sm" placeholder="Email" className="!w-full mt-3 w-96 border border-solid border-[#dddddd] rounded-md" />
        <Input type="password" radius="sm" placeholder="Password" className="!w-full mt-3 w-96 border border-solid border-[#dddddd] rounded-md" />
        <Link href='/auth/forgot-password' className="text-xs text-black font-semibold mt-2.5">Forgot Password?</Link>
        <Button className='!text-black w-full rounded-lg !h-[39px] text-sm !font-semibold !text-white border-[#0BB90B] bg-[#0BB90B] mt-5'>
          Continue
        </Button>
        
        <p className="text-xs text-black font-semibold mt-12">
          Dont have an account? <Link href='/auth/register' className="underline !text-[#0BB90B] hover:text-gray-900 text-xs text-semibold">Sign up</Link>
        </p>
      </div>
    </>
  );
};

export default LoginComponent;
