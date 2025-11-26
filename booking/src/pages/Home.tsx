import NavbarDemo from "@/features/DemoNavbar";
import PaymentForm from "@/features/PaymentForm";
import coverImage from "@/assets/imgs/cover.jpg";

export default function Home() {
  return (
    <>
      <div className="min-h-screen  flex flex-col items-center ">
        <NavbarDemo />
        <div
          className=" w-full min-h-screen bg-center bg-no-repeat bg-[length:100%_100%] bg-fixed  "
          style={{ backgroundImage: `url(${coverImage})` }}
        >
          <div className="w-full lg:w-1/2">
            <PaymentForm />
          </div>
        </div>
      </div>
    </>
  );
}
