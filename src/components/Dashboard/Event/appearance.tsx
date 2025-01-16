'use client';
import React, { useContext, useState, useEffect } from 'react';
import {
  Input,
  Button
} from "@nextui-org/react";
import { usePathname } from 'next/navigation';
import { updateAppearance } from '../../../../services/client/event';
import { AppContext } from '../../../../contexts/ContextProviders';
import ModalBackgroundTextComponent from '../modalbackgroundtext';
import ModalColorPlateComponent from '../modalcolorplate';

const AppearanceDashboardTabComponent = () => {
  const { state, dispatch } = useContext(AppContext);
  const pathname = usePathname();
  const lastSegment = pathname.split('/').filter(Boolean).pop();
  const [caption, setCaption] = useState('');
  const [language, setLanguage] = useState('');
  const [loading, setLoading] = useState(false);

  /* eslint-disable */
  useEffect(() => {
    if (state.showDetailEvent) {
      setCaption(state.showDetailEvent.appearance.caption)
      setLanguage(state.showDetailEvent.appearance.language)
    }
  }, [state.showDetailEvent]);

  const selectTheme = (newValue: any) => {
    setCaption(newValue);
  };

  const handleChange = (e: any) => {
    const { value } = e.target;
    setLanguage(value)
  };

  const showPopupBackgroundText = () => {
    dispatch({
      type: 'SET_POPUP_BACKGROUND_TEXT',
      value: true
    });
  }

  const showPopupColorPlate = () => {
    dispatch({
      type: 'SET_POPUP_COLOR_PLATE',
      value: true
    });
  }

  const handleSubmit = () => {
    setLoading(true);
    const payload = {
      caption: caption,
      language: language,
      eventId: lastSegment
    }
    updateAppearance({ payload })
    .then((res: any) => {
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
      <div className='grid grid-cols-2 gap-5'>
        <div>
          <div className="text-black mb-8">
            <h3 className="text-sm font-semibold">
              Event Logo
            </h3>
            <p className="text-xs text-[#909090] font-semibold sm:mr-16">
              Brand your event with a logo that will be publically shown through out the event. For best results, use square photos (1:1).
            </p>
          </div>
          <div className="text-black mb-8">
            <h3 className="text-sm font-semibold">
              Display Language
            </h3>
            <span className="text-xs text-[#909090] font-semibold">
              Localize the experience according your audience language.
            </span>
            <Input
              type="text"
              radius="sm"
              name="language"
              value={language}
              onChange={handleChange}
              placeholder='English'
              className="mt-3 w-96 border border-solid border-[#dddddd] rounded-md"
            />
          </div>

          <div className="text-black mb-8">
            <h3 className="text-sm font-semibold">
              Caption Theme
            </h3>
            <p className="text-xs text-[#909090] font-semibold sm:mr-16">
              Choose a theme color for your brand. We’ll use that throughout the public pages (Photo Wall, Album, etc.)
            </p>
            <div className='mt-2.5'>
              <Button variant="bordered" className='!text-[#0BB90B] max-w-[155px] rounded-lg !h-[35px] text-xs !font-semibold border-[#0BB90B] mt-1.5' onClick={showPopupColorPlate}>
                Edit Color
              </Button>
            </div>
          </div>
        </div>
        <div>
          <div className="text-black mb-8">
            <h3 className="text-sm font-semibold">
              Caption Theme
            </h3>
            <span className="text-xs text-[#909090] font-semibold">
              Change the theme color of the photo/video caption (if it has one)
            </span>
            <div className='flex items-center gap-5 mt-1.5'>
              <div
                className={`hover:bg-[#0BB90B17] border-2 border-solid hover:border-[#0BB90B] text-center py-2 px-2 rounded-lg w-28 cursor-pointer ${caption === 'light' ? 'bg-[#0BB90B17] border-[#0BB90B]' : 'border-[#F7F7F7] bg-[#F7F7F7]'}`}
                onClick={() => selectTheme('light')}
              >
                <h2 className='text-black text-sm font-semibold'>
                  Light
                </h2>
              </div>
              <div
                className={`hover:bg-[#0BB90B17] border-2 border-solid hover:border-[#0BB90B] text-center py-2 px-2 rounded-lg w-28 cursor-pointer ${caption === 'dark' ? 'bg-[#0BB90B17] border-[#0BB90B]' : 'border-[#F7F7F7] bg-[#F7F7F7]'}`}
                onClick={() => selectTheme('dark')}
              >
                <h2 className='text-black text-sm font-semibold'>
                  Dark
                </h2>
              </div>
            </div>
          </div>

          <div className="text-black mb-2">
            <h3 className="text-sm font-semibold">
              Text Post Backgrounds
            </h3>
            <span className="text-xs text-[#909090] font-semibold">
              Customize the backgrounds that can be used for uploading Text Posts.
            </span>
          </div>
          <Button variant="bordered" className='!text-[#0BB90B] max-w-[155px] rounded-lg !h-[35px] text-xs !font-semibold border-[#0BB90B] mt-1.5' onClick={showPopupBackgroundText}>
            Edit Background
          </Button>
        </div>
      </div>

      <ModalColorPlateComponent />
      <ModalBackgroundTextComponent />

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

export default AppearanceDashboardTabComponent;
