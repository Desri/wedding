'use client';
import React, { useState } from 'react';
import {Link, Input, Button} from "@nextui-org/react";

const ForgotPasswordComponent = () => {
  const [formData, setFormData] = useState({
    email: ""
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
      <div className="px-4 sm:px-6 xl:px-16 py-14">
        <Link
          href='/auth/login'
          className="font-semibold text-sm text-[#464646] sm:mb-16"
        >
          Back
        </Link>
        <h2 className="font-semibold text-lg text-black mb-4 mt-12">
          Forgot Password
        </h2>
        <p className="text-sm text-black mb-3">
          Enter your email below, and we will send you a Link<br /> to reset your password. Lets get you back in action!
        </p>
        <form onSubmit={handleSubmit}>
          <Input type="email" name="email" value={formData.email} onChange={handleChange} radius="sm" placeholder="Email" className="!w-full mt-3 w-96 border border-solid border-[#dddddd] rounded-md" />
          <Button type='submit' className='!text-black w-full rounded-lg !h-[39px] text-sm !font-semibold !text-white border-[#0BB90B] bg-[#0BB90B] mt-7'>
            Send
          </Button>
        </form>
        
        <p className="text-xs text-black font-semibold mt-12">
          Remembered it? <Link href='/auth/login' className="underline !text-[#0BB90B] hover:text-gray-900 text-xs text-semibold">Just head back to login</Link>
        </p>
      </div>
    </>
  );
};

export default ForgotPasswordComponent;
