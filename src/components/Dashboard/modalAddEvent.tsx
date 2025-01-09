'use client';
import React, { useContext, useState } from 'react';
import {parseDate} from "@internationalized/date";
import {
  Button,
  Modal,
  ModalContent,
  ModalBody,
  Input,
  DatePicker,
  useDisclosure
} from "@nextui-org/react";
import { createEvent } from '../../../services/client/event';
import { AppContext } from '../../../contexts/ContextProviders';

const ModalAddEventComponent =  () => {
  const {onOpenChange} = useDisclosure();
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(parseDate("2024-04-04"));
  const [title, setTitle] = useState('');
  const [eventType, setEventType] = useState('');
  const { state, dispatch } = useContext(AppContext);
  /* eslint-disable */
  const handleClick = (newValue: any) => {
    setEventType(newValue);
  };

  const handleChange = (e: any) => {
    const { value } = e.target;
    setTitle(value)
  };

  const handleSubmit = () => {
      const payload = {
        eventType,
        title,
        value
      }
      console.log("Form Data:", payload);
  
      createEvent({ payload })
      .then((res: any) => {
        console.log('Check', res.data)
        dispatch({
          type: 'SET_POPUP_EVENT',
          value: false
        });
        // if(res.success) {
        //   setLoading(false);
        //   setCookie('isAuth', true);
        //   setCookie('_FotoSlideToken', res.token);
        //   router.push('/dashboard');
        // }
      })
      .catch((err: any) => {
        setLoading(false);
        console.log('Error', err)
      })
      // Hit API
    };
  /* eslint-enable */
  return (
    <>
      <Modal isOpen={state.showPopupEvent} size="2xl" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className='p-7'>
                <div className="text-black">
                  <h3 className="text-sm font-semibold">
                    Create New Event
                  </h3>
                  <div className="text-black my-8">
                    <h3 className="text-sm font-semibold">
                      Add New Event
                    </h3>
                    <span className="text-xs text-[#909090] font-semibold">
                      What is the event title?
                    </span>
                    <Input
                      type="text"
                      radius="sm"
                      name="title"
                      value={title}
                      onChange={handleChange}
                      placeholder="i.e - Dara & Arifin Weddings"
                      className="mt-3 w-96 border border-solid border-[#dddddd] rounded-md"
                    />
                  </div>
                  <div className="text-black mb-8">
                    <h3 className="text-sm font-semibold">
                      When does it happen?
                    </h3>
                    <span className="text-xs text-[#909090] font-semibold">
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
                  <div className="text-black mb-8">
                    <h3 className="text-sm font-semibold">
                      Event Type
                    </h3>
                    <span className="text-xs text-[#909090] font-semibold">
                      We’ll adjust the experience according to your event type.
                    </span>


                    <div className='flex items-center gap-5 mt-1.5'>
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
                    className='!text-black max-w-[125px] rounded-lg !h-[35px] text-xs !font-semibold !text-white border-[#0BB90B] bg-[#0BB90B]'
                    onPress={onClose}
                    onClick={handleSubmit}
                  >
                    {loading ? (
                      <span>Loading...</span>
                    ) : (
                      <span>Create Event</span>
                    )}
                  </Button>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalAddEventComponent;
