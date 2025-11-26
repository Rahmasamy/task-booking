import BookingImg from "@/assets/imgs/booking-img.jpg";
import machine from "@/assets/icons/maxhine.png";
import sutiable from "@/assets/icons/sut.png";
import mapIcon from "@/assets/icons/map-placeholder.png";
import { RabighLogo } from "../icons/RabighLogo ";
import { Clover } from "lucide-react";

export default function BookNowPopUp({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50 px-4 overflow-auto">
      <div className="relative bg-[#FAF6F0] rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 md:top-6 p-2 hover:bg-gray-200 rounded-full transition"
        >
          <Clover size={24} />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-b from-amber-50 to-[#FAF6F0] py-8 text-center border-b border-gray-200">
          <div className="flex justify-center mb-4">
            <RabighLogo />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-black-900">
            Your Booking Is Confirmed!
          </h1>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Thank you for choosing to stay with us
          </p>
        </div>

        {/* Content */}
        <div className="p-4 md:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm md:text-base">
            {/* Booking Summary */}
            <div className="flex flex-col gap-3">
              <div className="bg-white space-y-3 p-4 md:p-5 rounded-lg shadow-sm">
                <h2 className="font-semibold text-lg md:text-xl text-black">
                  Booking Summary
                </h2>
                <div className="rounded-lg pb-2 shadow-sm">
                  <p className="text-gray-500 text-xs md:text-sm">
                    Booking Confirmation
                  </p>
                  <p className="font-medium text-sm md:text-base">
                    #FSK-981234 Mr. Jone Dee
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-gray-600 bg-white p-4 md:p-5 rounded-lg">
                <p className="font-medium">Primary Guest</p>
                <p>
                  Check in:{" "}
                  <span className="font-semibold">Sunday, December 15, 2025</span>
                </p>
                <p>
                  Check out:{" "}
                  <span className="font-semibold">Thursday, December 19, 2025</span>
                </p>
              </div>
            </div>

            {/* Room & Stay Details */}
            <div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden p-4 md:p-5">
                <h2 className="font-semibold text-lg md:text-xl text-black">
                  Room & Stay Details
                </h2>
                <img
                  src={BookingImg}
                  alt="Room"
                  className="w-full h-40 md:h-48 object-cover rounded-lg my-2"
                />
                <div className="pt-4 space-y-1 text-gray-700 text-sm md:text-base">
                  <p>
                    <span className="font-medium">Room Type:</span> Special Room (Men’s Section)
                  </p>
                  <p>
                    <span className="font-medium">Nights:</span> 4 nights
                  </p>
                  <p>
                    <span className="font-medium">Guests:</span> 2 Adults, 1 Child
                  </p>
                </div>
              </div>
            </div>

            {/* Confirmed Add-on Services */}
            <div className="space-y-4 col-span-1 md:col-span-2 bg-white shadow-sm p-4 md:p-5 rounded-lg">
              <h2 className="font-bold text-lg md:text-xl text-black flex items-center gap-2">
                Confirmed Add-on Services
              </h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-2 md:p-3 rounded-lg bg-gray-50">
                  <img src={machine} alt="Laundry" className="w-7 h-7 md:w-8 md:h-8" />
                  <p className="font-medium text-gray-700">Laundry service</p>
                </div>
                <div className="flex items-center gap-3 p-2 md:p-3 rounded-lg bg-gray-50">
                  <img src={sutiable} alt="Porter" className="w-7 h-7 md:w-8 md:h-8" />
                  <p className="font-medium text-gray-700">Porter service</p>
                </div>
              </div>
            </div>

            {/* Payment Summary */}
            <div className="bg-white col-span-1 md:col-span-2 p-4 md:p-5 rounded-lg shadow-sm">
              <h2 className="font-bold text-lg md:text-xl text-black">Payment Summary</h2>
              <div className="rounded-lg p-4 md:p-5 shadow-sm border border-gray-100 space-y-2">
                <p className="text-gray-700 text-sm md:text-base">
                  Total Payment Cost: <span className="font-semibold">3,000 SAR</span>
                </p>
                <p className="text-gray-700 text-sm md:text-base">
                  Payment Method: <span className="font-semibold">Credit Card</span>
                </p>
              </div>

              <div className="mt-4 flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                <div className="flex flex-col items-center md:items-start">
                  <img
                    src={mapIcon}
                    alt="Map"
                    className="w-24 h-24 rounded-lg shadow mb-2 md:mb-0"
                  />
                  <a
                    href="#"
                    className="text-gray-700 font-medium underline text-sm md:text-base"
                  >
                    Get Directions →
                  </a>
                </div>
                <div>
                  <h3 className="font-bold text-black text-sm md:text-base mb-1">
                    Important Notes
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base">
                    Check in Time: <span className="font-semibold">03:00 PM</span>
                  </p>
                  <p className="text-gray-700 text-sm md:text-base">
                    Check out Time: <span className="font-semibold">11:30 AM</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
            <button className="px-10 py-3 md:py-4 bg-[#8B9D83] text-white font-semibold rounded-lg hover:bg-amber-800 transition shadow-md">
              Print Confirmation
            </button>
            <button className="px-10 py-3 md:py-4 bg-[#8B9D83] text-white font-semibold rounded-lg hover:bg-gray-300 transition">
              Get QR Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
