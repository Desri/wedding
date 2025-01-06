'use client';
import { Link } from '@nextui-org/react';

const MenuDashboardComponent = () => {
  return (
    <>
      <div className='sm:w-2/12 hidden sm:block sm:px-5 sm:py-3 border-r-2 border-[#dddddd]'>
        <ul>
          <li>
            <Link
              href='/dashboard'
              className="block text-[#272727] hover:bg-[#eeeeef] rounded-md py-2 px-2.5 text-sm font-semibold"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href='/dashboard/album'
              className="block text-[#272727] hover:bg-[#eeeeef] rounded-md py-2 px-2.5 text-sm font-semibold"
            >
              My Album
            </Link>
          </li>
          <li>
            <Link
              href='/dashboard/event'
              className="block text-[#272727] hover:bg-[#eeeeef] rounded-md py-2 px-2.5 text-sm font-semibold"
            >
              Event Settings
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MenuDashboardComponent;
