'use client';
import { Link } from '@nextui-org/react';

const MenuDashboardComponent = () => {
  return (
    <>
      <div className='w-2/12 sm:px-5 sm:py-3 border-r-2 border-[#dddddd]'>
        <ul>
          <li>
            <Link
              href='#'
              className="block text-black hover:bg-[#eeeeef] rounded-md py-2 px-2.5"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href='#'
              className="block text-black hover:bg-[#eeeeef] rounded-md py-2 px-2.5"
            >
              My Album
            </Link>
          </li>
          <li>
            <Link
              href='#'
              className="block text-black hover:bg-[#eeeeef] rounded-md py-2 px-2.5"
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
