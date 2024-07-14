'use client'
import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Transition } from '@headlessui/react';

export default function FancyCartDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="relative">
        <FaShoppingCart size={32} color="#147444" className="cursor-pointer" onClick={toggleDrawer} />
        <div className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
          3
        </div>
      </div>

      <Transition show={isOpen}>
        <Transition.Child
          enter="transition transform duration-300"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition transform duration-300"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <div
            className="fixed top-0 right-0 z-50 h-full p-4 bg-white shadow-lg w-80">
            <button className="text-gray-600" onClick={toggleDrawer}>
              Close
            </button>
            <div className="mt-4">
              <p>Your shopping cart is empty.</p>
            </div>
          </div>
        </Transition.Child>
        <Transition.Child
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            onClick={toggleDrawer}
            className="fixed inset-0 z-[100] bg-black bg-opacity-50 m-0"
          ></div>
        </Transition.Child>
      </Transition>
    </>
  );
}