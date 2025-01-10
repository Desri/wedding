'use client';
import React, { useContext } from 'react';
import {
  Button,
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure
} from "@nextui-org/react";
import { AppContext } from '../../../contexts/ContextProviders';

const ModalPaymentComponent =  () => {
  const {onOpenChange} = useDisclosure();
  const { state, dispatch } = useContext(AppContext);
  /* eslint-disable */
  const closeModal = () => {
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
                <Button variant="bordered" className='rounded-lg mx-auto w-24 h-10 bg-[#0bb90b] text-white border-[#0BB90B]' onClick={closeModal}>
                  Ok
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
