import Image from "next/image";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IoCall, IoLocationSharp, IoMail } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="w-full bg-[#FFEFEA] pt-12 py-6 relative">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Column 1 - Logo + Description + Social */}
          <div className="lg:col-span-1">
            <Image src="/images/logo.png" alt="Momentor Logo" width={140} height={50} className="object-contain" />

            <p className="mt-4 text-sm leading-6 text-[#4A4A4A] max-w-xs text-justify">
              Momentor is India’s first education journalism + future-skills mentorship platform guiding youth with clarity, skills, and global career opportunities.
            </p>


            <p className="mt-6 font-semibold text-[#222222] text-[15px]">Social Media</p>

            <div className="flex gap-5 mt-4 text-[#CF6943]">
              <FaInstagram size={22} />
              <FaFacebookF size={22} />
              <FaTwitter size={22} />
              <FaLinkedinIn size={22} />
            </div>
          </div>

          {/* Column Group (Company, Social, Legal) */}
          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-10">

            {/* Company */}
            <div>
              <h3 className="font-semibold text-[#222222] mb-4 text-[15px]">Company</h3>
              <ul className="space-y-2 text-sm text-[#4A4A4A]">
                <li>About Momentor</li>
                <li>Founder Story</li>
                <li>Our Mission</li>
                <li>What We Do</li>
              </ul>

            </div>

            {/* Social */}
            <div>
              <h3 className="font-semibold text-[#222222] mb-4 text-[15px]">Social</h3>
              <ul className="space-y-2 text-sm text-[#4A4A4A]">
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Facebook</li>
                <li>Instagram</li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold text-[#222222] mb-4 text-[15px]">Legal</h3>
              <ul className="space-y-2 text-sm text-[#4A4A4A]">
                <li>Terms</li>
                <li>Privacy</li>
                <li>Cookies</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>

          {/* Contact Us Column */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-[#222222] mb-4 text-[15px]">Contact Us</h3>

            <p className="text-sm text-[#4A4A4A] leading-5 mb-5">
              Have questions? We’re here to guide you. Reach out to our team anytime.
            </p>


            <ul className="space-y-4 text-sm text-[#4A4A4A]">
              <li className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#FAD7CA] text-[#CF6943]">
                  <IoCall size={15} />
                </span>
                +91 98765 43210
              </li>

              <li className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#FAD7CA] text-[#CF6943]">
                  <IoMail size={15} />
                </span>
                hello@momentor.in
              </li>

              <li className="flex items-start gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#FAD7CA] text-[#CF6943] mt-1">
                  <IoLocationSharp size={15} />
                </span>
                <span>
                  Hilite Business Park <br />
                  Palazhi, Calicut <br />
                  Kerala, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-14 pt-6 border-t border-[#E5C7BD] text-center text-sm text-[#4A4A4A]">
          © {new Date().getFullYear()} Momentor — All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
