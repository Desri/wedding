'use client';
import React, { useContext, useState, useEffect } from 'react';
import {
  Input,
  Button
} from "@nextui-org/react";
import 'file-upload-with-preview/dist/style.css';
import { usePathname } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import { getDetailEvent, getEvent, updateAppearance, uploadImage } from '../../../../services/client/event';
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
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [preview, setPreview] = useState<any>(null);

  /* eslint-disable */
  useEffect(() => {
    // const upload = new FileUploadWithPreview('my-unique-id');
    if (state.showDetailEvent) {
      setCaption(state.showDetailEvent.appearance.caption)
      setLanguage(state.showDetailEvent.appearance.language)
      setPreview(state.showDetailEvent.appearance.fileUrl)
      dispatch({
        type: 'SET_COLOR_PLATE',
        value: state.showDetailEvent.appearance.colorPlate
      });
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

  const handleSubmit = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('upload_preset', 'ml_default');
    uploadImage({ formData })
    .then((res: any) => {
      const payload = {
        fileUrl: res.secure_url,
        originalFilename: res.original_filename,
        assetId: res.asset_id,
        publicId: res.public_id,
        caption: caption,
        language: language,
        colorPlate: state.colorPlate,
        eventId: lastSegment
      }
      updateAppearance({ payload })
      .then((res: any) => {
        setLoading(false);
        getDetail()
        getListEvent()
      })
      .catch((err: any) => {
        setLoading(false);
        console.log('Error', err)
      })
    })
    .catch((err: any) => {
      setLoading(false);
      console.log('Error', err)
    })
  };

  const getDetail = async () => {
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
  }

  const getListEvent = async () => {
    getEvent()
    .then((res: any) => {
      dispatch({
        type: 'SET_LIST_EVENT',
        value: res.data
      });
    })
    .catch((err: any) => {
      console.log('Check Error', err)
    });
  }

  // Handle file selection
  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type === 'image/png' || file.type === 'image/jpeg') {
        setSelectedFile(file);

        // Generate a preview URL
        const previewUrl = URL.createObjectURL(file);
        setPreview(previewUrl);
      } else {
        toast("Uppsss something went wrong!");
      } 
    }
  };

  const removeImage = () => {
    URL.revokeObjectURL(preview);
    setPreview(null);
    setSelectedFile(null);
  }
  /* eslint-enable */
  return (
    <>
      <div className='grid grid-cols-2 gap-14'>
        <div>
          <div className="text-black mb-8">
            <h3 className="text-sm font-semibold">
              Event Logo
            </h3>
            <div className='flex justify-between'>
              <div className='w-3/5'>
                <p className="text-xs text-[#909090] font-semibold mb-6">
                  Brand your event with a logo that will be publically shown through out the event. For best results, use square photos (1:1).
                </p>
                <div className='flex items-center'>
                  <div>
                    <label
                      htmlFor="file-upload"
                      className="cursor-pointer text-[#0BB90B] w-[100px] rounded-lg h-[35px] text-xs font-semibold border-2 px-6 py-2 border-[#0BB90B] transition"
                    >
                      Upload
                    </label>
                    <input
                      id="file-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </div>
                  <div>
                    <p className='text-xs text-[#909090] ml-2'>
                      .JPG/.PNG Accepted
                    </p>
                  </div>
                </div>
              </div>
              <div className='w-2/5 pl-5'>
                {preview && (
                  <div className='text-center w-[90px] h-[90px] rounded-lg border-solid border border-[#dddddd]'>
                    <img
                      src={preview}
                      alt="Preview"
                      className='object-cover h-full w-full rounded-lg mb-1.5'
                    />
                    <p className='text-xs text-[#909090] cursor-pointer underline' onClick={removeImage}>Remove</p>
                  </div>
                )}
              </div>
            </div>
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
            <div
              className={`mt-2.5 cursor-pointer border rounded-md w-max ${state.colorPlate !== null ? 'pr-4' : 'bg-[#f7f7f7]'}`}
              onClick={showPopupColorPlate}
            >
              <div
                className={`flex items-center ${state.colorPlate !== null ? '' : 'px-3 py-1.5'}`}
              >
                {state.colorPlate !== null && (
                  <div
                    className={`w-[32px] h-[32px] ${state.colorPlate ? 'mr-3' : ''}`}
                    style={{ backgroundColor: state.colorPlate || 'transparent' }}
                  ></div>
                )}
                <div>
                  <p className='text-sm'>
                    {state.colorPlate === null ? 'Select color' : state.colorPlate}
                  </p>
                </div>
              </div>
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
      <ToastContainer />
    </>
  );
};

export default AppearanceDashboardTabComponent;
