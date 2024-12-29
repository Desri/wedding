import ResetPasswordComponent from "@/components/ResetPassword";

export default function ResetPassword() {
  return (
    <>
      <div className="bg-[#f8fafd] flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        <div className="mx-auto bg-white sh-screen rounded-xl w-2/5 px-3">
          <ResetPasswordComponent />
        </div>
      </div>
    </>
  );
}
