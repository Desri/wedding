// import Image from "next/image";
import FooterComponent from "@/components/footer";
import HomeComponent from "@/components/Home";

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-xl px-3 sm:px-6 xl:px-0">
      <HomeComponent />
      <FooterComponent />
    </div>
  );
}
