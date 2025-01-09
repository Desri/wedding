'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {Link, Input, Button} from "@nextui-org/react";
import { registration } from '../../../services/client/auth';

const RegisterComponent = () => {
  const router = useRouter();
  const [errorFullname, setErrorFullname] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [loading, setLoading] = useState(false);
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
    if (formData.fullname === '') {
      setErrorFullname(true);
    }
    if (formData.email === '') {
      setErrorEmail(true);
    }
    if (formData.password === '') {
      setErrorPassword(true);
    }
    if(formData.fullname !== '' && formData.email !== '' && formData.password !== '') {
      setLoading(true);
      registration({ formData })
      .then((res: any) => {
        if(res.success) {
          setLoading(false);
          router.push('/auth/login');
        }
      })
      .catch((err: any) => {
        setLoading(false);
        console.log('Error', err)
      })
    }
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
          <div>
            <Input type="text" name="fullname" value={formData.fullname} onChange={handleChange} radius="sm" placeholder="Full Name" className="!w-full mt-3 w-96 border border-solid border-[#dddddd] rounded-md" />
            {errorFullname && (
              <span className='text-xs text-[#ff0202]'>Fullname is required!</span>
            )}
          </div>
          <div>
            <Input type="email" name="email" value={formData.email} onChange={handleChange} radius="sm" placeholder="Email" className="!w-full mt-3 w-96 border border-solid border-[#dddddd] rounded-md" />
            {errorEmail && (
              <span className='text-xs text-[#ff0202]'>Email is required!</span>
            )}
          </div>
          <div>
            <Input type="password" name="password" value={formData.password} onChange={handleChange} radius="sm" placeholder="Password" className="!w-full mt-3 w-96 border border-solid border-[#dddddd] rounded-md" />
            {errorPassword && (
              <span className='text-xs text-[#ff0202]'>Password is required!</span>
            )}
          </div>
          <Button
            type='submit'
            className='!text-black w-full rounded-lg !h-[39px] text-sm !font-semibold !text-white border-[#0BB90B] bg-[#0BB90B] mt-5'
            isDisabled={loading}
          >
            {loading ? (
              <span>Loading...</span>
            ) : (
              <span>Continue With Email</span>
            )}
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
