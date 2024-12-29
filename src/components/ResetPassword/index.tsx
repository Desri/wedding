'use client';
import {Input, Button} from "@nextui-org/react";

const ResetPasswordComponent = () => {
  return (
    <>
      <div className="sm:px-6 xl:px-16 py-14">
        <h2 className="font-semibold text-lg text-black mb-4">
          Reset Password
        </h2>
        <p className="text-sm text-black mb-3">
          Please enter a new password for your account to replace the current one. Ensure it is strong and unique to maintain the security of your account.
        </p>
        <Input type="password" radius="sm" placeholder="Password" className="!w-full mt-3 w-96 border border-solid border-[#dddddd] rounded-md" />
        <Button className='!text-black w-full rounded-lg !h-[39px] text-sm !font-semibold !text-white border-[#0BB90B] bg-[#0BB90B] mt-7'>
          Submit
        </Button>
      </div>
    </>
  );
};

export default ResetPasswordComponent;
