'use client';
import React, { useContext, useState, useEffect } from 'react';
import { Input, DatePicker, Button } from "@nextui-org/react";
import { parseDate } from "@internationalized/date";
import { usePathname } from 'next/navigation';
import { AppContext } from '../../../../contexts/ContextProviders';
import { getDetailEvent, updateGeneralEvent } from '../../../../services/client/event';

const GeneralDashboardTabComponent = () => {
  const [value, setValue] = useState(parseDate("2025-01-18"));
  const { dispatch, state } = useContext(AppContext);
  const pathname = usePathname();
  const lastSegment = pathname.split('/').filter(Boolean).pop();
  const [eventType, setEventType] = useState('');
  const [loading, setLoading] = useState(false);
  // const { year = 0, month = 0, day = 0 } = state.showDetailEvent?.date;
  // const formattedDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  // const [value, setValue] = useState(parseDate(formattedDate));
  const [title, setTitle] = useState('');

  /* eslint-disable */
  useEffect(() => {
    if (state.showDetailEvent?.title) {
      setTitle(state.showDetailEvent.title)
      setEventType(state.showDetailEvent.eventType)
    }
  }, [state.showDetailEvent]);

  const handleClick = (newValue: any) => {
    setEventType(newValue);
  };

  const handleChange = (e: any) => {
    const { value } = e.target;
    setTitle(value)
  };
  
  const handleSubmit = () => {
    setLoading(true);
    const payload = {
      eventType,
      title,
      date: value,
      eventId: lastSegment
    }
    updateGeneralEvent({ payload })
    .then((res: any) => {
      setLoading(false);
      getDetailEvent({lastSegment})
      .then((res: any) => {
        dispatch({
          type: 'SET_DETAIL_EVENT',
          value: res.data
        });
      })
      .catch((err: any) => {
        console.log('Check Error', err)
      });
    })
    .catch((err: any) => {
      setLoading(false);
      console.log('Error', err)
    })
  };
  // let formatter = useDateFormatter({dateStyle: "full"});
  /* eslint-enable */
  return (
    <>
      <div className="text-black mb-8">
        <h3 className="text-sm font-semibold">
          Event Name
        </h3>
        <span className="text-xs text-[#909090] font-semibold">
          It will be used through the app and will be showed to your guests.
        </span>
        <Input
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
          radius="sm"
          className="mt-3 w-96 border border-solid border-[#dddddd] rounded-md"
        />
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
          value={value}
          radius="sm"
          onChange={(newValue) => setValue(newValue!)}
        />
        {/* <p className="text-default-500 text-xs mt-1">
          Selected date: {formData.valDate ? formatter.format(formData.valDate.toDate(getLocalTimeZone())) : "--"}
        </p> */}
      </div>
      <div className="text-black mb-8">
        <h3 className="text-sm font-semibold">
          Event Type
        </h3>
        <span className="text-xs text-[#909090] font-semibold">
          We’ll adjust the experience according to your event type.
        </span>
        <div className='flex items-center gap-5 mt-2'>
          <div
            className={`hover:bg-[#0BB90B17] border-2 border-solid hover:border-[#0BB90B] text-center py-2 px-2 rounded-lg cursor-pointer ${eventType === '1' ? 'bg-[#0BB90B17] border-[#0BB90B]' : 'bg-[#F7F7F7] border-[#F7F7F7]'}`}
            onClick={() => handleClick('1')}
          >
            <h2 className='text-black text-sm font-semibold flex items-center gap-2'>
              <span>
                💍
              </span>
              Wedding
            </h2>
          </div>
          <div
            className={`hover:bg-[#0BB90B17] border-2 border-solid hover:border-[#0BB90B] text-center py-2 px-2 rounded-lg cursor-pointer ${eventType === '2' ? 'bg-[#0BB90B17] border-[#0BB90B]' : 'bg-[#F7F7F7] border-[#F7F7F7]'}`}
            onClick={() => handleClick('2')}
          >
            <h2 className='text-black text-sm font-semibold flex items-center gap-2'>
              <span>
                🥳
              </span>
              Party
            </h2>
          </div>
          <div
            className={`hover:bg-[#0BB90B17] border-2 border-solid hover:border-[#0BB90B] text-center py-2 px-2 rounded-lg cursor-pointer ${eventType === '3' ? 'bg-[#0BB90B17] border-[#0BB90B]' : 'bg-[#F7F7F7] border-[#F7F7F7]'}`}
            onClick={() => handleClick('3')}
          >
            <h2 className='text-black text-sm font-semibold flex items-center gap-2'>
              <span>
                🎤
              </span>
              Conference
            </h2>
          </div>
          <div
            className={`hover:bg-[#0BB90B17] border-2 border-solid hover:border-[#0BB90B] text-center py-2 px-2 rounded-lg cursor-pointer ${eventType === '4' ? 'bg-[#0BB90B17] border-[#0BB90B]' : 'bg-[#F7F7F7] border-[#F7F7F7]'}`}
            onClick={() => handleClick('4')}
          >
            <h2 className='text-black text-sm font-semibold flex items-center gap-2'>
              <span>
                🎂
              </span>
              Birthday
            </h2>
          </div>
          <div
            className={`hover:bg-[#0BB90B17] border-2 border-solid hover:border-[#0BB90B] text-center py-2 px-2 rounded-lg cursor-pointer ${eventType === '5' ? 'bg-[#0BB90B17] border-[#0BB90B]' : 'bg-[#F7F7F7] border-[#F7F7F7]'}`}
            onClick={() => handleClick('5')}
          >
            <h2 className='text-black text-sm font-semibold flex items-center gap-2'>
              <span>
                🤩
              </span>
              Others
            </h2>
          </div>
        </div>
      </div>

      <Button
        className='!text-black max-w-[125px] rounded-lg !h-[35px] text-xs !font-semibold !text-white border-[#0BB90B] bg-[#0BB90B] mt-3'
        isDisabled={loading}
        onClick={handleSubmit}
      >
        {loading ? (
          <span>Loading...</span>
        ) : (
          <span>Update</span>
        )}
      </Button>
    </>
  );
};

export default GeneralDashboardTabComponent;
