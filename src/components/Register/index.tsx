'use client';
import Image from 'next/image';
import {Link, Input, Button} from "@nextui-org/react";

const RegisterComponent = () => {
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
          Create your free account
        </h2>
        <p className="text-sm text-black">
          Start preserving your memories today! <br /> Sign up quickly and securely
        </p>
        <Input type="text" radius="sm" placeholder="Full Name" className="!w-full mt-3 w-96 border border-solid border-[#dddddd] rounded-md" />
        <Input type="email" radius="sm" placeholder="Email" className="!w-full mt-3 w-96 border border-solid border-[#dddddd] rounded-md" />
        <Input type="password" radius="sm" placeholder="Password" className="!w-full mt-3 w-96 border border-solid border-[#dddddd] rounded-md" />
        <Button className='!text-black w-full rounded-lg !h-[39px] text-sm !font-semibold !text-white border-[#0BB90B] bg-[#0BB90B] mt-5'>
          Continue With Email
        </Button>
        <p className="text-xs text-black mt-1">
          By continuingl, you agree to the Terms of use and Privacy Policy.
        </p>
        <p className="text-xs text-black font-semibold mt-12">
          Already have an account? <Link href='/auth/login' className="underline !text-[#0BB90B] hover:text-gray-900 text-xs text-semibold">Sign in</Link>
        </p>
      </div>
    </>
  );
};

export default RegisterComponent;
