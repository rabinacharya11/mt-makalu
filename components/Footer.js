import Link from "next/link";
import ContactInfo from "./footer/ContactInfo";
import QuickLinks from "./footer/QuickLinks";
import SocialLinks from "./footer/SocialLinks";

function Footer() {
  return (
    <footer>
      <div>
        <div className="flex  flex-col md:flex-row  p-4 justify-evenly   text-gray-300 bg-[#021e31]">
          <SocialLinks />
          <QuickLinks />
          <ContactInfo />
        </div>
        <hr className="bg-white h-0.5" />
        <div className="flex flex-col md:flex-row justify-between px-16 place-items-center h-12 bg-[#021e31]">
          <h1>Copyright &copy; 2021 Mount Makalu</h1>
          <a href="https://www.rabinacharya.info.np" target='_blank'>
            <h1 className="text-xs"> <span className="hover:text-yellow-400">Developed By Rabin Acharya</span></h1>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
