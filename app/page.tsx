"use client";
import ModeButton from "@/components/mode-toggle";


export default function Home() {
  
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-background">
      <div className="absolute top-10 right-10 sm:top-20 sm:right-20 text-text"><ModeButton/></div>
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-background sm:items-start text-text">
        <h1 className="text-4xl">Light Chidiebere Osuji</h1>

      </main>
    </div>
  );
}
