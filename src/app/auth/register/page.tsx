import RegisterComponent from "@/components/Register";

export default function Register() {
  return (
    <>
      <div className="bg-[#f8fafd] h-screen">
        <div className="mx-auto bg-white h-screen rounded-lg sm:w-2/5 px-3">
          <RegisterComponent />
        </div>
      </div>
    </>
  );
}
