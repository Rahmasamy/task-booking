import BookNowPopUp from "@/components/custom-components/BookNowPopUp";
import InputField from "@/components/custom-components/InputField";
import { RabighLogo } from "@/components/icons/RabighLogo ";
import { Button } from "@/components/ui/button"; // Shadcn Button
import { useState } from "react";

const PaymentForm = () => {
  const [confirmPopUp ,setConfirmPopup] = useState(false)
  return (
      <>
         <div className="bg-[#FFFFFFCC] p-4  shadow-md w-[80%] flex flex-col justify-start items-center min-h-lvh">
        <RabighLogo />
        <h2 className="text-lg font-bold mb-4">Payment Method Selection</h2>
        <div className="flex flex-col gap-4 w-full">
          <InputField label="Card Number" placeholder="Credit / Debit Card" />
          <InputField label="Name on Card" placeholder="Name on Card" />
          <InputField label="Expiration Date (MM/YY)" placeholder="MM/YY" />
          <InputField label="CVV" placeholder="CVV" />
  
          <p className="text-xs text-[#8B9D83] mt-2 flex items-center gap-2">
            <span>
              <svg
                width="15"
                height="20"
                viewBox="0 0 26 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 26.0385V21.2692M19 15.3077V6.96154C19 5.38044 18.3679 3.8641 17.2426 2.74609C16.1174 1.62809 14.5913 1 13 1C11.4087 1 9.88258 1.62809 8.75736 2.74609C7.63214 3.8641 7 5.38044 7 6.96154V15.3077M1 29.6154V17.6923C1 17.0599 1.25286 16.4533 1.70294 16.0061C2.15303 15.5589 2.76348 15.3077 3.4 15.3077H22.6C23.2365 15.3077 23.847 15.5589 24.2971 16.0061C24.7471 16.4533 25 17.0599 25 17.6923V29.6154C25 30.2478 24.7471 30.8544 24.2971 31.3016C23.847 31.7488 23.2365 32 22.6 32H3.4C2.76348 32 2.15303 31.7488 1.70294 31.3016C1.25286 30.8544 1 30.2478 1 29.6154Z"
                  stroke="#8B9D83"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Your payment is secured by 256-bit SSL Encryption
          </p>
  
          <div className="flex gap-2 mt-4">
            <Button className="flex-1">
              <span>
                <img
                  src="https://thumbs.dreamstime.com/b/paypal-logo-paypal-logo-white-background-vector-format-avaliable-124289807.jpg"
                  alt="paypal icon"
                  className="w-20 h-9 object-cover"
                />
                
              </span>
            </Button>
            <Button className="flex-1">Google Pay / Apple Pay</Button>
          </div>
  
          <div className="flex py-4 flex-col items-center gap-4">
            <h1 className="font-bold">Cancellation Policy & Terms</h1>
            <div className="max-w-md mx-auto  rounded-lg  space-y-4">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-gray-600 border-gray-300 rounded focus:ring-2 focus:ring-green-500"
                />
                Billing address is the same as guest address
              </label>
  
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-gray-600 border-gray-300 rounded focus:ring-2 focus:hover:bg-[#6f7e69]"
                />
                I have read and agree to the Booking Terms & Conditions and the
                Cancellation
              </label>
  
              <button className="w-full py-2 px-4 bg-[#8B9D83] text-white rounded hover:bg-[#6f7e69] transition"
              onClick={() => setConfirmPopup(true)}
              >
                Pay Now - $429.00
              </button>
  
              <p className="text-center text-gray-400 text-sm">Need Help?</p>
            </div>
          </div>
        </div>
      </div>
      {
        confirmPopUp && (
            <BookNowPopUp onClose={() => setConfirmPopup(false)} />
        )
  
      }
      </>
   
  );
};

export default PaymentForm;
