'use client';
import React, { useState } from 'react';
import {Input, DatePicker, Button} from "@nextui-org/react";
import {parseDate} from "@internationalized/date";


const GeneralDashboardTabComponent = () => {
  const [value, setValue] = useState(parseDate("2024-04-04"));
  return (
    <>
      <div className="text-black mb-8">
        <h3 className="text-sm">
          Event Name
        </h3>
        <span className="text-xs text-[#909090]">
          It will be used through the app and will be showed to your guests.
        </span>
        <Input type="text" radius="sm" className="mt-3 w-96 border border-solid border-[#dddddd] rounded-md" />
      </div>
      <div className="text-black mb-8">
        <h3 className="text-sm">
          Event Date
        </h3>
        <span className="text-xs text-[#909090]">
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
      <Button className='!text-black max-w-[125px] rounded-lg !h-[37px] text-xs !font-semibold !text-white border-[#0BB90B] bg-[#0BB90B] mt-1.5'>
        Update
      </Button>
    </>
  );
};

export default GeneralDashboardTabComponent;
