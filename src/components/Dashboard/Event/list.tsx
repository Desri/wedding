'use client';
import {Button} from "@nextui-org/react";

const ListEventComponent = () => {
  return (
    <>
      <div className="px-5">
        <h2 className="text-2xl text-black font-semibold mb-1">
          My Events
        </h2>
        <p className="text-xs text-[#909090] font-semibold">
          Here you can find all you events or create new ones.
        </p>
        <Button className='!text-black !mt-4 rounded-lg !h-[35px] text-xs !font-semibold !text-white border-[#0BB90B] bg-[#0BB90B] mt-1.5'>
          Create New Event
        </Button>
      </div>
    </>
  );
};

export default ListEventComponent;
