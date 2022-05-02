import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.scss";

const Footer = () => {
  return (
    <div className="bg-green-primary py-10 text-white text-xs">
      <div className="container flex justify-center">
        <div className="grid grid-cols-10 gap-12">
          <div className="lg:col-span-2 col-span-5">
            <div className="header py-3">CONTACT US</div>
            <div className="body">
              <div className="">+44 345 678 903</div>
              <div className="">saveme@mail.com</div>
            </div>
          </div>
          <div className="lg:col-span-2 col-span-5">
            <div className="header py-3">CUSTOMER SERVICE</div>
            <div className="body">
              <div className="">+44 345 678 903</div>
              <div className="">saveme@mail.com</div>
            </div>
          </div>

          <div className="lg:col-span-2 col-span-5">
            <div className="header py-3">INFORMATION</div>

            <div className="body">
              <div className="">+44 345 678 903</div>
              <div className="">saveme@mail.com</div>
            </div>
          </div>

          <div className="lg:col-span-4 col-span-5">
            <div className="header py-3">SUBSCRIBE TO SAVEME VIA EMAIL</div>

            <div className="body">
              <div className="">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="rounded py-2 px-3 border-white border-2 
               text-white bg-transparent placeholder-white focus:outline-none
               focus:border-green-secondary transition-all duration-500"
                />

                <button
                  className="bg-white text-green-primary py-2 px-4
                rounded hover:bg-gray-100 mx-4 font-bold transition-all duration-300"
                >
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
