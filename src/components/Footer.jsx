import React from "react";

const Footer = () => {
  return (
    <div className="w-full  ">
        <div className="flex flex-row px-10 py-20">
      <div className="text-[0.8rem] w-[15%]">
        <ul className="py-4">
          <li>About</li>
          <li>Instagram</li>
          <li>Facebook</li>
        </ul>
        <ul className="py-4">
          <li>Terms</li>
          <li>Careers</li>
          <li>Back to top</li>
          <li>Terms of Service</li>
          <li>Refund policy</li>
        </ul>
        <ul className="py-4">
            <li>site By Shekhar</li>
        </ul>
      </div>
      <div className="text-[0.8rem] w-[85%] py-4">
        <p>Store Location & Hours:</p>
        <p>270 Ponsonby Road, Auckland 1011</p>
        <p>Monday to Saturday 9:30am - 5:00pm</p>
        <p>Sunday 9:30am - 4:30pm</p>
        <p>Click & Collect is available within store hours</p>
      </div>
      <div>
        <h1>Tel: +64-9-378-7988</h1>
        <h1>studio@everyday-needs.com</h1>
        <h1>Subscribe to our Newsletter</h1>
      </div>
      </div>
    </div>
  );
};

export default Footer;
