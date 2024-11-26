import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {
  SearchIcon,
  UserIcon,
  ShoppingCartIcon,
  UserGroupIcon,
} from '@heroicons/react/outline';

function GenderToggle() {
  const [isMale, setIsMale] = useState(true);
  const handleToggle = () => {
    setIsMale(!isMale);
  };
  return (
    <label className="inline-flex items-center cursor-pointer">
      {' '}
      <input
        type="checkbox"
        className="sr-only peer"
        checked={isMale}
        onChange={handleToggle}
      />{' '}
      <div className="relative w-24 h-11 bg-gray-200 rounded-lg peer">
        {' '}
        <div
          className={`absolute top-2 w-7 h-7 rounded-full transition-transform duration-500 bg-white flex items-center justify-center transform ${
            isMale ? 'translate-x-1' : 'translate-x-16'
          }`}
        >
          {' '}
          {isMale ? (
            <UserGroupIcon className="h-5 w-5 text-black" />
          ) : (
            <UserIcon className="h-5 w-5 text-black" />
          )}{' '}
        </div>{' '}
        <div className="absolute inset-0 flex items-center justify-between px-2 text-xs font-medium text-black">
          {' '}
          <span
            className={`${
              isMale ? 'opacity-0' : 'opacity-100 p-3'
            } transition-opacity transition-p duration-700 p-1 text-[14px] font-medium`}
          >
            {' '}
            Men{' '}
          </span>{' '}
          <span
            className={`${
              isMale ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-700  text-[14px] font-medium`}
          >
            {' '}
            Women{' '}
          </span>{' '}
        </div>{' '}
      </div>{' '}
    </label>
  );
}

function Navbar() {
  return (
    <div className="relative">
      {' '}
      <nav className="flex justify-between items-center absolute top-5 left-1/2 transform -translate-x-1/2 bg-white w-[95%] h-[70px] z-20 p-4 rounded-lg shadow-lg">
        {' '}
        <div className="flex items-center">
          {' '}
          <Link
            to="/"
            className="text-left text-black text-xl font-bold no-underline"
          >
            {' '}
            UNCMFRT.COM{' '}
          </Link>{' '}
        </div>{' '}
        <div className="flex items-center text-[14px] w-[30%]">
          {' '}
          <SearchIcon className="h-[16px] w-[16%] text-black" />{' '}
          <Link to="/shop" className="text-black hover:text-gray-700 w-[16%] ">
            {' '}
            Shop{' '}
          </Link>{' '}
          <Link
            to="/science"
            className="text-black hover:text-gray-700 w-[16%] relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-black after:left-0"
          >
            {' '}
            Science{' '}
          </Link>{' '}
          <Link
            to="/podcasts"
            className="text-black hover:text-gray-700 w-[16%]"
          >
            {' '}
            Podcasts{' '}
          </Link>{' '}
          <Link
            to="/trainers"
            className="text-black hover:text-gray-700 w-[16%]"
          >
            {' '}
            Trainers{' '}
          </Link>{' '}
          <Link to="/blog" className="text-black hover:text-gray-700 w-[16%]">
            {' '}
            Blog{' '}
          </Link>{' '}
        </div>{' '}
        <div className="flex items-center space-x-2">
          {' '}
          <GenderToggle />{' '}
          <button className="bg-black text-white px-4 py-2 rounded-lg shadow-lg w-[50%] font-medium text-[14px] h-[45px] cursor-pointer">
            {' '}
            Take The Quiz{' '}
          </button>{' '}
          <UserIcon className="h-6 w-6 text-black cursor-pointer" />{' '}
          <ShoppingCartIcon className="h-6 w-6 text-black cursor-pointer" />{' '}
        </div>{' '}
      </nav>{' '}
    </div>
  );
}

export function Header() {
  return (
    <header>
      <Navbar></Navbar>
    </header>
  );
}
