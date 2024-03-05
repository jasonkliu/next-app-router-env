'use client';
import Link from "next/link";
import React, { useState } from 'react';

export default function HomePage() {
  const [text, setText] = useState('');

  async function handleButtonClick () {
    // Fetch data from server-side route
    const response = await fetch('/api');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log('Received data:', data);
    setText(data.message);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Next App Router Env Variable
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <button
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            onClick={handleButtonClick}
          >
            <h3 className="text-2xl font-bold">Click Me →</h3>
            <div className="text-lg">
              Call server-side API
            </div>
          </button>
          <textarea
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            value={text}
          >
          </textarea>
        </div>
      </div>
    </main>
  );
}
