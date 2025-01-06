'use client';
import React, { useContext, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { AppContext } from '../../../contexts/ContextProviders';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  User,
} from "@nextui-org/react";
import { getProfile, userLogout } from '../../../services/client/auth';

const HeaderDashboardComponent =  ({ isAuth }: { isAuth?: boolean; }) => {
  const router = useRouter();
  const { state, dispatch } = useContext(AppContext);
  useEffect(() => {
    if (isAuth) {
      fetchProfile();
    }
  }, []);

  const logout = () => {
    userLogout();
    router.push('/');
  };

  const fetchProfile = () => {
    getProfile()
      .then((res: any) => {
        dispatch({
          type: 'SET_PROFILE',
          value: {
            Email: res.result.email,
            Fullname: res.result.fullname,
          },
        });
      })
      .catch((err: any) => {
        console.log('Check Error', err)
      });
  };

  return (
    <>
      <nav className="sticky top-0 z-50 flex items-center justify-between sm:px-5 py-2 bg-white border-b border-solid border-[#dddddd]">
        <div>
          <div className="flex items-center">
            <div className='sm:mr-28'>
              <Image 
                src="/logo.png"
                alt="Logo"
                className="imgAlbum !relative w-auto"
                fill
                priority
              />
            </div>
            <div className='ml-3'>
              <div className="flex items-center space-x-4">
                <Dropdown placement="bottom-start">
                  <DropdownTrigger>
                    <User
                      as="button"
                      avatarProps={{
                        isBordered: false,
                        className: "rounded-md",
                        src:"/thumb.png"
                      }}
                      className="text-black gap-4"
                      name="Dara & Arifin Weddings"
                    />
                  </DropdownTrigger>
                  <DropdownMenu aria-label="User Actions" variant="flat">
                    <DropdownItem key="settings">
                      <div className="flex items-center gap-4">
                        <Image 
                          src="/small-thumb.png"
                          alt="Thumb"
                          className="!relative !w-[32px] !rounded-md"
                          fill
                          priority
                        />
                        <div>
                          <div className='text-black'>
                            <h2 className='text-xs'>
                              Birthday Party
                            </h2>
                          </div>
                        </div>
                      </div>
                    </DropdownItem>
                    <DropdownItem key="logout">
                      <div className="flex items-center gap-4">
                        <Image 
                          src="/thumb.png"
                          alt="Thumb"
                          className="!relative !w-[32px] !rounded-md"
                          fill
                          priority
                        />
                        <div>
                          <div className='text-black'>
                            <h2 className='text-xs'>
                              Dara & Arifin Weddings
                            </h2>
                          </div>
                        </div>
                      </div>
                    </DropdownItem>
                    <DropdownItem key="store">
                      <div className="flex items-center gap-4">
                        <Image 
                          src="/small-thumb.png"
                          alt="Thumb"
                          className="!relative !w-[32px] !rounded-md"
                          fill
                          priority
                        />
                        <div>
                          <div className='text-black'>
                            <h2 className='text-xs'>
                              Store Opening
                            </h2>
                          </div>
                        </div>
                      </div>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
            {/* <div>
              <div className="hidden md:flex space-x-8">
                <Link
                  href='#'
                  className="text-gray-700 hover:text-gray-900 font-bold text-sm mt-2"
                >
                  How it works
                </Link>
                <Link
                  href='#'
                  className="text-gray-700 hover:text-gray-900 font-bold text-sm mt-2"
                >
                  Pricing
                </Link>
                <Link
                  href='#'
                  className="text-gray-700 hover:text-gray-900 font-bold text-sm mt-2"
                >
                  Whats included
                </Link>
                <Link
                  href='#'
                  className="text-gray-700 hover:text-gray-900 font-bold text-sm mt-2"
                >
                  FAQ
                </Link>
              </div>
            </div> */}
          </div>
        </div>
        <div>
          <div className="flex items-center space-x-4">
            <Dropdown placement="bottom-start">
              <DropdownTrigger>
                <User
                  as="button"
                  avatarProps={{
                    isBordered: false,
                    src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                  }}
                  className="transition-transform text-black gap-4"
                  name={state.profile?.Fullname || ''}
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="User Actions" variant="flat">
                <DropdownItem key="settings">
                  <p className="text-black">Settings</p>
                </DropdownItem>
                <DropdownItem key="logout">
                  <p className="text-black" onClick={() => logout()}>Log Out</p>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderDashboardComponent;
