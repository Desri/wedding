'use client';
import React, { useContext, useState } from 'react';
import {
  Button,
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure
} from "@nextui-org/react";
import { AppContext } from '../../../contexts/ContextProviders';
import { addPlan, getProfile } from '../../../services/client/auth';

const ModalPaymentComponent =  () => {
  const {onOpenChange} = useDisclosure();
  const { state, dispatch } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  /* eslint-disable */
  const closeModal = () => {
    setLoading(true);
    const payload = {
      plan: state.showPopupPayment?.Plan
    }
    addPlan({ payload })
    .then((res: any) => {
      if(res.success) {
        setLoading(false);
        fetchProfile();
      }
    })
    .catch((err: any) => {
      setLoading(false);
      console.log('Error', err)
    })
  };

  const fetchProfile = () => {
    getProfile()
    .then((res: any) => {
      dispatch({
        type: 'SET_PROFILE',
        value: {
          Id: res.result._id,
          Email: res.result.email,
          Fullname: res.result.fullname,
          Plan: res.result.plan
        },
      });
      dispatch({
        type: 'SET_POPUP_PAYMENT',
        value: {
          Status: false,
          Plan: ''
        },
      });
      dispatch({
        type: 'SET_POPUP_EVENT',
        value: true
      });
    })
    .catch((err: any) => {
      console.log('Check Error', err)
    });
  };
  /* eslint-enable */
  return (
    <>
      <Modal hideCloseButton={true} isOpen={state.showPopupPayment?.Status} size="md" onOpenChange={onOpenChange}>
        <ModalContent>
          <>
            <ModalBody className='p-7'>
              <div className='text-center my-3'>
                <p className='text-[#909090] mb-5'>
                  Anda memilih plan: <span className='text-bold capitalize'>{state.showPopupPayment?.Plan}</span>
                </p>
                <Button
                  variant="bordered"
                  className='rounded-lg mx-auto w-24 h-10 bg-[#0bb90b] text-white border-[#0BB90B]'
                  isDisabled={loading}
                  onClick={closeModal}
                >
                  {loading ? (
                    <span>Loading...</span>
                  ) : (
                    <span>Ok</span>
                  )}
                </Button>
              </div>
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalPaymentComponent;
