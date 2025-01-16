'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {Link, Input, Button} from "@nextui-org/react";
import { login } from '../../../services/client/auth';
import { setCookie } from 'cookies-next';

const LoginComponent = () => {
  const router = useRouter();
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
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
    if (formData.email === '') {
      setErrorEmail(true);
    }
    if (formData.password === '') {
      setErrorPassword(true);
    }
    if (formData.email !== '' && formData.password !== '') {
      setLoading(true);
      setErrorEmail(false);
      setErrorPassword(false);

      login({ formData })
      .then((res: any) => {
        if(res.success) {
          setLoading(false);
          setCookie('isAuth', true);
          setCookie('_FotoSlideToken', res.token);
          router.push('/dashboard');
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
          Welcome back
        </h2>
        <p className="text-sm text-black mb-2">
          Enter your Fotoslide account email dan password <br /> to sign in
        </p>
        <form onSubmit={handleSubmit}>
          <div>
            <Input type="email" name="email" value={formData.email} onChange={handleChange} radius="sm" placeholder="Email" className="!w-full mt-3 border border-solid border-[#dddddd] rounded-md" />
            {errorEmail && (
              <span className='text-xs text-[#ff0202]'>Email is required!</span>
            )}
          </div>
          <div>
            <div className='relative'>
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                radius="sm" 
                placeholder="Password"
                className="!w-full mt-3 border border-solid border-[#dddddd] rounded-md"
              />
              {/* <div className='absolute top-2 right-3.5 cursor-pointer'>
                <p className='text-black'>C</p>
              </div> */}
            </div>
            {errorPassword && (
              <span className='text-xs text-[#ff0202]'>Password is required!</span>
            )}
          </div>
          <Link href='/auth/forgot-password' className="text-xs text-black font-semibold mt-2.5">Forgot Password?</Link>
          <Button
            type='submit'
            className='!text-black w-full rounded-lg !h-[39px] text-sm !font-semibold !text-white border-[#0BB90B] bg-[#0BB90B] mt-5'
            isDisabled={loading}
          >
            {loading ? (
              <span>Loading...</span>
            ) : (
              <span>Continue</span>
            )}
          </Button>
        </form>
        <p className="text-xs text-black font-semibold mt-12">
          Dont have an account? <Link href='/auth/register' className="underline !text-[#0BB90B] hover:text-gray-900 text-xs text-semibold">Sign up</Link>
        </p>
      </div>
    </>
  );
};

export default LoginComponent;
