import React from "react";

const TheJournal = () => {
  return (
    <div className="flex items-center justify-center  ">
      <div className="md:w-[70%]  flex flex-col md:items-start   justify-center md:my-20 my-10 md:px-6 ">
        <div className="md:w-1/3 md:px-0 px-8">
          <h1 className="md:text-[1.2rem] text-[1rem] pb-4 ">
            Scenes in Jane and Arch’s home and beloved garden and musings on
            some of their archival Everyday Needs pieces from collections past.
          </h1>
          <h1 className="md:text-[1rem] text-[0.8rem] md:pb-20 pb-10 ">
          Images by Thomas Asche
          </h1>
        </div>
        <div className=" flex md:flex-row flex-col   md:gap-10 gap-20  md:my-20">
          <div className="md:w-1/2  text-[0.8rem] md:px-0 px-8  ">
            <img src="/img/Stan_Bitters-72.webp" alt="" />
            <p className="pt-4">
              Everyday Needs is a New Zealand owned and operated store.This was
              love at first sight for us. We bought it as a sculptural piece for
              our garden and a gift to our resident birds. It wasn’t until we
              saw the movie about his work that we realised the skill in making
              a spherical object out of clay.
            </p>
          </div>
          <div className="md:w-1/3 md:px-0 px-16">
            <img src="/img/Pepper_Grinder.webp" />
          </div>
        </div>
        <div className=" flex md:flex-row flex-col justify-end   md:gap-40 gap-20 my-20">
          <div className="md:w-1/3 md:px-0 px-16 md:ml-12">
            <img src="/img/Bottle_Opener.jpg" />
          </div>
          <div className="md:w-1/2  text-[0.8rem] md:px-0 px-8  md:space-y-4">
            <img src="/img/Garden_Bag.webp" alt="" />
            <p className="pt-4">
              This collab with Deadly Ponies is such a useful item in the
              garden. It holds everything you need for a date with the weeds.
            </p>
          </div>
        </div>
        <div className=" flex md:flex-row flex-col md:my-20">
          <div className="md:w-2/3 md:px-0 px-8 text-[0.8rem] space-y-4">
            <img src="/img/Watering_Can.webp" />
            <p>Our friend gave us this watering can and remarked how it looked like a silo. It really does. We use it daily.</p>
          </div>
        </div>
        <div className=" flex md:flex-row flex-col my-20">
          <div className=" md:px-0 px-8">
            <img src="/img/Journal.webp" />
          </div>
        </div>
        <div className=" flex md:flex-row flex-col md:my-20 md:mb-0 mb-20">
          <div className="md:w-2/3 md:px-0 px-8 text-[0.8rem] space-y-4">
            <img src="/img/Garlic_Holder.webp" />
            <p >We love the nostalgia of this piece. It reminds us of the cool houses you’d visit as a kid in the 70s.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheJournal;
