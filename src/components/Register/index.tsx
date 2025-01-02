'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import {Link, Input, Button} from "@nextui-org/react";

const RegisterComponent = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  /* eslint-disable */
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Hit API
  };
  /* eslint-enable */
  return (
    <>
      <div className="px-4 sm:px-6 xl:px-28 py-28">
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
        <form onSubmit={handleSubmit}>
          <Input type="text" name="fullname" value={formData.fullname} onChange={handleChange} radius="sm" placeholder="Full Name" className="!w-full mt-3 w-96 border border-solid border-[#dddddd] rounded-md" />
          <Input type="email" name="email" value={formData.email} onChange={handleChange} radius="sm" placeholder="Email" className="!w-full mt-3 w-96 border border-solid border-[#dddddd] rounded-md" />
          <Input type="password" name="password" value={formData.password} onChange={handleChange} radius="sm" placeholder="Password" className="!w-full mt-3 w-96 border border-solid border-[#dddddd] rounded-md" />
          <Button type='submit' className='!text-black w-full rounded-lg !h-[39px] text-sm !font-semibold !text-white border-[#0BB90B] bg-[#0BB90B] mt-5'>
            Continue With Email
          </Button>
        </form>
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
