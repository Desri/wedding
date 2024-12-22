'use client';
import Image from 'next/image';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  // Link,
  User,
} from "@nextui-org/react";

const HeaderDashboardComponent = () => {
  return (
    <>
      <nav className="sticky top-0 z-50 flex items-center justify-between sm:px-5 py-2 bg-white border-b border-solid border-[#dddddd]">
        <div>
          <div className="flex items-center">
            <div className='mr-10'>
              <Image 
                src="/logo.png"
                alt="Logo"
                className="imgAlbum !relative w-auto"
                fill
                priority
              />
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
                    isBordered: true,
                    src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                  }}
                  className="transition-transform text-black gap-4"
                  name="My Account"
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="User Actions" variant="flat">
                <DropdownItem key="settings">
                  <p className="text-black">Settings</p>
                </DropdownItem>
                <DropdownItem key="logout">
                  <p className="text-black">Log Out</p>
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
