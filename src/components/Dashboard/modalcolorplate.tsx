'use client';
import React, { useState, useContext } from 'react';
import ColorPicker from 'react-pick-color';
import {
  Button,
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure
} from "@nextui-org/react";
import { AppContext } from '../../../contexts/ContextProviders';

const ModalColorPlateComponent =  () => {
  const { state, dispatch } = useContext(AppContext);
  const {onOpenChange} = useDisclosure();
  const [color, setColor] = useState('#fff');
  
  /* eslint-disable */
  const hidePopupColorPlate = () => {
    dispatch({
      type: 'SET_POPUP_COLOR_PLATE',
      value: false
    });
  }
  /* eslint-enable */
  return (
    <>
      <Modal hideCloseButton={true} isOpen={state.showPopupColorPlate} size="sm" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className='p-3'>
                <ColorPicker color={color} onChange={color => setColor(color.hex)} className='!w-full ssssssssssssssssss' />
                <Button variant="bordered" className='!text-[#0BB90B] mx-auto max-w-[155px] rounded-lg !h-[35px] text-xs !font-semibold border-[#0BB90B] mt-1.5' onClick={hidePopupColorPlate}>
                  Submit
                </Button>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalColorPlateComponent;
