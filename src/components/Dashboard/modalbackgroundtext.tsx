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

const ModalBackgroundTextComponent =  () => {
  const { state, dispatch } = useContext(AppContext);
  const {onOpenChange} = useDisclosure();
  
  /* eslint-disable */
  const hidePopupBackgroundText = () => {
    dispatch({
      type: 'SET_POPUP_BACKGROUND_TEXT',
      value: false
    });
  }
  /* eslint-enable */
  return (
    <>
      <Modal hideCloseButton={true} isOpen={state.showPopupBackgroundText} size="3xl" onOpenChange={onOpenChange}>
        <ModalContent>
          <>
            <ModalBody className='p-7'>
              <div className="text-black mb-7">
                <h3 className="text-sm font-semibold mb-1">
                  Text Post Background
                </h3>
                <p className="text-xs text-[#909090] font-semibold">
                  Choose which backgrounds are available for guests to choose from when uploading a Text Post.
                </p>
                
              </div>
              <div className='flex gap-3'>
                <Button className='!text-black max-w-[125px] rounded-lg !h-[35px] text-xs !font-semibold !text-white border-[#0BB90B] bg-[#0BB90B] mt-1.5'>
                  Save
                </Button>
                <Button variant="bordered" className='!text-[#000000] max-w-[100px] rounded-lg !h-[35px] text-xs !font-semibold border-[#DDDDDD] mt-1.5' onClick={hidePopupBackgroundText}>
                  Cancel
                </Button>
              </div>
              
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalBackgroundTextComponent;
