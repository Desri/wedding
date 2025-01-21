'use client';
import { useContext, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Link } from '@nextui-org/react';

import { AppContext } from '../../../../contexts/ContextProviders';
import ListAlbumImageDashboardComponent from './listAlbumImage';
import { getDetailEvent } from '../../../../services/client/event';

const DetailAlbumDashboardComponent = () => {
  const { state, dispatch } = useContext(AppContext);
  const pathname = usePathname();
  const lastSegment = pathname.split('/').filter(Boolean).pop();

  /* eslint-disable */
  useEffect(() => {
    fetchDetailEvent();
  }, []);
  const fetchDetailEvent = () => {
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
  };
  /* eslint-enable */
  return (
    <>
      {state.showListEvent.length > 0 && (
        <div className='flex items-center gap-4 mb-7'>
          {state.showListEvent?.map((item) => (
            <div key={item._id}>
              <Link
                href={`/dashboard/album/${item._id}`}
              >
                <div className='bg-white w-[140px] h-[150px] rounded-xl border-2 border-[#0BB90B]'>
                  {item.appearance?.fileUrl ? (
                    <img
                      src={item.appearance?.fileUrl}
                      alt="Preview"
                      className='object-cover h-[110px] w-full rounded-t-xl mb-0.5'
                    />
                  ) : (
                    <div className='h-[110px] bg-[#F7F7F7] rounded-t-xl'>
                      <img
                        src="/no-image.png"
                        alt="Preview"
                        className='object-cover relative top-9 mx-auto rounded-t-xl h-[40px]'
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
      <ListAlbumImageDashboardComponent />
    </>
  );
};

export default DetailAlbumDashboardComponent;
