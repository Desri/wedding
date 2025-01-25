'use client';
import React, { useContext, useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Button,
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
  Tabs,
  Tab,
  Input,
  DatePicker
} from "@nextui-org/react";
import { usePathname } from 'next/navigation';
import {parseDate} from "@internationalized/date";
import { ToastContainer, toast } from 'react-toastify';
import { AppContext } from '../../../contexts/ContextProviders';
import { getDetailEvent, updateWelcomeScreen, uploadImage } from '../../../services/client/event';

const ModalWelcomeScreenComponent =  () => {
  const { dispatch, state } = useContext(AppContext);
  const {onOpenChange} = useDisclosure();
  const pathname = usePathname();
  const lastSegment = pathname.split('/').filter(Boolean).pop();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(parseDate("2025-01-18"))
  // const { year, month, day } = state.showDetailEvent.welcomeScreen.eventDate;
  // const formattedDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  // const [value, setValue] = useState(parseDate(formattedDate));
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [preview, setPreview] = useState<any>(null);
  
  /* eslint-disable */
  useEffect(() => {
    if (state.showDetailEvent) {
      setTitle(state.showDetailEvent.welcomeScreen.title)
      setPreview(state.showDetailEvent.welcomeScreen.fileUrl)
    }
  }, [state.showDetailEvent]);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setTitle(value)
  };

  const closeModalWelcomeScreen = () => {
    dispatch({
      type: 'SET_POPUP_WELCOME_SCREEN',
      value: false
    });
  };

  const handleSubmit = () => {
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
        title: title,
        eventId: lastSegment,
        eventDate: value
      }
      updateWelcomeScreen({ payload })
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
    })
  };

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
      <Modal hideCloseButton={true} isOpen={state.showPopupWelcomeScreen} size="3xl" onOpenChange={onOpenChange}>
        <ModalContent>
          <>
            <ModalBody className='p-7'>
              <div className="text-black smb-7">
                <h3 className="text-sm font-semibold">
                  Welcome Screen Settings
                </h3>
                <span className="text-xs text-[#909090]">
                  Set up a welcome screen that appears once for first-time guests.
                </span>
                <div className='flex'>
                  <div className='w-3/5'>
                    <Tabs aria-label="Options" variant="underlined" className="tabs-event !ml-0 !mt-5">
                      <Tab key="cover" title="Cover">
                        <div className="text-black mb-8">
                          <h3 className="text-sm">
                            Title
                          </h3>
                          <span className="text-xs text-[#909090] font-semibold">
                            What is the event title?
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
                          <h3 className="text-sm">
                            When does it happen?
                          </h3>
                          <span className="text-xs text-[#909090] font-semibold">
                            Set when your event is scheduled to start.
                          </span>
                          <DatePicker
                            className="mt-3 max-w-[180px] border border-solid border-[#dddddd] rounded-md input-date"
                            value={value}
                            radius="sm"
                            // onChange={setValue}
                            onChange={(newValue) => setValue(newValue!)}
                          />
                        </div>

                        <div className='mt-8'>
                          <div className="text-black mb-2">
                            <h3 className="text-sm font-semibold">
                              Background
                            </h3>
                            <span className="text-xs text-[#909090] font-semibold">
                              Set a background for the welcome screen
                            </span>
                            <div className='flex justify-between mt-6'>
                              <div className='w-8/12'>
                                <div className='flex items-center mt-12'>
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
                              <div className='w-4/12 pl-5'>
                                {preview ? (
                                  <div className='text-center w-[90px] h-[90px] rounded-lg border-solid border border-[#dddddd]'>
                                    <img
                                      src={preview}
                                      alt="Preview"
                                      className='object-cover h-full w-full rounded-lg mb-1.5'
                                    />
                                    <p className='text-xs text-[#909090] cursor-pointer underline' onClick={removeImage}>Remove</p>
                                  </div>
                                ) : (
                                  <div className='h-[90px] w-[90px] bg-[#F7F7F7] rounded-lg'>
                                    <img
                                      src="/no-image.png"
                                      alt="Preview"
                                      className='object-cover relative top-6 mx-auto rounded-lg h-[40px] w-[40px]'
                                    />
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Tab>
                      <Tab key="form" title="Guest Form">
                        <p className='text-[#909090] text-sm sm:mr-5'>
                          Create a form to collect guest information before they proceed to your album. Add new fields as needed, or rearrange existing ones by dragging.
                        </p>
                        <div className='sm:mr-5 mt-4 rounded-xl shadow-input py-2 px-3'>
                          <Input
                            key="name"
                            label="Name"
                            placeholder='[Text]'
                            labelPlacement="outside-left"
                            type="text"
                          />
                        </div>
                        <div className='sm:mr-5 mt-4 rounded-xl shadow-input py-2 px-3'>
                          <Input
                            key="email"
                            label="Email"
                            placeholder='[Email]'
                            labelPlacement="outside-left"
                            type="email"
                          />
                        </div>
                        <button className='text-sm w-11/12 font-semibold text-[#0BB90B] rounded-lg text-center mt-7 block py-2.5 border border-dashed border-[#0BB90B] ml-2.5'>
                          Add New Field
                        </button>
                      </Tab>
                    </Tabs>
                  </div>
                  <div className='w-2/5 relative'>
                    <div className='absolutes w-full'>
                      <div>
                        {state.showDetailEvent.welcomeScreen.fileUrl ? (
                          <div
                            className="bg-cover h-[500px] bg-no-repeat"
                            style={{
                              backgroundImage: `url('${
                                state.showDetailEvent.welcomeScreen.fileUrl || '/bg-1.jpg'
                              }')`,
                            }}
                          ></div>
                        ) : (
                          <div className="bg-cover h-[500px] bg-no-repeat bg-[#a5a5a5]"></div>
                        )}
                        <p className='text-center text-[#b4b2b2] text-xs mt-1.5'>
                          this is preview
                        </p>
                      </div>
                    </div>
                    
                    <div className='relative z-10 px-4 text-white'>
                      <div className='absolute bottom-5 w-11/12 mb-2'>
                        <div className="flex items-center justify-between mb-2">
                          <div className='rounded-lg overflow-hidden h-[85px] w-[85px]'>
                            {state.showDetailEvent.appearance.fileUrl ? (
                              <img
                                src={state.showDetailEvent.appearance?.fileUrl}
                                alt="Preview"
                                className='object-cover h-full w-full rounded-lg mb-1.5 h-full w-full'
                              />
                            ) : (
                              <div className='h-[70px] w-[70px] bg-[#F7F7F7] rounded-lg'>
                                <img
                                  src="/no-image.png"
                                  alt="Preview"
                                  className='object-cover relative top-4 mx-auto rounded-lg h-[40px] w-[40px]'
                                />
                              </div>
                            )}
                          </div>
                          <div>
                            <Button color="danger" variant="bordered" className='bg-[#0BB90B] rounded-lg max-w-[80px] !text-xs !h-[33px] text-white border-[#0BB90B] !mr-1.5'>
                              <span className='text-lg'>+</span>Upload
                            </Button>
                          </div>
                        </div>
                        <div className='mb-4 pb-4 border-b border-solid border-[#cecece]'>
                          <h1 className='text-xl font-bold'>
                            {state.showDetailEvent.welcomeScreen?.title}
                          </h1>
                          {state.showDetailEvent.welcomeScreen?.eventDate.day && (
                            <span className='text-sm'>
                              {state.showDetailEvent.welcomeScreen?.eventDate.day}/{state.showDetailEvent.welcomeScreen?.eventDate.month}/{state.showDetailEvent.welcomeScreen?.eventDate.year}
                            </span>
                          )}
                        </div>
                        <p className='text-center text-sm'>
                          230 Photos & Videos
                          <svg 
                            className='mx-auto'
                            xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <Button
                  className='!text-black max-w-[125px] rounded-lg !h-[35px] text-xs !font-semibold !text-white border-[#0BB90B] bg-[#0BB90B] mt-1.5'
                  isDisabled={loading}
                  onClick={handleSubmit}
                >
                  {loading ? (
                    <span>Loading...</span>
                  ) : (
                    <span>Save</span>
                  )}
                </Button>
                <Button
                  variant="bordered"
                  className='!text-[#000000] max-w-[100px] rounded-lg !h-[35px] text-xs !font-semibold border-[#DDDDDD] mt-1.5'
                  onClick={closeModalWelcomeScreen}
                >
                  Cancel
                </Button>
              </div>
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default ModalWelcomeScreenComponent;
