import React from "react";

const AboutUs = () => {
  return (
    <div className="flex items-center justify-center  ">
      <div className="md:w-[70%]  flex flex-col md:items-start   justify-center md:my-20 my-10 md:px-6 ">
        <div className="md:w-1/2 md:px-0 px-16">
            <h1 className="text-[1.2rem] md:pb-20 pb-10 font-semibold">About Us</h1>
        </div>
        <div className=" flex md:flex-row flex-col items-start md:gap-40 gap-20 ">
          <div className="md:w-1/4 text-[0.8rem] md:px-0 px-16">
            <p>
              Everyday Needs is a store for those who want to make informed
              decisions for their way of living. Carefully sourced and
              personally curated, Everyday Needs offers products that please the
              eye and are made for everyday use, with a thoughtfulness and
              quality that will stand the test of time. Some pieces are truly
              unique and not to be found elsewhere, whereas other products are
              tried and true classic items that we cannot live without. Our
              selection is unique and ever-changing.
              </p>
              <p className="pt-4">Everyday Needs is a New Zealand owned and operated store.
            </p>
          </div>

          <div className="md:w-1/3 md:px-0 px-12">
            <img src="/img/aboutUs.webp" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
