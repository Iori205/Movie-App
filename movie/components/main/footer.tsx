import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
export const Footer = () => {
  return (
    <footer className="bg-indigo-700 max-h-[280px] max-w-[1440px] m-auto mt-[51px]">
      <div className="px-[80px] py-[40px] flex justify-between">
        <div>
          <div className="flex gap-2 pb-3">
            <img className="w-[16px] h-[16px]" src="images/film.png" alt="" />
            <h2 className="text-base font-bold leading-4 text-[#FAFAFA]">
              Movie Z
            </h2>
          </div>
          <p className="text-[#FAFAFA] font-normal text-sm leading-5">
            © 2024 Movie Z. All Rights Reserved.
          </p>
        </div>

        <div className="flex gap-[96px]">
          <div>
            <p className="text-[#FAFAFA]">Contact Information</p>
            <div className="flex items-center gap-3 pt-3">
              <MdOutlineMail color="white" width={16} height={16} />
              <div>
                <div className="text-[#FAFAFA]">Email:</div>
                <div className="text-[#FAFAFA]">support@movieZ.com</div>
              </div>
            </div>
            <div className="flex items-center gap-3 pt-3">
              <FaPhoneAlt color="white" width={16} height={16} />
              <div>
                <div className="text-[#FAFAFA]">Phone:</div>
                <div className="text-[#FAFAFA]">+976 (11) 123-4567</div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-[#FAFAFA] font-normal pb-3">Follow us</p>
            <div className="flex gap-3">
              <p className="text-[#FAFAFA] text-sm font-medium leading-5">
                Facebook
              </p>
              <p className="text-[#FAFAFA] text-sm font-medium leading-5">
                Instagram
              </p>
              <p className="text-[#FAFAFA] text-sm font-medium leading-5">
                Twitter
              </p>
              <p className="text-[#FAFAFA] text-sm font-medium leading-5">
                Youtube
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
