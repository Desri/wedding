'use client';
import React, { useState } from 'react';
import {Input, DatePicker, Button} from "@nextui-org/react";
import {parseDate} from "@internationalized/date";


const GeneralDashboardTabComponent = () => {
  const [value, setValue] = useState(parseDate("2024-04-04"));
  return (
    <>
      <div className="text-black mb-8">
        <h3 className="text-sm font-semibold">
          Event Name
        </h3>
        <span className="text-xs text-[#909090] font-semibold">
          It will be used through the app and will be showed to your guests.
        </span>
        <Input type="text" radius="sm" className="mt-3 w-96 border border-solid border-[#dddddd] rounded-md" />
      </div>
      <div className="text-black mb-8">
        <h3 className="text-sm font-semibold">
          Event Date
        </h3>
        <span className="text-xs text-[#909090] font-semibold">
          Set when your event is scheduled to start
        </span>
        <DatePicker
          className="mt-3 max-w-[180px] border border-solid border-[#dddddd] rounded-md input-date"
          value={value}
          radius="sm"
          // onChange={setValue}
          onChange={(newValue) => setValue(newValue!)}
        />
      </div>

      <div className="text-black mb-8">
        <h3 className="text-sm font-semibold">
          Event Type
        </h3>
        <span className="text-xs text-[#909090] font-semibold">
          We’ll adjust the experience according to your event type.
        </span>
        <div className='flex items-center gap-5 mt-1.5'>
          <div className='hover:bg-[#0BB90B17] border-2 border-solid hover:border-[#0BB90B] border-[#F7F7F7] bg-[#F7F7F7] text-center py-2 px-2 rounded-lg w-28 cursor-pointer'>
            <h2 className='text-black text-sm font-semibold'>
              Wedding
            </h2>
          </div>
          <div className='hover:bg-[#0BB90B17] border-2 border-solid hover:border-[#0BB90B] border-[#F7F7F7] bg-[#F7F7F7] text-center py-2 px-2 rounded-lg w-28 cursor-pointer'>
            <h2 className='text-black text-sm font-semibold'>
              Party
            </h2>
          </div>
          <div className='hover:bg-[#0BB90B17] border-2 border-solid hover:border-[#0BB90B] border-[#F7F7F7] bg-[#F7F7F7] text-center py-2 px-2 rounded-lg w-28 cursor-pointer'>
            <h2 className='text-black text-sm font-semibold'>
              Conference
            </h2>
          </div>
          <div className='hover:bg-[#0BB90B17] border-2 border-solid hover:border-[#0BB90B] border-[#F7F7F7] bg-[#F7F7F7] text-center py-2 px-2 rounded-lg w-28 cursor-pointer'>
            <h2 className='text-black text-sm font-semibold'>
              Birthday
            </h2>
          </div>
          <div className='hover:bg-[#0BB90B17] border-2 border-solid hover:border-[#0BB90B] border-[#F7F7F7] bg-[#F7F7F7] text-center py-2 px-2 rounded-lg w-28 cursor-pointer'>
            <h2 className='text-black text-sm font-semibold'>
              Others
            </h2>
          </div>
        </div>
      </div>
      <Button className='!text-black max-w-[125px] rounded-lg !h-[35px] text-xs !font-semibold !text-white border-[#0BB90B] bg-[#0BB90B] mt-1.5'>
        Update
      </Button>
    </>
  );
};

export default GeneralDashboardTabComponent;
