import ForgotPasswordComponent from "@/components/ForgotPassword";

export default function Home() {
  return (
    <>
      <div className="bg-[#f8fafd] h-screen">
        <div className="mx-auto bg-white rounded-lg w-2/5 px-3">
          <ForgotPasswordComponent />
        </div>
      </div>
    </>
  );
}
