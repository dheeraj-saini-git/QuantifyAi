import React from "react";
import { assets, dummyTestimonialData } from "../assets/assets.js";

const Testimonial = () => {
  
  const CreateCard = ({ card }) => (
    <div className="p-4 rounded-lg mx-4 shadow hover:shadow-lg transition-all duration-200 w-72 shrink-0">
      <div className="flex gap-2">
        <img
          className="size-11 rounded-full"
          src={card.image}
          alt="User Image"
        />
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <p>{card.name}</p>
          </div>
          <span className="text-xs text-slate-500">{card.handle}</span>
        </div>
      </div>
      <div className="flex items-center gap-1 mt-3">
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <img
            key={index}
              src={
                index < card.rating ? assets.star_icon : assets.star_dull_icon
              }
              className="w-4 h-4"
              alt=""
            />
          ))}
      </div>
      <p className="text-sm py-4 text-gray-800">{card.content}</p>
      <div className="flex items-center justify-between text-slate-500 text-xs">
        <div className="flex items-center gap-1">
          <span>Posted on</span>
          <a
            href="https://x.com"
            target="_blank"
            className="hover:text-sky-500"
          >
            <svg
              width="11"
              height="10"
              viewBox="0 0 11 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m.027 0 4.247 5.516L0 10h.962l3.742-3.926L7.727 10H11L6.514 4.174 10.492 0H9.53L6.084 3.616 3.3 0zM1.44.688h1.504l6.64 8.624H8.082z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
        <p>{card.date}</p>
      </div>
    </div>
  );

  return (
    <>
      <style>{`
            @keyframes marqueeScroll {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
            }

            .marquee-inner {
                animation: marqueeScroll 25s linear infinite;
            }

            .marquee-reverse {
                animation-direction: reverse;
            }
        `}</style>

      <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative">
        <div className="absolute left-0 top-0 h-full w-20 z-1 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
        <div className="max-w-2xl mx-auto z-20 my-20">
          <div className="text-center">
            <h2 className="text-slate-700 text-[42px] font-semibold">
              Loved by Creators
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Don't just take our word for it. Here's what our users are saying.
            </p>
          </div>
        </div>
        <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] pt-10 pb-5">
          {[...dummyTestimonialData, ...dummyTestimonialData].map(
            (card, index) => (
              <CreateCard key={index} card={card} />
            )
          )}
        </div>
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-1 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
      </div>
    </>
  );
};

export default Testimonial;
