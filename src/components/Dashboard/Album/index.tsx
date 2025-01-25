'use client';
import { useContext } from 'react';
import { Link } from '@nextui-org/react';
import { AppContext } from '../../../../contexts/ContextProviders';

const AlbumDashboardComponent = () => {
  const { state } = useContext(AppContext);
  return (
    <>
      {state.showListEvent.length > 0 && (
        <div className='flex items-center gap-4 mb-7'>
          {state.showListEvent?.map((item) => (
            <div key={item._id}>
              <Link
                href={`/dashboard/album/${item._id}`}
              >
                <div className='bg-white w-[140px] h-[180px] rounded-xl'>
                  {item.appearance?.fileUrl ? (
                    <img
                      src={item.appearance?.fileUrl}
                      alt="Preview"
                      className='object-cover h-[135px] w-full rounded-lg mb-0.5'
                    />
                  ) : (
                    <div className='h-[140px] w-full bg-[#F7F7F7] rounded-lg'>
                      <img
                        src="/no-image.png"
                        alt="Preview"
                        className='object-cover relative top-11 mx-auto rounded-lg h-[40px] w-[40px]'
                      />
                    </div>
                  )}
                  <p className='text-xs font-semibold text-black p-2'>
                    {item.title}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default AlbumDashboardComponent;
