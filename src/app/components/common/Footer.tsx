import Image from "next/image";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { IoCall, IoLocationSharp, IoMail } from "react-icons/io5";

export default function Footer() {
  return (
    <>
      {/* MAIN FOOTER */}
      <footer className="w-full bg-[#FFEFEA] pt-14 pb-10 h-">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* LEFT: LOGO + TEXT + SOCIAL */}
            <div className="lg:w-[35%]">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  width={132}
                  height={58}
                  className="object-contain"
                />
              </div>

              <p className="mt-5 text-sm leading-relaxed text-[#4A4A4A]">
                Lorem ipsum dolor sit amet consectetur. Veli nisl mus erat
                adipiscing. Pulvinar sit aliquam ipsum rhoncus turpis.
              </p>

              <p className="mt-8 font-semibold text-[#222222]">
                Social Media
              </p>

              <div className="flex gap-5 mt-4 text-[#E07046]">
                <FaInstagram size={22} />
                <FaFacebookF size={22} />
                <FaTwitter size={22} />
                <FaLinkedinIn size={22} />
              </div>
            </div>

            {/* RIGHT: FOUR COLUMNS */}
            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Company */}
              <div>
                <h3 className="font-semibold text-[#222222] mb-3">Company</h3>
                <ul className="space-y-2 text-sm text-[#4A4A4A]">
                  <li>About us</li>
                  <li>Careers</li>
                  <li>Press</li>
                  <li>News</li>
                </ul>
              </div>

              {/* Social */}
              <div>
                <h3 className="font-semibold text-[#222222] mb-3">Social</h3>
                <ul className="space-y-2 text-sm text-[#4A4A4A]">
                  <li>Twitter</li>
                  <li>LinkedIn</li>
                  <li>Facebook</li>
                  <li>Instagram</li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="font-semibold text-[#222222] mb-3">Legal</h3>
                <ul className="space-y-2 text-sm text-[#4A4A4A]">
                  <li>Terms</li>
                  <li>Privacy</li>
                  <li>Cookies</li>
                  <li>Contact</li>
                </ul>
              </div>

              {/* Contact us */}
              <div>
                <h3 className="font-semibold text-[#222222] mb-3">Contact us</h3>
                <p className="text-sm text-[#4A4A4A] mb-4">
                  Join us on this journey of discovery as we explore the latest
                  trends.
                </p>

                <ul className="space-y-3 text-sm text-[#4A4A4A]">
                  <li className="flex items-center gap-3">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#FBD1C1] text-[#E07046]">
                      <IoCall size={16} />
                    </span>
                    +91 852 876 39200
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#FBD1C1] text-[#E07046]">
                      <IoMail size={16} />
                    </span>
                    example@gmail.com
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#FBD1C1] text-[#E07046] mt-1">
                      <IoLocationSharp size={16} />
                    </span>
                    <span>
                      Hilite Business Park
                      <br />
                      Palazhi, Calicut
                      <br />
                      Kerala, India
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* BOTTOM LINE */}
          <div className="mt-10 pt-4 border-t border-[#f7d3c6] text-center text-sm text-[#666666]">
            © {new Date().getFullYear()} Momentor — All Rights Reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
