// import Image from "next/image";
import UploadComponent from "@/components/Upload";

export default function uploadImage() {
  return (
    <div className="max-w-md mx-auto mix-blend-multiply bg-[#909090]">
      <h1 className="text-black text-2xl">
        <UploadComponent />
      </h1>
    </div>
  );
}
