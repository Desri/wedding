'use client';
import {
  Button,
  Table,
  TableHeader,
  TableColumn,
  Modal,
  ModalContent,
  ModalBody,
  TableBody,
  TableRow,
  TableCell,
  Input,
  useDisclosure
} from "@nextui-org/react";

const CollaboratorsDashboardTabComponent = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
    <>
      <div className="text-black mb-2">
        <h3 className="text-sm font-semibold">
          Invite
        </h3>
        <span className="text-xs text-[#909090] font-semibold">
          Invite other members who can access and manage this event.
        </span>
      </div>
      <Button variant="bordered" className='!text-[#0BB90B] max-w-[100px] rounded-lg !h-[37px] text-xs !font-semibold border-[#0BB90B] mt-1.5' onPress={onOpen}>
        Invite
      </Button>
      <div className='mt-8'>
        <Table removeWrapper aria-label="Example static collection table" className='max-w-[435px]'>
          <TableHeader>
            <TableColumn className='font-semibold text-sm'>Email</TableColumn>
            <TableColumn className='font-semibold text-sm'>Role</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell className='text-[#909090] font-semibold'>Johndoe@gmail.com</TableCell>
              <TableCell className='text-[#909090] font-semibold'>OWNER</TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell className='text-[#909090] font-semibold'>Daviddoe@gmail.com</TableCell>
              <TableCell className='text-[#909090] font-semibold'>ADMIN</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className='p-7'>
                <div className="text-black mb-7">
                  <h3 className="text-sm font-semibold">
                    Invite
                  </h3>
                  <span className="text-xs text-[#909090]">
                    Share this link with whomever you like:
                  </span>
                  <Input type="text" radius="sm" className="mt-3 w-96 border border-solid border-[#dddddd] rounded-md" />
                </div>
                <Button variant="bordered" className='!text-[#000000] max-w-[100px] rounded-lg !h-[37px] text-xs !font-semibold border-[#DDDDDD] mt-1.5' onPress={onClose}>
                  Cancel
                </Button>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default CollaboratorsDashboardTabComponent;
