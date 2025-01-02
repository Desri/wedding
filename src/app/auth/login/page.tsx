import LoginComponent from "@/components/Login";

export default function Login() {
  return (
    <>
      <div className="bg-[#f8fafd] h-screen">
        <div className="mx-auto bg-white h-screen rounded-lg sm:w-2/5 px-3">
          <LoginComponent />
        </div>
      </div>
    </>
  );
}
