import React from 'react';
import {StarIcon} from '@heroicons/react/solid';

export function PartnerShowcase() {
  return (
    <div className="partner-showcase-container bg-neutral-100 py-4 flex">
      <div className="reference-container w-[30%] pl-5 border-r border-gray-300">
        <button className=" whitespace-nowrap text-sm w-[12rem] h-[2.5rem] rounded-lg cursor-pointer bg-gray-200 border border-black font-medium">
          #1 Doctor Recommended
        </button>
        <div className="flex whitespace-nowrap my-2 flex items-center">
          <StarIcon className="h-5 w-5 text-yellow-500" />
          <StarIcon className="h-5 w-5 text-yellow-500" />
          <StarIcon className="h-5 w-5 text-yellow-500" />
          <StarIcon className="h-5 w-5 text-yellow-500" />
          <StarIcon className="h-5 w-5 text-yellow-500" />
          &nbsp;12,000+ 5-star Reviews
        </div>
      </div>
      <div className="partner-showcase-content flex justify-center items-center w-[70%]">
        <div className="partner-showcase-content flex justify-center items-center space-x-8">
          <div className="flex items-center justify-center rounded-lg bg-white h-10 w-20">
            <img src="/rolingStone.png" alt="Rolling Stone" className="h-7" />
          </div>
          <div className="flex items-center justify-center rounded-lg bg-white h-10 w-20">
            <img src="/MENS JOURNAL.png" alt="Men's Journal" className="h-5" />
          </div>
          <div className="flex items-center justify-center rounded-lg bg-white h-10 w-20">
            <img src="/HERB.png" alt="Herb" className="h-4" />
          </div>
          <div className="flex items-center justify-center rounded-lg bg-white h-10 w-20">
            <img src="/rolingStone.png" alt="Rolling Stone" className="h-7" />
          </div>
          <div className="flex items-center justify-center rounded-lg bg-white h-10 w-20">
            <img src="/MENS JOURNAL.png" alt="Men's Journal" className="h-5" />
          </div>
          <div className="flex items-center justify-center rounded-lg bg-white h-10 w-20">
            <img src="/HERB.png" alt="Herb" className="h-4" />
          </div>
          <div className="flex items-center justify-center rounded-lg bg-white h-10 w-20">
            <img src="/rolingStone.png" alt="Rolling Stone" className="h-7" />
          </div>
          <div className="flex items-center justify-center rounded-lg bg-white h-10 w-20">
            <img src="/MENS JOURNAL.png" alt="Men's Journal" className="h-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
