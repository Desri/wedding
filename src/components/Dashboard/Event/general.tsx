'use client';
import React, { useState } from 'react';
import {Input, DatePicker, Button} from "@nextui-org/react";
import {parseDate} from "@internationalized/date";

const GeneralDashboardTabComponent = () => {
  // const [value, setValue] = useState(parseDate("2024-04-04"));
  const [formData, setFormData] = useState({
    eventName: "",
    valDate: parseDate("2024-04-04")
  });
  
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
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="text-black mb-8">
          <h3 className="text-sm font-semibold">
            Event Name
          </h3>
          <span className="text-xs text-[#909090] font-semibold">
            It will be used through the app and will be showed to your guests.
          </span>
          <Input type="text" name="eventName" value={formData.eventName} onChange={handleChange} radius="sm" className="mt-3 w-96 border border-solid border-[#dddddd] rounded-md" />
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
            name="valDate"
            value={formData.valDate}
            radius="sm"
            onChange={(newValue) =>
              setFormData((prev) => ({
                ...prev,
                valDate: newValue!,
              }))
            }
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
            <div className='hover:bg-[#0BB90B17] border-2 border-solid hover:border-[#0BB90B] border-[#F7F7F7] bg-[#F7F7F7] text-center py-2 px-2 rounded-lg cursor-pointer'>
              <h2 className='text-black text-sm font-semibold flex items-center gap-2'>
                <span>
                  💍
                </span>
                Wedding
              </h2>
            </div>
            <div className='hover:bg-[#0BB90B17] border-2 border-solid hover:border-[#0BB90B] border-[#F7F7F7] bg-[#F7F7F7] text-center py-2 px-2 rounded-lg cursor-pointer'>
              <h2 className='text-black text-sm font-semibold flex items-center gap-2'>
                <span>
                  🥳
                </span>
                Party
              </h2>
            </div>
            <div className='hover:bg-[#0BB90B17] border-2 border-solid hover:border-[#0BB90B] border-[#F7F7F7] bg-[#F7F7F7] text-center py-2 px-2 rounded-lg cursor-pointer'>
              <h2 className='text-black text-sm font-semibold flex items-center gap-2'>
                <span>
                  🎤
                </span>
                Conference
              </h2>
            </div>
            <div className='hover:bg-[#0BB90B17] border-2 border-solid hover:border-[#0BB90B] border-[#F7F7F7] bg-[#F7F7F7] text-center py-2 px-2 rounded-lg cursor-pointer'>
              <h2 className='text-black text-sm font-semibold flex items-center gap-2'>
                <span>
                  🎂
                </span>
                Birthday
              </h2>
            </div>
            <div className='hover:bg-[#0BB90B17] border-2 border-solid hover:border-[#0BB90B] border-[#F7F7F7] bg-[#F7F7F7] text-center py-2 px-2 rounded-lg cursor-pointer'>
              <h2 className='text-black text-sm font-semibold flex items-center gap-2'>
                <span>
                  🤩
                </span>
                Others
              </h2>
            </div>
          </div>
        </div>
        <Button type='submit' className='!text-black w-[125px] rounded-lg !h-[35px] text-xs !font-semibold !text-white border-[#0BB90B] bg-[#0BB90B] mt-1.5'>
          Update
        </Button>
      </form>
    </>
  );
};

export default GeneralDashboardTabComponent;
