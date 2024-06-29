'use client'; // Error components must be Client Components

import Link from 'next/link';
import { useEffect } from 'react';

export default function Error( {
  error,
  reset,
}: {
  error: Error & { digest?: string; };
  reset: () => void;
} ) {
  useEffect( () => {
    // Log the error to an error reporting service
    console.error( error );
  }, [ error ] );

  return (

    <main className="h-screen w-full flex flex-col justify-center items-center ">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
      <div className="bg-[#079] px-2 text-sm rounded rotate-12 absolute">
        Product Not Found
      </div>
      <button className="mt-5">
          <div
            className="relative inline-block text-sm font-medium text-[#079] group active:text-[#07F] focus:outline-none focus:ring"
          >
            <span
              className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#079] group-hover:translate-y-0 group-hover:translate-x-0"
            ></span>
    
            <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
              <Link href="/admin/products">Go Products</Link>
            </span>
          </div>
        </button>
    </main>
  );
}