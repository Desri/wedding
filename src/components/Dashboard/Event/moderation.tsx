'use client';
import React, { useContext, useState, useEffect } from 'react';
import {
  Button,
  Switch,
} from "@nextui-org/react";
import { usePathname } from 'next/navigation';
import { AppContext } from '../../../../contexts/ContextProviders';
import { updateModeration } from '../../../../services/client/event';
import ModalWelcomeScreenComponent from '../modalwelcomescreen';

const ModerationDashboardTabComponent = () => {
  const { state, dispatch } = useContext(AppContext);
  const pathname = usePathname();
  const lastSegment = pathname.split('/').filter(Boolean).pop();
  const [loading, setLoading] = useState(false);
  const [mediaType, setMediaType] = useState('');
  const [permissions, setPermissions] = useState('');

  const [isManualApprove, setIsManualApprove] = useState(state.showDetailEvent.moderation.isManualApprove ? true : false);
  const [isDisableGuestsDownload, setDisableGuestsDownload] = useState(state.showDetailEvent.moderation?.isDisableGuestsDownload ? true : false);

  const [formData, setFormData] = useState({
    isManualApprove: isManualApprove,
    isDisableGuestsDownload: isDisableGuestsDownload,
    eventId: lastSegment
  });

  /* eslint-disable */
  useEffect(() => {
    if (state.showDetailEvent) {
      setFormData((prev) => ({
        ...prev,
        isManualApprove: isManualApprove,
        isDisableGuestsDownload: isDisableGuestsDownload,
      }));
      setMediaType(state.showDetailEvent.moderation.isAllowedMedia);
      setPermissions(state.showDetailEvent.moderation.digitalAlbumPermissions)
    }
  }, []);

  const handleClick = (newValue: any) => {
    setMediaType(newValue);
  };

  const selectedPermissions = (newValue: any) => {
    setPermissions(newValue);
  };

  const showPopupWelcomeScreen = () => {
    dispatch({
      type: 'SET_POPUP_WELCOME_SCREEN',
      value: true
    });
  };

  const handleSubmit = () => {
    setLoading(true);
    const payload = {
      isManualApprove: isManualApprove,
      isDisableGuestsDownload: isDisableGuestsDownload,
      isAllowedMedia: mediaType,
      digitalAlbumPermissions: permissions,
      eventId: lastSegment
    }
    updateModeration({ payload })
    .then((res: any) => {
      console.log('Check', res)
      setLoading(false);
    })
    .catch((err: any) => {
      setLoading(false);
      console.log('Error', err)
    })
  };
  /* eslint-enable */
  return (
    <>
      <div className="text-black mb-2">
        <h3 className="text-sm font-semibold">
          Welcome Screen
        </h3>
        <span className="text-xs text-[#909090] font-semibold">
          Set up an introductory screen for guests first visit, with a form to collect their info.
        </span>
      </div>
      <Button variant="bordered" className='!text-[#0BB90B] max-w-[155px] rounded-lg !h-[35px] text-xs !font-semibold border-[#0BB90B] mt-1.5' onClick={showPopupWelcomeScreen}>
        Edit Welcome Screen
      </Button>
      <div className='mt-8'>
        <div className="flex gap-8">
          <div className="text-black mb-2">
            <h3 className="text-sm font-semibold mb-1.5">
              Manually Approve Guest Uploads
            </h3>
            <p className="text-xs text-[#909090] font-semibold">
              Manually approve uploads made by guests before it is shown on <br /> your Slideshow and Digital Album. <span className="text-[#0BB90B]">More Info</span>
            </p>
          </div>
          <Switch name="isManualApprove" defaultSelected={formData.isManualApprove} onValueChange={setIsManualApprove} size="sm" />
        </div>
      </div>
      <div className='mt-8'>
        <div className="text-black mb-2">
          <h3 className="text-sm font-semibold">
            Allowed Media Types
          </h3>
          <span className="text-xs text-[#909090] font-semibold">
            Control what type of media can be uploaded to your event.
          </span>
        </div>
        <div className='flex items-center gap-5 mt-1'>
          <div
            className={`hover:bg-[#0BB90B17] border-2 border-solid hover:border-[#0BB90B] text-center py-2 px-5 w-28 rounded-lg cursor-pointer ${mediaType === 'photo' ? 'bg-[#0BB90B17] border-[#0BB90B]' : 'bg-[#F7F7F7] border-[#F7F7F7]'}`}
            onClick={() => handleClick('photo')}
          >
            <h2 className='text-black text-sm font-semibold'>
              Photos
            </h2>
          </div>
          <div
            className={`hover:bg-[#0BB90B17] border-2 border-solid hover:border-[#0BB90B] text-center py-2 px-5 w-28 rounded-lg cursor-pointer ${mediaType === 'video' ? 'bg-[#0BB90B17] border-[#0BB90B]' : 'bg-[#F7F7F7] border-[#F7F7F7]'}`}
            onClick={() => handleClick('video')}
          >
            <h2 className='text-black text-sm font-semibold'>
              Videos
            </h2>
          </div>
          <div
            className={`hover:bg-[#0BB90B17] border-2 border-solid hover:border-[#0BB90B] text-center py-2 px-5 w-28 rounded-lg cursor-pointer ${mediaType === 'text' ? 'bg-[#0BB90B17] border-[#0BB90B]' : 'bg-[#F7F7F7] border-[#F7F7F7]'}`}
            onClick={() => handleClick('text')}
          >
            <h2 className='text-black text-sm font-semibold'>
              Text
            </h2>
          </div>
        </div>
      </div>
      <div className='mt-8'>
        <div className="text-black mb-2">
          <h3 className="text-sm font-semibold">
            Digital Album Permissions
          </h3>
          <span className="text-xs text-[#909090] font-semibold">
            Control how guests can interact with your event’s digital album.
          </span>
        </div>
        <div className='flex items-center gap-5 mt-1'>
          <div
            className={`hover:bg-[#0BB90B17] border-2 border-solid hover:border-[#0BB90B] p-5 rounded-xl w-1/4 cursor-pointer ${permissions === '1' ? 'bg-[#0BB90B17] border-[#0BB90B]' : 'border-[#F7F7F7] bg-[#F7F7F7]'}`}
            onClick={() => selectedPermissions('1')}
          >
            <h2 className='text-black text-sm font-semibold mb-7'>
              View & Upload
            </h2>
            <p className='text-xs text-[#909090]'>
              Guests can upload new photos & view existing ones
            </p>
          </div>
          <div
            className={`hover:bg-[#0BB90B17] border-2 border-solid hover:border-[#0BB90B] p-5 rounded-xl w-1/4 cursor-pointer ${permissions === '2' ? 'bg-[#0BB90B17] border-[#0BB90B]' : 'border-[#F7F7F7] bg-[#F7F7F7]'}`}
            onClick={() => selectedPermissions('2')}
          >
            <h2 className='text-black text-sm font-semibold mb-7'>
              View Only
            </h2>
            <p className='text-xs text-[#909090]'>
              Guests can view existing photos but can not upload new ones
            </p>
          </div>
          <div
            className={`hover:bg-[#0BB90B17] border-2 border-solid hover:border-[#0BB90B] p-5 rounded-xl w-1/4 cursor-pointer ${permissions === '3' ? 'bg-[#0BB90B17] border-[#0BB90B]' : 'border-[#F7F7F7] bg-[#F7F7F7]'}`}
            onClick={() => selectedPermissions('3')}
          >
            <h2 className='text-black text-sm font-semibold mb-7'>
              Upload Only
            </h2>
            <p className='text-xs text-[#909090]'>
              Guests can upload new photos but can not view existing ones.
            </p>
          </div>
        </div>
      </div>
      <div className='mt-8 mb-5'>
        <div className="flex gap-8">
          <div className="text-black mb-2">
            <h3 className="text-sm font-semibold mb-1.5">
              Disable Guests Download
            </h3>
            <p className="text-xs text-[#909090] font-semibold">
              Hide the download button to prevent guests from <br /> downloading photos/videos in the album page.
            </p>
          </div>
          <Switch name="isDisableGuestsDownload" defaultSelected={formData.isDisableGuestsDownload} onValueChange={setDisableGuestsDownload} size="sm" />
        </div>
      </div>
      <Button
        className='!text-black max-w-[125px] rounded-lg !h-[35px] text-xs !font-semibold !text-white border-[#0BB90B] bg-[#0BB90B] mt-1.5'
        isDisabled={loading}
        onClick={handleSubmit}
      >
        {loading ? (
          <span>Loading...</span>
        ) : (
          <span>Update</span>
        )}
      </Button>
      <ModalWelcomeScreenComponent />
    </>
  );
};

export default ModerationDashboardTabComponent;
